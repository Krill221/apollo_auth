import React from 'react';
import ServerLogIn from "./ServerLogIn";
import SingInFacebook from "./SingInFacebook";
import SingInVK from "./SingInVK";




export const Panel = () => (
  <div>
    <ServerLogIn />
    <hr />
    <SingInFacebook />
    <hr />
    <SingInVK />

  </div>
)
