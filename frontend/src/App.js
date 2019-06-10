import React, { Component } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import './App.css';


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      id_token: null
    }
  }

  responseGoogle = (response) => {
    this.setState({id_token: response.tokenObj.id_token})
  }

  request = ()=>{
    const options = {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        id_token: this.state.id_token
      })
    };
    fetch('http://localhost:5000/test', options)
      .then(res => res.text())
      .then(res => console.log(res))
      .catch((error) => console.log(error));
  }

  render = () => {
    if(this.state.id_token !== null)
      console.log(this.request())
    return (
      <div>
        <GoogleLogin
          clientId="1024721882562-fipoaqkrmo65b1ombddeegq49lhcies9.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={this.responseGoogle}
          onFailure={this.responseGoogle}
          cookiePolicy={'single_host_origin'}
        />
      </div>
    )
  }
}

export default App;
