import React from 'react';
import {Mutation} from 'react-apollo';
import {SING_IN} from '../queries';
import {CURRENT_USER_TOKEN} from "../queries";

const SingIn = () => {
  let input_email;
  let input_password;

  return (
    <Mutation mutation={SING_IN} refetchQueries={[{query: CURRENT_USER_TOKEN}]}>
      { (SingIn) => (
        <div>
            <input ref={node => { input_email = node; }} />
            <input ref={node => { input_password = node; }} />
            <button onClick={ () => SingIn({ variables: { email: input_email.value, password: input_password.value } }) } >
              SingIn
            </button>
        </div>
      )}
    </Mutation>
  );
};

export default SingIn
