import React from 'react';
import { Query } from "react-apollo";

import {CURRENT_USER_TOKEN} from "../queries";

export const User = () => (
  <Query query={CURRENT_USER_TOKEN} >
  { ({ loading, error, data }) => {
      if (loading) return <div>Loading...</div>
      if (error) return <div>Error...</div>
      return <div>{data.currentUserToken}</div>;
    }
  }
  </Query>
)
