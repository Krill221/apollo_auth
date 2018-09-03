module Mutations
  class UserMutations::SingInFacebook < GraphQL::Schema::RelayClassicMutation
    field :token, String, null: false

    argument :facebooktoken, String, required: true

    def resolve(facebooktoken:)
      @graph = Koala::Facebook::API.new(facebooktoken)
      begin
        @graph = Koala::Facebook::API.new(facebooktoken)
        res = @graph.debug_token(facebooktoken)
        if res['data']['is_valid']
          data = @graph.get_object("me",{ fields: [:name,:email]})
          user = User.find_by email: data['email']
          if user.nil?
            user = User.create!(
              name: data['name'],
              email: data['email'],
              password: '123123'
            )
          end

          token = user.generate_access_token
          context[:session][:token] = token

          return { token: token }
        end
      rescue => error
        return { token: error.inspect }
      end
    rescue ActiveRecord::RecordInvalid => e
      GraphQL::ExecutionError.new("Invalid input: #{e.record.errors.full_messages.join(', ')}")
    end
  end
end
