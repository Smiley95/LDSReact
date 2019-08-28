import React from 'react';
import Example from './example';
import '../css/Chart.scss'

class Chart extends React.Component{
    
    render(){
      return(
        <div className="wrapper">            
          <div className="content-wrapper">
            <section className="content-header">
              <h1>
                      Charts
                      <small>blablabla</small>
                    </h1>
            </section>
            <section className="content">
              <div className="box">
                <div className="box-header">
                  <h3 className="box-title">sectors blabla</h3>
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