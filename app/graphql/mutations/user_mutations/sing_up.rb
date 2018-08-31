module Mutations
  class UserMutations::SingUp < GraphQL::Schema::RelayClassicMutation
    ## args
    argument :name, String, required: true
    argument :authProvider, Types::AuthProviderInput, required: true

    ## return
    field :user, Types::UserType, null: true

    def resolve(name:, auth_provider:)
      user = User.create!(
        name: name,
        email: auth_provider.email.email,
        password: auth_provider.email.password
      )
      return {user: user}
    rescue ActiveRecord::RecordInvalid => e
      GraphQL::ExecutionError.new("Invalid input: #{e.record.errors.full_messages.join(', ')}")
    end
  end
end
