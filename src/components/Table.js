import React from 'react';
import { render } from 'react-dom';
import Clients  from './Clients/Clients';
import Portfolios  from './Portfolios/Portfolios';
import  Assets from '../components/Assets/Assets'
import '../css/Table.scss'
import 'react-web-tabs/dist/react-web-tabs.css';
class Table extends React.Component{
      render(){
        return(
            <div className="wrapper">            
            {/* Left side column. contains the logo and sidebar */}
            {/* Content Wrapper. Contains page content */}
            <div className="content-wrapper">
             
              {/* Content Header (Page header) */}
              
              <section className="content-header">
                <h1>
                  Data Tables
                  <small>investors and portfolios</small>
                </h1>
                <ol className="breadcrumb">
                  <li><a href="#"><i className="fa fa-dashboard" /> Home</a></li>
                  <li><a href="#">Tables</a></li>
                  <li className="active">Data tables</li>
                </ol>
              </section>
              {/* Main content */}
              <section className="content">
                <div className="row">
                  <div className="col-xs-12">
                    
                  <Clients/>
                      {/* /.box-body */}
                    
                    {/* /.box-body */}
                    <div className="box">
                      <div className="box-header">
                        <h3 className="box-title">List of all portfolios</h3>
                      </div>
                      {/* /.box-header */}
                      <Portfolios/>
                    </div>
                    <div className="box">
                      <div className="box-header">
                        <h3 className="box-title">List of assets (to be continued...)</h3>
                      </div>
                      {/* /.box-header */}
                      <Assets/>
                    </div>
                    {/* /.box-body */}
                    {/* /.box */}
                    </div>
                  {/* /.col */}
                </div>
                {/* /.row */}
              </section>
              {/* /.content */}
            </div>
            {/* /.content-wrapper */}
          </div>
        );
    }
}
export default Table;