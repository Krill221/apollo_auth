module Types
  class QueryType < GraphQL::Schema::Object

    field :current_user_token, String, null: false,
      description: 'fetch the current user token.'
    def current_user_token
       context[:session][:token].to_s
    end

  end
end
