import React from 'react';
import { render } from 'react-dom';
import '../../css/Assets.scss'
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';
import 'react-web-tabs/dist/react-web-tabs.css';
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Assets extends React.Component{
    
    /*constructor(props) {
        super(props);
        this.state = {
            portfolios : [],
          username : reactLocalStorage.get("username"),
          password : reactLocalStorage.get("password"),
          expertID : '',
          clients : [],
        };
      }
      componentDidMount() {
        
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
          .then((data) => {
            this.setState({clients : data})
          })
          .catch(console.log)
          })
        .catch(console.log)
      }*/
      render(){
        return(
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
                <table className="table table-hover">
                  <tbody><tr>
                      <th>ID</th>
                      <th>User</th>
                      <th>Date</th>
                      <th>Status</th>
                      <th>Reason</th>
                    </tr>
                    <tr>
                      <td>183</td>
                      <td>John Doe</td>
                      <td>11-7-2014</td>
                      <td><span className="label label-success">Approved</span></td>
                      <td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>
                    </tr>
                    <tr>
                      <td>219</td>
                      <td>Alexander Pierce</td>
                      <td>11-7-2014</td>
                      <td><span className="label label-warning">Pending</span></td>
                      <td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>
                    </tr>
                    <tr>
                      <td>657</td>
                      <td>Bob Doe</td>
                      <td>11-7-2014</td>
                      <td><span className="label label-primary">Approved</span></td>
                      <td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>
                    </tr>
                    <tr>
                      <td>175</td>
                      <td>Mike Doe</td>
                      <td>11-7-2014</td>
                      <td><span className="label label-danger">Denied</span></td>
                      <td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>
                    </tr>
                  </tbody></table>
              </div>
              {/* /.box-body */}
            </div>
            {/* /.box */}
          </div>
        </div>
          
        );
    }
}
export default Assets;    

/**
 * <div className="box-body">
                    <Tabs className="tabs"  selected={"0"}
            onChange={(tabId) => { console.log(tabId) }}>
                        <TabList >
                        <Tab tabFor="tab1">One</Tab>
                        <Tab tabFor="tab2">Two</Tab>
                        <Tab tabFor="tab3">Three</Tab>
                        <Tab tabFor="tab4">Four</Tab>    
                        </TabList>
                    
                        <TabPanel tabId="tab1">TabPanel1</TabPanel>
                        <TabPanel tabId="tab2">TabPanel2</TabPanel>
                        <TabPanel tabId="tab3">TabPanel3</TabPanel>
                        <TabPanel tabId="tab4">TabPanel4</TabPanel>

                    </Tabs>
            </div>
 */