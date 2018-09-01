import React from 'react';
import {Mutation} from 'react-apollo';
import {SING_OUT} from '../queries';
import {CURRENT_USER_TOKEN} from "../queries";


const SingOut = () => {
  return (
    <Mutation mutation={SING_OUT} refetchQueries={[{query: CURRENT_USER_TOKEN}]}>
      { (SingOut) => (
        <div>
            <button onClick={ () => SingOut({ variables: {id: '' } }) } >
              SingOut
            </button>
        </div>
      )}
    </Mutation>
  );
};

export default SingOut
