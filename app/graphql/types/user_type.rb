module Types
  class UserType < Types::BaseObject
    field :id, ID
    field :name, String
    field :email, String
  end
end
