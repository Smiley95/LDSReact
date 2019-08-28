import React from 'react';
class Footer extends React.Component{
      render(){
        return(
            <div><footer className="main-footer">
            <div className="pull-right hidden-xs">
              <b>Version</b> 0.0.0
            </div>
            <strong>Copyright ©2019 <a href="https://www.linedata.com">LVTSDashboard</a>.</strong> All rights
            reserved.
          </footer></div>
        );
    }
}
export default Footer;