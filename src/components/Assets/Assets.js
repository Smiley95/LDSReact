import React from 'react';
import { render } from 'react-dom';
import '../../css/Assets.scss'
import {reactLocalStorage} from 'reactjs-localstorage';
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';
import 'react-web-tabs/dist/react-web-tabs.css';
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from '..//Footer';
import Menu from '..//Menu';
import Header from '..//Header';
import { MDBTable } from "mdbreact";

class Assets extends React.Component{
    
    constructor(props) {
        super(props);
        //this.getreturn = this.getreturn.bind(this);
        this.state = {
            assets : [],
            returns: [],
            RiskStandDev : [],
            betarisks: [],
            costs : [],
            values : []
        };
      }
      componentDidMount() {
          this.setState({mounted : true});
          const requestOptions2 = {
            method: 'POST',
            headers : {
              Authorization : "Bearer " + reactLocalStorage.get("token"),
              'Content-Type': 'application/json'
            },
            body : this.props.location.state.portID      
          }
          fetch('https://localhost:44334/api/Assets/GetAssetsByPortfolio',requestOptions2)
          .then(res => res.json())
          .then((data) => {
            this.setState({assets : data})
            console.log(this.state.assets);
            this.state.assets.map((item, key)=> {
              const requestOptions = {
                method: 'GET',
                //mode: 'no-cors',
                headers : {
                  'Content-Type': 'application/json',
                }
              }
              fetch('https://localhost:44322/api/Returns/GetROAReturns?companySymbol='+item.Company_symbol,requestOptions)
              .then(res => res.json())
              .then((data) => {
                this.setState({returns : this.state.returns.concat(data)});
                console.log("retrun"+this.state.returns);
              })
              .catch(console.log);
              fetch('https://localhost:44330/api/Risks/GetRiskBeta?companySymbol='+item.Company_symbol,requestOptions)
              .then(res => res.json())
              .then((data) => {
                this.setState({betarisks : this.state.betarisks.concat(data)});
                console.log("beta risk"+this.state.betarisks);
              })
              .catch(console.log);
              fetch('https://localhost:44330/api/Risks/GetMinRiskStandDev?companySymbol='+item.Company_symbol,requestOptions)
              .then(res => res.json())
              .then((data) => {
                this.setState({RiskStandDev : this.state.RiskStandDev.concat(data)});
                console.log("standdev risk"+this.state.RiskStandDev);
              })
              .catch(console.log);
            });
            
          })
          .catch(console.log);
          console.log("am here ");
          
      }
      getrisk(){
        
      }
      render(){
        //console.log(this.props.location.state.portID);
        return(
          <>
          <Header/>
          <Menu/>
          <div className="wrapper">            
            {/* Left side column. contains the logo and sidebar */}
            {/* Content Wrapper. Contains page content */}
            <div className="content-wrapper">
          <div className="box">
                      <div className="box-header">
                        <h3 className="box-title">List of assets (to be continued...)</h3>
                      </div>
                    
            <div className="box-body">  
          <div className="row">
          <div className="col-xs-12">
            <div className="box">
              <div className="box-header">
                <div className="box-tools">
                  <div className="input-group input-group-sm hidden-xs" style={{width: '150px'}}>
                    <input type="text" name="table_search" className="form-control pull-right" placeholder="Search" />
                    <div className="input-group-btn">
                      <button type="submit" className="btn btn-default searchbtn"><FontAwesomeIcon icon={faSearch} color="rgb(221, 0, 48)" size="lg"/></button>
                    </div>
                  </div>
                </div>
              </div>
              {/* /.box-header */}
              <div className="box-body table-responsive no-padding">
                <MDBTable className="table table-hover" scrollY>
                  <tbody><tr>
                      <th>Ticker symbol</th>
                      <th>Name</th>
                      <th>Shares</th>
                      <th>Investment date</th>
                      <th>Share cost</th>
                      <th>Share value</th>
                      <th>Return</th>
                      <th>Beta risk</th>
                      <th>Risk (standars deviation)</th>
                      {/*<th>Return</th>*/}
                    </tr>
                    { this.state.assets.map((item, key)=> {
                      return (
                        <tr>
                          <td>{item.Company_symbol}</td>  
                          <td>{item.Asset_name}</td>  
                          <td>{item.Asset_nbShare}</td>  
                          <td>{item.Asset_AQS_date}</td>
                          <td>{"blabla"}</td>
                          <td>{"blabla"}</td>
                          <td><span className="label label-success">{"+"+this.state.returns[key]+"%"}</span></td>
                          <td><span className="label label-danger">{"-"+this.state.betarisks[key]+"%"}</span></td>
                          <td><span className="label label-danger">{"-"+this.state.RiskStandDev[key]+"%"}</span></td>
                          
                        </tr>
                          
                      );
                    })}
                  </tbody></MDBTable>
              </div>
              {/* /.box-body */}
            </div>
            {/* /.box */}
          </div>
        </div>
        
        </div> 
            </div>
            </div> 
            </div>
            <Footer/>
          </>
          
        );
    }
}
export default Assets;    