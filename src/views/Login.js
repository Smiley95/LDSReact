import React from 'react';
import { Redirect, Route, BrowserRouter as Router } from 'react-router-dom';
import {reactLocalStorage} from 'reactjs-localstorage';
import Dashboard from './Dashboard';
import '../css/Login.scss'
class Login extends React.Component {
    constructor(props){
      //reactLocalStorage.clear();  
      super(props);
        this.state={
          username:'',
          password:'',
          submitted: false,
          token: ''
      }
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange= (event)=> {
      const {name, value }= event.target;
      //console.log([name] + " "+ value);
      this.setState({[name]: value,        
      });
    }
    
    handleSubmit(e) {
      e.preventDefault(); 
      this.setState({ submitted: true });
      const { username, password } = this.state;
      if (!(username && password)) {
        return;
      }
      var details = { username: username, password: password, grant_type: 'password' }
      var formBody = [];
      for (var property in details) {
        var encodedKey = encodeURIComponent(property);
        var encodedValue = encodeURIComponent(details[property]);
        formBody.push(encodedKey + "=" + encodedValue);
      }
      formBody = formBody.join("&");
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: formBody
      };
      fetch('https://localhost:44334/token',requestOptions)
      .then(res => res.json())
      .then((data) => {
        if(data['error']){
          console.log(data['error_description'])
          this.setState({ username: '', password: '' })
        }
        else{
          this.setState({ token: data['access_token'] })
          reactLocalStorage.set('username',this.state.username);
          reactLocalStorage.set('password',this.state.password);
          reactLocalStorage.set('token',this.state.token);
          //console.log(this.state.token);
        }
      })
      .catch(console.log)
      
  }
  componentWillUnmount(){
    console.clear();
  }
    render() {
      if(this.state.token){
        return (
        
          <Router>
          <Redirect to='/dashboard'/>
          <Route exact path="/dashboard" render={(props) => <Dashboard  />}/>
        </Router>
        );
      }
      else{
        return (
            <div className="container">
                    <div className="top"></div>
                    <div className="bottom"></div>
                    <div className="center">
                    <div className="image"></div>​
                        <form>

                        </form>
                        <input type="email" name ="username" placeholder="email" onChange={this.handleChange} />
                        <input type="password" name ="password" placeholder="password" onChange={this.handleChange} />
                        <h2>&nbsp;</h2>
                        <div className="wrap">
                            {(!this.state.username || !this.state.password) && 
                                <button  type="button" className="buttonDis" disabled onClick={this.handleSubmit}>Login</button>
                            }
                            {this.state.username && this.state.password && 
                                <button  type="button" className="button" onClick={this.handleSubmit}>Login</button>
                            }
                        </div>
                    </div>
                </div>
        );
      }        
    }
}
export default Login;

/*

*/ 