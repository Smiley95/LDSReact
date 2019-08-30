import React from 'react';
import { render } from 'react-dom';
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';
import { faIdBadge } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from '..//Footer';
import Menu from '..//Menu';
import '../../css/Client.scss'
import Header from '..//Header';
import Modal from 'react-awesome-modal';


//import '../css/Table.scss'
import 'react-web-tabs/dist/react-web-tabs.css';
import { reactLocalStorage} from 'reactjs-localstorage';
class Clients extends React.Component{
  _isMounted;    
  constructor(props) {
      super(props);
      this.checkDetails = this.checkDetails.bind(this);
      this.openModal = this.openModal.bind(this);
      this.closeModal = this.closeModal.bind(this);
      this._isMounted = false;    
        this.state = {
          expertID : '',
          clients : [],
          visible : false,
          client:"",          
        };
        
      }
      openModal(event) {
        console.log(event.currentTarget.dataset.div_id);
        this.setState({
          visible : true,
          client : event.currentTarget.dataset.div_id,          
        });
    }

    closeModal() {
        this.setState({
            visible : false
        });
    }
      componentDidMount() {
        this._isMounted = true;
        const requestOptions1 = {
          method: 'POST',
          headers : {
            Authorization : "Bearer " + reactLocalStorage.get("token"),
            'Content-Type': 'application/json'
          },
          body:  "\""+reactLocalStorage.get("password")+"\""
        }
        fetch('https://localhost:44334/api/Users/GetUserByName?username='+reactLocalStorage.get("username"),requestOptions1)
        .then(res => res.json())
        .then((data) => {
          if (this._isMounted){
           
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
          .then((data) => {if (this._isMounted){
            this.setState({clients : data});
            console.log(this.state.clients);
          }})
          .catch(console.log)
          } 
          })
        .catch(console.log)
      
      }
      checkDetails(event){
        console.log("this "+ event.currentTarget.dataset.div_id);
        let path='/Profile';
        this.props.history.push({
          pathname:
           path,
          state: { investorID: event.currentTarget.dataset.div_id}
        });
      }
      componentWillUnmount(){
        this._isMounted = false;
        
      }
    render(){
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
                  Tables
                  <small>investors</small>
                </h1>
                <ol className="breadcrumb">
                  <li><a href="#"><i className="fa fa-dashboard" /> Home</a></li>
                  <li><a href="#">Tables</a></li>
                  <li className="active">Investors</li>
                </ol>
              </section> 
        <div className="box">
        <div className="box-header">
          <h3 className="box-title">List of investors</h3>
        </div>
        {/* /.box-header */}
        <div className="box-body">
          <table id="example2" className="table table-bordered table-hover">
            <thead>
              <tr>
                <th>Full Name</th>
                <th>email</th>
                <th>time Horizon</th>
                <th>Birth</th>
                <th>Profile</th>
              </tr>
            </thead>
            <tbody>
            {this.state.clients.map((item, key)=> {
                      item.Investor_timeHorizon=item.Investor_timeHorizon.slice(0,item.Investor_timeHorizon.indexOf('T'));
                      item.Investor_birth=item.Investor_birth.slice(0,item.Investor_birth.indexOf('T'));
                      return (
                          <tr key = {key}>
                              <td>{item.Investor_FullName}</td>
                              <td>{item.Investor_email}</td>
                              <td>{item.Investor_timeHorizon}</td>
                              <td>{item.Investor_birth}</td>
                              <td><a onClick={this.openModal} data-div_id={key}><FontAwesomeIcon icon={faIdBadge} color="rgb(221, 0, 48)" size="lg"/></a></td>
                          </tr>
                        )
                    })}
            </tbody>
            <tfoot>
              <tr>
              <th>Full Name</th>
                <th>email</th>
                <th>time Horizon</th>
                <th>Birth</th>
                <th>Profile</th>
              </tr>
            </tfoot>
          </table>
        </div>
        </div>
            </div> 
            </div>
            {/**modal */}
            <Modal visible={this.state.visible} width="600" height="500" effect="fadeInUp" onClickAway={() => this.closeModal()}>
            <div className="container">
        <div className="row">
          <div className="col-md-offset-1 col-md-12 col-lg-offset-1 col-lg-11">
            <div className="well profile">
             
                
                  {this.state.client &&
                    <>
                     <div className="col-sm-12">
                    <div className="col-xs-12 col-sm-8">
                    <h2>{ (this.state.clients[this.state.client]).Investor_FullName}</h2>
                  <p><strong>ID: </strong> { (this.state.clients[this.state.client]).Investor_ID}</p>
                  <p><strong>Birthday: </strong>{ (this.state.clients[this.state.client]).Investor_birth}</p>
                  <p><strong>Email: </strong>{ (this.state.clients[this.state.client]).Investor_email}</p>
                  <p><strong>Time Horizon: </strong>{ (this.state.clients[this.state.client]).Investor_timeHorizon}</p>
                  </div>
                  <div className="col-xs-12 col-sm-4 text-center">
                  <figure>
                    <img src="" alt="" className="img-circle img-responsive" />
                    <figcaption className="ratings">
                      <p> Investment health
                        <a href="#">
                          <span className="fa fa-star" />
                        </a>
                        <a href="#">
                          <span className="fa fa-star" />
                        </a>
                        <a href="#">
                          <span className="fa fa-star" />
                        </a>
                        <a href="#">
                          <span className="fa fa-star" />
                        </a>
                        <a href="#">
                          <span className="fa fa-star-o" />
                        </a> 
                      </p>
                    </figcaption>
                  </figure>
                </div>
                </div>            
                <div className="col-xs-6 divider text-center">
                <div className="col-xs-12 col-sm-12 emphasis">
                  <h2><strong> { (this.state.clients[this.state.client]).Portfolio.length} </strong></h2>                    
                  <p><span class="tags">Portfolios</span></p>                  
                </div>
                </div>
                  
                  <div className="col-xs-12 col-sm-12  Moduleclose">
                    <a className="hello" onClick={() => this.closeModal()}><span className="fa fa-times" /> Close </a>
                  </div>
                
                  </>
                  }
           
               
              
            </div>                 
          </div>
        </div>
      </div>
                </Modal>
            {/**modal */}
        <Footer/>
            </>
        );
    }
}
export default Clients;
