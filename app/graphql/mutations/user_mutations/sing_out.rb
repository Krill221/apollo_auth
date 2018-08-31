module Mutations
  class UserMutations::SingOut < GraphQL::Schema::RelayClassicMutation
    field :token, String, null: false
    def resolve()
      context[:session].delete(:token)
      { token: '' }
    rescue ActiveRecord::RecordInvalid => e
       GraphQL::ExecutionError.new("Invalid input: #{e.record.errors.full_messages.join(', ')}")
    end
  end
end
