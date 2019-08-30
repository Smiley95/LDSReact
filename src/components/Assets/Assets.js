import React from 'react';
import { render } from 'react-dom';
import '../../css/Assets.scss'
import {reactLocalStorage} from 'reactjs-localstorage';
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';
import 'react-web-tabs/dist/react-web-tabs.css';
import { faLayerGroup, faInfo, faWallet  } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from '..//Footer';
import Menu from '..//Menu';
import Header from '..//Header';
import { MDBTable } from "mdbreact";
import html2canvas from 'html2canvas';
import {  jsPDF} from "jspdf";

class Assets extends React.Component{
  today;day;  _isMounted;
  creation; Net=0;
  constructor(props) {
        super(props);
        //this.getreturn = this.getreturn.bind(this);
          this.today = new Date();
          this.date = this.today.getFullYear()+'-'+(this.today.getMonth()+1)+'-'+this.today.getDate();
        this.state = {
            assets : [],
            returns: [],
            RiskStandDev : [],
            betarisks: [],
            costs : [],
            values : [],
            portfolio: [],
            portreturn: 0,
            portvariancerisk: 0,
            portMarketrisk: 0
        };
      }
      printDocument() {
        /*const input = document.getElementById('divToPrint');
        html2canvas(input)
          .then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF();
            pdf.addImage(imgData, 'JPEG', 0, 0);
            // pdf.output('dataurlnewwindow');
            pdf.save("download.pdf");
          })
        ;*/
        alert("still in progress");
      }
      componentDidMount() {
        this._isMounted = true;  
          
          const requestOptions1 = {
            method: 'GET',
            headers : {
              Authorization : "Bearer " + reactLocalStorage.get("token"),
              'Content-Type': 'application/json'
            },
          }
          const requestOptions2 = {
            method: 'POST',
            headers : {
              Authorization : "Bearer " + reactLocalStorage.get("token"),
              'Content-Type': 'application/json'
            },
            body : this.props.location.state.portID      
          }
              fetch('https://localhost:44334/api/Portfolios/GetPortfolioReturn?id='+this.props.location.state.portID,requestOptions1)
              .then(res => res.json())
              .then((data) => {if(this._isMounted){
                this.setState({portreturn : data.toFixed(3)});}
              })
              .catch(console.log);
              fetch('https://localhost:44334/api/Portfolios/GetPortfolioVarianceRisk?id='+this.props.location.state.portID,requestOptions1)
              .then(res => res.json())
              .then((data) => {if(this._isMounted){
                this.setState({portvariancerisk : data.toFixed(3)});}
              })
              .catch(console.log);
              fetch('https://localhost:44334/api/Portfolios/GetPortfolioMarketRisk?id='+this.props.location.state.portID,requestOptions1)
              .then(res => res.json())
              .then((data) => {if(this._isMounted){
                this.setState({portMarketrisk : data.toFixed(3)});}
              })
              .catch(console.log);
          fetch('https://localhost:44334/api/Portfolios/GetPortfolio?id='+this.props.location.state.portID,requestOptions1)
              .then(res => res.json())
              .then((data) => {if(this._isMounted){
                this.setState({portfolio : data });
                this.creation= new Date(this.state.portfolio.Portfolio_creationDate);
                this.creation= this.creation.getFullYear()+'-'+(this.creation.getMonth()+1)+'-'+this.creation.getDate();
              }
              })
              .catch(console.log);
          fetch('https://localhost:44334/api/Assets/GetAssetsByPortfolio',requestOptions2)
          .then(res => res.json())
          .then((data) => {if(this._isMounted){
            this.setState({assets : data})
            this.Net=0;
            this.state.assets.map((item, key)=> {
              item.Asset_AQS_date=item.Asset_AQS_date.slice(0,item.Asset_AQS_date.indexOf('T'));
              this.Net = this.Net + (item.Asset_currentValue - item.Asset_shareCost);
              const requestOptions = {
                method: 'GET',
                headers : {
                  'Content-Type': 'application/json',
                }
              }
              fetch('https://localhost:44322/api/Returns/GetROAReturns?companySymbol='+item.Company_symbol,requestOptions)
              .then(res => res.json())
              .then((data) => {
                this.setState({returns : this.state.returns.concat(data.toFixed(3))});
              })
              .catch(console.log);
              fetch('https://localhost:44330/api/Risks/GetRiskBeta?companySymbol='+item.Company_symbol,requestOptions)
              .then(res => res.json())
              .then((data) => {
                this.setState({betarisks : this.state.betarisks.concat(data.toFixed(3))});
              })
              .catch(console.log);
              fetch('https://localhost:44330/api/Risks/GetMinRiskStandDev?companySymbol='+item.Company_symbol,requestOptions)
              .then(res => res.json())
              .then((data) => {
                this.setState({RiskStandDev : this.state.RiskStandDev.concat(data.toFixed(3))});
              })
              .catch(console.log);
            });
            
          }})
          .catch(console.log);
          
      }
      componentWillUnmount(){
        this._isMounted = false;
        
        //console.log("unmount" + Date.now());
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
            <section className="content-header">
          <h1>
            <small></small>
          </h1>
          <ol className="breadcrumb">
            <li><a href="#"><i className="fa fa-dashboard" /> Home</a></li>
            <li><a href="#">Portfolios</a></li>
            <li className="active">{this.state.portfolio.Portfolio_title}</li>
          </ol>
        </section>
        {/* Main content */}
        <section className="invoice mt4">
          {/* title row */}
          <div id="divToPrint" className="mt4">
          <div className="row">
            <div className="col-xs-12">
              <h2 className="page-header">
                <i className="fa fa-globe" /> {this.state.portfolio.Portfolio_title}
                <small className="pull-right">Date: {this.date}</small>
              </h2>
            </div>
            {/* /.col */}
          </div>
          {/* info row */}
          <div className="row invoice-info">
            <div className="col-sm-4 invoice-col">
            <div className="small-box bg-aqua">
            <div className="inner">
              <h3>{this.state.assets.length}</h3>
              <p>Total Assets</p>
            </div>
            <div className="icon">
            <FontAwesomeIcon icon={faLayerGroup}  />
            </div>
            
          </div>
            </div>
            {/* /.col */}
            <div className="col-sm-4 invoice-col">
            <div className="small-box bg-green">
            <div className="inner">
              <h3><sup style={{fontSize: '20px'}}>{this.Net}$</sup></h3>
              <p>Shares Net</p>
            </div>
            <div className="icon">
            <FontAwesomeIcon icon={faWallet}  />
            </div>
            
          </div>
            </div>
            
            {/* /.col */}
            <div className="col-sm-4 invoice-col">
            <div className="small-box bg-yellow">
            <div className="inner">
            <b>Portfolio General Info </b>
              <br />
              <b>PID:</b> {this.state.portfolio.Portfolio_ID}<br />
              <b>Title:</b> {this.state.portfolio.Portfolio_title}<br />
              <b>Created on:</b> {this.creation}
            </div>
            <div className="icon">
            <FontAwesomeIcon icon={faInfo}  />
              
            </div>
          </div>
              
            </div>
            {/* /.col */}
          </div>
          {/* /.row */}
          {/* Table row */}
          <div className="row">
            <div className="col-xs-12 table-responsive">
              <MDBTable className="table table-striped" scrollX>
                <thead>
                  <tr>
                      <th>Ticker symbol</th>
                      <th>Name</th>
                      <th>Shares</th>
                      <th>Investment date</th>
                      <th>Share cost</th>
                      <th>Share value</th>
                      <th>Return</th>
                      <th>Beta risk</th>
                      <th>standars deviation</th>
                  </tr>
                </thead>
                <tbody>
                { this.state.assets.map((item, key)=> {
                        
                      
                        return (
                          <tr key={key}>
                            <td>{item.Company_symbol}</td>  
                            <td>{item.Asset_name}</td>  
                            <td>{item.Asset_nbShare}</td>  
                            <td>{item.Asset_AQS_date}</td>
                            <td>{item.Asset_shareCost}</td>
                            <td>{item.Asset_currentValue}</td>
                            <td><center><span className="label label-success">{"+"+this.state.returns[key]+"%"}</span></center></td>
                            <td><span className="label label-danger">{"-"+this.state.betarisks[key]+"%"}</span></td>
                            <td><center><span className="label label-danger">{"-"+this.state.RiskStandDev[key]+"%"}</span></center></td>
                            
                          </tr>
                            
                        );
                      })}
                </tbody>
              </MDBTable>
            </div>
            {/* /.col */}
          </div>
          {/* /.row */}
          <div className="row">
            {/* accepted payments column */}
            <div className="col-xs-6">
              
            </div>
            {/* /.col */}
            <div className="col-xs-6">
              <p className="lead">report on  {this.date}</p>
              <div className="table-responsive">
                <table className="table">
                  <tbody><tr>
                      <th style={{width: '50%'}}>total return:</th>
                      <td><span className="label label-success">{"+"+this.state.portreturn}</span></td>
                    </tr>
                    <tr>
                      <th>Market Risk</th>
                      <td><span className="label label-danger">{"-"+this.state.portMarketrisk}</span></td>
                    </tr>
                    <tr>
                      <th>Variance Risk:</th>
                      <td><span className="label label-danger">{"-"+this.state.portvariancerisk}</span></td>
                    </tr>
                  </tbody></table>
              </div>
            </div>
            {/* /.col */}
          </div>
          </div>
          {/* /.row */}
          {/* this row will not appear when printing */}
          <div className="row no-print">
            <div className="col-xs-12">
            <button type="button"  className="btn btn-primary pull-right" onClick={this.printDocument} style={{marginRight: '5px'}}>
                <i className="fa fa-download" /> Generate PDF
              </button>
            </div>
          </div>
        </section>
        {/* /.content */}
        <div className="clearfix" />
            </div>
            </div>
        <Footer/>
            </>           
        );
    }
}
export default Assets;    
