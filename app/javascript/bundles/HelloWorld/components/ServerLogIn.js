import React from 'react';
import { User } from "./User";
import SingIn from "./SingIn";
import SingOut from "./SingOut";
import SingUp from "./SingUp";

const ServerLogIn = () => (
  <div>
    <div>Server Auth</div>
    <User />
    <hr />
    <SingIn />
    <hr />
    <SingOut />
    <hr />
    <SingUp />
    <hr />
  </div>
)

export default ServerLogIn
