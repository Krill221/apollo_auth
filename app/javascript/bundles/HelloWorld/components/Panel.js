import React from 'react';
import { User } from "./User";
import SingIn from "./SingIn";
import SingOut from "./SingOut";
import SingUp from "./SingUp";



export const Panel = () => (
  <div>
    <User />
    <SingIn />
    <SingOut />
    <SingUp />
  </div>
)
