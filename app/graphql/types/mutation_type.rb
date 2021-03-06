class Types::MutationType < GraphQL::Schema::Object
    field :singInVk, mutation: Mutations::UserMutations::SingInVk
    field :singInFacebook, mutation: Mutations::UserMutations::SingInFacebook
    field :singOut, mutation: Mutations::UserMutations::SingOut
    field :singIn, mutation: Mutations::UserMutations::SingIn
    field :singUp, mutation: Mutations::UserMutations::SingUp
end
