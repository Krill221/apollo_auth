module Mutations
  class UserMutations::SingOut < GraphQL::Schema::RelayClassicMutation
    ## args
    argument :id, String, required: true

    ## return
    field :token, String, null: true

    def resolve(id:)
      context[:session].delete(:token)
      return {token: ''}
    rescue ActiveRecord::RecordInvalid => e
      GraphQL::ExecutionError.new("Invalid input: #{e.record.errors.full_messages.join(', ')}")
    end
  end
end
