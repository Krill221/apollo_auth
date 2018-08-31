module Mutations
  class UserMutations::SingIn < GraphQL::Schema::RelayClassicMutation


    # TODO: define arguments
    argument :email, Types::AuthProviderEmailInput, required: true


    # TODO: define return fields
    field :token, String, null: false
    field :user, Types::UserType, null: false


    # TODO: define resolve method
    def resolve(email:)
      input = email

      # basic validation
      return unless input

      user = User.find_by email: input.email

      # ensures we have the correct user
      return unless user
      return unless user.authenticate(input.password)

      crypt = ActiveSupport::MessageEncryptor.new(Rails.application.credentials.secret_key_base.byteslice(0..31))
      token = crypt.encrypt_and_sign("user-id:#{ user.id }")
      context[:session][:token] = token

      return {user: user, token: token }

    rescue ActiveRecord::RecordInvalid => e
      GraphQL::ExecutionError.new("Invalid input: #{e.record.errors.full_messages.join(', ')}")
    end
  end
end
