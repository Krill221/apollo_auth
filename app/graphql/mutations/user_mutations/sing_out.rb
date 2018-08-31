module Mutations
  class UserMutations::SingOut < GraphQL::Schema::RelayClassicMutation
    # TODO: define return fields
    field :token, String, null: false

    # TODO: define arguments

    # TODO: define resolve method
    def resolve()
      context[:session].delete(:token)
      { token: '' }
    rescue ActiveRecord::RecordInvalid => e
       GraphQL::ExecutionError.new("Invalid input: #{e.record.errors.full_messages.join(', ')}")
    end
  end
end
