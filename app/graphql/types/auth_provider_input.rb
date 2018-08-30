module Types
  class AuthProviderInput < Types::BaseInputObject
    argument :email, Types::AuthProviderEmailInput
  end
end
