import React from "react";
import '../../css/Generals.scss'
class Generals extends React.Component{
    
    render(){
        return(
            <div className="content-wrapper">
                <section className="content-header">
                <h1>
                  LVTS
                  <small>Dashboard</small>
                </h1>
                <ol className="breadcrumb">
                  <li><a href="#"><i className="fa fa-dashboard" /> Home</a></li>
                  <li className="active">Dashboard</li>
                </ol>
              </section>
                <div className="wrapper row GeneralInfo">
                    <div className="col-md-3 col-sm-6 col-xs-12">
                    <div className="info-box">
                        <span className="info-box-icon bg-aqua"><i className="ion ion-ios-gear-outline" /></span>
                        <div className="info-box-content">
                        <span className="info-box-text">CPU Traffic</span>
                        <span className="info-box-number">90<small>%</small></span>
                        </div>
                        {/* /.info-box-content */}
                    </div>
                    {/* /.info-box */}
                    </div>
                    {/* /.col */}
                    <div className="col-md-3 col-sm-6 col-xs-12">
                    <div className="info-box">
                        <span className="info-box-icon bg-red"><i className="fa fa-google-plus" /></span>
                        <div className="info-box-content">
                        <span className="info-box-text">Likes</span>
                        <span className="info-box-number">41,410</span>
                        </div>
                        {/* /.info-box-content */}
                    </div>
                    {/* /.info-box */}
                    </div>
                    {/* /.col */}
                    {/* fix for small devices only */}
                    <div className="clearfix visible-sm-block" />
                    <div className="col-md-3 col-sm-6 col-xs-12">
                    <div className="info-box">
                        <span className="info-box-icon bg-green"><i className="ion ion-ios-cart-outline" /></span>
                        <div className="info-box-content">
                        <span className="info-box-text">Sales</span>
                        <span className="info-box-number">760</span>
                        </div>
                        {/* /.info-box-content */}
                    </div>
                    {/* /.info-box */}
                    </div>
                    {/* /.col */}
                    <div className="col-md-3 col-sm-6 col-xs-12">
                    <div className="info-box">
                        <span className="info-box-icon bg-yellow"><i className="ion ion-ios-people-outline" /></span>
                        <div className="info-box-content">
                        <span className="info-box-text">Investors</span>
                        <span className="info-box-number">2,000</span>
                        </div>
                        {/* /.info-box-content */}
                    </div>
                    {/* /.info-box */}
                    </div>
                    {/* /.col */}
                </div>
            </div>            
        );
    }
}
export default Generals;