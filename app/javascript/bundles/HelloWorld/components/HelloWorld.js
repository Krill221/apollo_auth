import React from 'react';
import { ApolloProvider } from "react-apollo";

import {HttpLink} from 'apollo-link-http';
import {ApolloClient} from 'apollo-client';
import {InMemoryCache} from 'apollo-cache-inmemory';

import { User } from "./User";



let httpLink = new HttpLink({uri: `http://0.0.0.0:3000/graphql`});
const apollo_client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache({addTypename: false})
});


export default class HelloWorld extends React.Component {
  render() {
    return (
     <ApolloProvider client={apollo_client}>
       <div>
         <User />
       </div>
     </ApolloProvider>
    );
  }
}
