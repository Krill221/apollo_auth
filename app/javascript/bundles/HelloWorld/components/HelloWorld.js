import React from 'react';
import { ApolloProvider } from "react-apollo";

import {HttpLink} from 'apollo-link-http';
import {ApolloClient} from 'apollo-client';
import {InMemoryCache} from 'apollo-cache-inmemory';

import { Panel } from "./Panel";

let httpLink = new HttpLink({uri: `http://localhost:3000/graphql`});
const apollo_client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache({addTypename: false})
});


export default class HelloWorld extends React.Component {
  render() {
    return (
     <ApolloProvider client={apollo_client}>
       <div>
         <Panel />
       </div>
     </ApolloProvider>
    );
  }
}
