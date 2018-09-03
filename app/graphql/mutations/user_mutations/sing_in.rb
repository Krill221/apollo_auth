module Mutations
  class UserMutations::SingIn < GraphQL::Schema::RelayClassicMutation


    # TODO: define arguments
    argument :email, String, required: true
    argument :password, String, required: true


    # TODO: define return fields
    field :token, String, null: false
    field :user, Types::UserType, null: false


    # TODO: define resolve method
    def resolve(email:, password:)
      # basic validation
      return unless email

      user = User.find_by email: email

      # ensures we have the correct user
      return unless user
      return unless user.authenticate(password)

      token = user.generate_access_token
      context[:session][:token] = token

      return {user: user, token: token }

    rescue ActiveRecord::RecordInvalid => e
      GraphQL::ExecutionError.new("Invalid input: #{e.record.errors.full_messages.join(', ')}")
    end
  end
end
