import React from 'react';
import FacebookLogin from 'react-facebook-login';
import {Mutation} from 'react-apollo';
import {ApolloConsumer} from "react-apollo";
import {SING_IN_FACEBOOK} from "../queries";
import {CURRENT_USER_TOKEN} from "../queries";



class Facebook extends React.Component {

  state = {
    isLoggedIn: false,
    userId: '',
    name: '',
    email: '',
    picture: '',
    accessToken: ''
  }

  componentClicked = () => {
  }

  responseFacebook = response => {
    console.log(response);
    this.setState({
      isLoggedIn: true,
      userId: response.userId,
      name: response.name,
      email: response.email,
      picture: response.picture.data.url,
      accessToken: response.accessToken
    });
  }

  render() {
    let fbContent = '';

    if(this.state.isLoggedIn){
        fbContent = (<ApolloConsumer>
          { (client) => {
            client.mutate({ mutation: SING_IN_FACEBOOK,
              variables: { facebooktoken: this.state.accessToken },
              refetchQueries: [{query: CURRENT_USER_TOKEN}]
            })
            return <div>{this.state.name}</div>;
          }}
        </ApolloConsumer>)
    } else {
      fbContent = (<FacebookLogin
          appId="2318681708359292"
          autoLoad={false}
          fields="name,email,picture"
          onClick={this.componentClicked}
          callback={this.responseFacebook} />)
    }

    return <div>{fbContent}</div>;
  }
}

export default Facebook
