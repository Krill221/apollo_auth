
import gql from "graphql-tag";

export const CURRENT_USER_TOKEN = gql`{
    currentUserToken
}`


export const SING_IN = gql`
mutation SingIn($email: String!, $password: String!) {
  singIn(input:{
    email: $email,
    password: $password
  }) {
    token
    user {
      id
    }
  }
}`

export const SING_OUT = gql`
mutation SingOut($id: String!) {
  singOut(input:{id: $id}) {
    token
  }
}`


export const SING_UP = gql`
mutation SingUp($name: String!, $email: String!, $password: String!) {
  singUp(input:{
    name: $name
    email: $email,
    password: $password
  }) {
    user {
      id
    }
  }
}`

export const SING_IN_FACEBOOK = gql`
mutation SingInFacebook($facebooktoken: String!) {
  singInFacebook(input: { facebooktoken: $facebooktoken }) {
      token
  }
}`

export const SING_IN_VK = gql`
mutation SingInVk($name: String!, $domain: String!, $strvk: String!, $sig: String!) {
  singInVk(input: {name: $name, domain: $domain, strvk: $strvk, sig: $sig }) {
      token
  }
}`
