class Types::MutationType < GraphQL::Schema::Object
    field :singOut, mutation: Mutations::UserMutations::SingOut
    field :singIn, mutation: Mutations::UserMutations::SingIn
    field :singUp, mutation: Mutations::UserMutations::SingUp
end
