import React from 'react';
import VkAuth from 'react-vk-auth';
import {Mutation} from 'react-apollo';
import {ApolloConsumer} from "react-apollo";
import {SING_IN_VK} from "../queries";
import {CURRENT_USER_TOKEN} from "../queries";


class SingInVK extends React.Component {

  state = {
    isLoggedIn: false,
    userId: '',
    name: '',
    expire: '',
    secret: '',
    sid: '',
    sig: ''
  }

  responseVK = (response) => {
    this.setState({
      isLoggedIn: true,
      userId: response.session.mid,
      name: response.session.user.first_name + ' ' + response.session.user.last_name,
      expire: response.session.expire,
      secret: response.session.secret,
      sid: response.session.sid,
      sig: response.session.sig
    });

  }

  render() {


    let content = (<VkAuth apiId="6681159" callback={this.responseVK} >
      LOGIN WITH VK
    </VkAuth>);


    if(this.state.isLoggedIn){
        let str_vk = "expire="+this.state.expire+"mid="+this.state.userId+"secret="+this.state.secret+"sid="+this.state.sid
        console.log(str_vk);
        console.log(this.state.sig);
        content = (<ApolloConsumer>
          { (client) => {
            client.mutate({ mutation: SING_IN_VK,
              variables: { str_vk: str_vk, sig: this.state.sig },
              refetchQueries: [{query: CURRENT_USER_TOKEN}]
            })
            return <div>
              <div>{this.state.userId}</div>
              <div>{this.state.name}</div>
              <div>{this.state.expire}</div>
              <div>{this.state.secret}</div>
              <div>{this.state.sid}</div>
              <div>{this.state.sig}</div>
            </div>;
          }}
        </ApolloConsumer>)
    }

    return content;
  }
}

export default SingInVK
