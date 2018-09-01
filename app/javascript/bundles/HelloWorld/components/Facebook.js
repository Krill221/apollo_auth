import React from 'react';
import FacebookLogin from 'react-facebook-login';

class Facebook extends React.Component {

  state = {
    isLoggedIn: false,
    userId: '',
    name: '',
    email: '',
    picture: ''
  }

  componentClicked = () => {
    console.log('componentClicked');
  }

  responseFacebook = response => {
    console.log(response);
    this.setState({
      isLoggedIn: true,
      userId: response.userId,
      name: response.name,
      email: response.email,
      picture: response.picture.data.url
    });
  }

  render() {
    let fbContent = '';

    if(this.state.isLoggedIn){
      fbContent = (<div>
        <div>{this.state.name}</div>
        <div>{this.state.email}</div>
        <img src={this.state.picture} />
        </div>)
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
