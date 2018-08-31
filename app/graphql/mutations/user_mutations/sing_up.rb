module Mutations
  class UserMutations::SingUp < GraphQL::Schema::RelayClassicMutation
    ## args
    argument :name, String, required: true
    argument :email, String, required: true
    argument :password, String, required: true

    ## return
    field :user, Types::UserType, null: true

    def resolve(name:, email:, password:)
      user = User.create!(
        name: name,
        email: email,
        password: password
      )
      return {user: user}
    rescue ActiveRecord::RecordInvalid => e
      GraphQL::ExecutionError.new("Invalid input: #{e.record.errors.full_messages.join(', ')}")
    end
  end
end
