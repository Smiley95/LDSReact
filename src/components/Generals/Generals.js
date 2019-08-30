import React from "react";
import '../../css/Generals.scss'
import { faTrophy, faExclamationTriangle, faLandmark, faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
                        <span className="info-box-icon bg-aqua"><FontAwesomeIcon icon={faLandmark}  size="lg"/></span>
                        <div className="info-box-content">
                        <span className="info-box-text">Providers</span>
                        <span className="info-box-number">3<small></small></span>
                        </div>
                        {/* /.info-box-content */}
                    </div>
                    {/* /.info-box */}
                    </div>
                    {/* /.col */}
                    <div className="col-md-3 col-sm-6 col-xs-12">
                    <div className="info-box">
                        <span className="info-box-icon bg-red"><FontAwesomeIcon icon={faExclamationTriangle}  size="lg"/></span>
                        <div className="info-box-content">
                        <span className="info-box-text">Highest loser</span>
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
                        <span className="info-box-icon bg-green"><FontAwesomeIcon icon={faTrophy}  size="lg"/></span>
                        <div className="info-box-content">
                        <span className="info-box-text">Highest Gainer</span>
                        <span className="info-box-number">760</span>
                        </div>
                        {/* /.info-box-content */}
                    </div>
                    {/* /.info-box */}
                    </div>
                    {/* /.col */}
                    <div className="col-md-3 col-sm-6 col-xs-12">
                    <div className="info-box">
                        <span className="info-box-icon bg-yellow"><FontAwesomeIcon icon={faUsers}  size="lg"/></span>
                        <div className="info-box-content">
                        <span className="info-box-text">Investors</span>
                        <span className="info-box-number">20</span>
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