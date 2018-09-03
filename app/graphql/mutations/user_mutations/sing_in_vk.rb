module Mutations
  class UserMutations::SingInVk < GraphQL::Schema::RelayClassicMutation
    field :token, String, null: false


    argument :name, String, required: true
    argument :domain, String, required: true
    argument :strvk, String, required: true
    argument :sig, String, required: true


    def resolve(name:, domain:, strvk:, sig:)

        secret = "FS4qzIkenYuqIYoBDA7B"
        full_str = strvk + secret

        md5_sig = Digest::MD5.hexdigest(full_str)

        if md5_sig == sig

          user = User.find_by email: domain
          if user.nil?
            user = User.create!(
              name: name,
              email: domain,
              password: '123123'
            )
          end

          crypt = ActiveSupport::MessageEncryptor.new(Rails.application.credentials.secret_key_base.byteslice(0..31))
          token = crypt.encrypt_and_sign("user-id")
          context[:session][:token] = token


          return { token: token }
        else
          return { token: "md5 fail " + full_str }
        end

    rescue ActiveRecord::RecordInvalid => e
      GraphQL::ExecutionError.new("Invalid input: #{e.record.errors.full_messages.join(', ')}")
    end

  end
end
