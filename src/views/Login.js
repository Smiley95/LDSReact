import React from 'react';
import '../css/Login.scss'
class Login extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          Username: "",
          Password: "",
          token: ""
        };
      }
      render(){
        return(
            <div className="container" onClick="onclick">
                <div className="top"></div>
                <div className="bottom"></div>
                <div className="center">
                <div class="image"></div>​
                    <input type="email" placeholder="email" /><input type="password" placeholder="password" />
                    <h2>&nbsp;</h2>
                    <div class="wrap">
                    <a href="#" class="button">Hover Me!</a>
                    </div>
                </div>

            </div>
        );
    }
}
export default Login;