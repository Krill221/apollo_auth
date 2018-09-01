import React from 'react';
import {Mutation} from 'react-apollo';
import {SING_UP} from '../queries';

const SingUp = () => {
  let input_name;
  let input_email;
  let input_password;

  return (
    <Mutation mutation={SING_UP} >
      { (SingUp) => (
        <div>
          name: <input ref={node => { input_name = node; }} />
          email: <input ref={node => { input_email = node; }} />
          pass: <input ref={node => { input_password = node; }} />
          <button onClick={ () => SingUp({ variables: { name: input_name.value, email: input_email.value, password: input_password.value } }) } >
              SingUp
          </button>
        </div>
      )}
    </Mutation>
  );
};

export default SingUp
