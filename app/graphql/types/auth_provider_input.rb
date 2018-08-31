module Types
  class AuthProviderInput < Types::BaseInputObject
    argument :email, Types::AuthProviderEmailInput, required: true
  end
end
