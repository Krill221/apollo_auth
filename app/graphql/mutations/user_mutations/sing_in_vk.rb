module Mutations
  class UserMutations::SingInVk < GraphQL::Schema::RelayClassicMutation
    field :token, String, null: false

    argument :str_vk, String, required: true
    argument :sig, String, required: true


    def resolve(str_vk:, sig:)

        secret = "FS4qzIkenYuqIYoBDA7B"
        full_str = str_vk + secret

        md5_sig = Digest::MD5.hexdigest(str)

        if md5_sig == sig
          token = "123"
          return { token: token }
        else
          return { token: "md5 fail" }
        end

    rescue ActiveRecord::RecordInvalid => e
      GraphQL::ExecutionError.new("Invalid input: #{e.record.errors.full_messages.join(', ')}")
    end

  end
end
