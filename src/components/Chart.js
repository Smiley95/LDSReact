import React from 'react';
import {reactLocalStorage} from 'reactjs-localstorage';
import Example from './example';
import '../css/Chart.scss'

class Chart extends React.Component{
  _isMounted;    
  constructor(props) {      
    super(props);
        this.state = {
            portfolios : [],
            Assetbenefits:[],
          username : reactLocalStorage.get('username') ,
          password : reactLocalStorage.get("password"),
          expertID : '',
          clients : [],
        };
        this._isMounted = false;
        //console.log(reactLocalStorage.get("username") + " password "+ reactLocalStorage.get("password"));
      }
      componentDidMount() {
        //console.log("mount" + Date.now());
        this._isMounted = true;
        const requestOptions1 = {
          method: 'POST',
          headers : {
            Authorization : "Bearer " + reactLocalStorage.get("token"),
            'Content-Type': 'application/json'
          },
          body:  "\""+reactLocalStorage.get("password")+"\""
        }
        
        fetch('https://localhost:44334/api/Users/GetUserByName?username='+this.state.username,requestOptions1)
        .then(res => res.json())
        .then((data) => {if(this._isMounted){
          //console.log("mount" + Date.now());
          this.setState({expertID : data})
          const requestOptions2 = {
            method: 'POST',
            headers : {
              Authorization : "Bearer " + reactLocalStorage.get("token"),
              'Content-Type': 'application/json'
            },
            body : "\""+this.state.expertID+"\""      
          }
          fetch('https://localhost:44334/api/Investors/GetInvestorsByExpert',requestOptions2)
          .then(res => res.json())
          .then((data) => {if(this._isMounted){
            this.setState({clients : data})
          }
          this.state.clients.map((item, key)=> {
            this.state.clients[key].Portfolio.map((item1,key1)=>{
              const requestOptions = {
                method: 'GET',
                headers : {
                  Authorization : "Bearer " + reactLocalStorage.get("token"),
                  'Content-Type': 'application/json'
                },
              }
              fetch('https://localhost:44334/api/Portfolios/GetPortfolioReturn?id='+item1.Portfolio_ID,requestOptions)
              .then(res => res.json())
              .then((data) => {if(this._isMounted){
                this.setState({Assetbenefits : this.state.Assetbenefits.concat("{\"return\":"+data.toFixed(3)+", \"portfolioName\" :\" "+item1.Portfolio_ID+"\"}")});}
              })
              .catch(console.log);
            });
            
          });
          })
          .catch(console.log)
        }
          })
        .catch(console.log)
      }
      componentWillUnmount(){
        this._isMounted = false;
        //console.log("unmount" + Date.now());
      }
    render(){
      return(
        <div className="wrapper">            
          <div className="content-wrapper">
            <section className="content-header">
              <h1>
                      Charts
                      <small>Returnd</small>
                    </h1>
            </section>
            <section className="content">
              <div className="box">
                <div className="box-header">
                  <h3 className="box-title">all assets returns</h3>
                </div>
              {/* /.box-header */}
                <div className="box-body">
                  <Example/>
                </div>
              </div>
            </section> 
            
          </div>
        </div>
      );
    }
}
export default Chart;