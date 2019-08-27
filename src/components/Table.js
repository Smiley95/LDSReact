import React from 'react';
import { render } from 'react-dom';
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';
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
                  <small>advanced tables</small>
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
                    <div className="box">
                      <div className="box-header">
                        <h3 className="box-title">Hover Data Table</h3>
                      </div>
                      {/* /.box-header */}
                      <div className="box-body">
                        <table id="example2" className="table table-bordered table-hover">
                          <thead>
                            <tr>
                              <th>Rendering engine</th>
                              <th>Browser</th>
                              <th>Platform(s)</th>
                              <th>Engine version</th>
                              <th>CSS grade</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Trident</td>
                              <td>Internet
                                Explorer 4.0
                              </td>
                              <td>Win 95+</td>
                              <td> 4</td>
                              <td>X</td>
                            </tr>
                            <tr>
                              <td>Trident</td>
                              <td>Internet
                                Explorer 5.0
                              </td>
                              <td>Win 95+</td>
                              <td>5</td>
                              <td>C</td>
                            </tr>
                            <tr>
                              <td>Trident</td>
                              <td>Internet
                                Explorer 5.5
                              </td>
                              <td>Win 95+</td>
                              <td>5.5</td>
                              <td>A</td>
                            </tr>
                            <tr>
                              <td>Trident</td>
                              <td>Internet
                                Explorer 6
                              </td>
                              <td>Win 98+</td>
                              <td>6</td>
                              <td>A</td>
                            </tr>
                            <tr>
                              <td>Trident</td>
                              <td>Internet Explorer 7</td>
                              <td>Win XP SP2+</td>
                              <td>7</td>
                              <td>A</td>
                            </tr>
                            <tr>
                              <td>Trident</td>
                              <td>AOL browser (AOL desktop)</td>
                              <td>Win XP</td>
                              <td>6</td>
                              <td>A</td>
                            </tr>
                            <tr>
                              <td>Gecko</td>
                              <td>Firefox 1.0</td>
                              <td>Win 98+ / OSX.2+</td>
                              <td>1.7</td>
                              <td>A</td>
                            </tr>
                            <tr>
                              <td>Gecko</td>
                              <td>Firefox 1.5</td>
                              <td>Win 98+ / OSX.2+</td>
                              <td>1.8</td>
                              <td>A</td>
                            </tr>
                            <tr>
                              <td>Gecko</td>
                              <td>Firefox 2.0</td>
                              <td>Win 98+ / OSX.2+</td>
                              <td>1.8</td>
                              <td>A</td>
                            </tr>
                            <tr>
                              <td>Gecko</td>
                              <td>Firefox 3.0</td>
                              <td>Win 2k+ / OSX.3+</td>
                              <td>1.9</td>
                              <td>A</td>
                            </tr>
                            <tr>
                              <td>Gecko</td>
                              <td>Camino 1.0</td>
                              <td>OSX.2+</td>
                              <td>1.8</td>
                              <td>A</td>
                            </tr>
                            
                            <tr>
                              <td>Presto</td>
                              <td>Opera for Wii</td>
                              <td>Wii</td>
                              <td>-</td>
                              <td>A</td>
                            </tr>
                          </tbody>
                          <tfoot>
                            <tr>
                              <th>Rendering engine</th>
                              <th>Browser</th>
                              <th>Platform(s)</th>
                              <th>Engine version</th>
                              <th>CSS grade</th>
                            </tr>
                          </tfoot>
                        </table>
                      </div>
                      
                      {/* /.box-body */}
                    </div>
                    {/* /.box-body */}
                    <div className="box">
                      <div className="box-header">
                        <h3 className="box-title">Data Table With Full Features</h3>
                      </div>
                      {/* /.box-header */}
                      <div className="box-body">
                        <Tabs
                        defaultTab="one"
                        onChange={(tabId) => { console.log(tabId) }}
                      >
                        <TabList>
                          <Tab tabFor="one">Tab 1</Tab>
                          <Tab tabFor="two">Tab 2</Tab>
                          <Tab tabFor="three">Tab 3</Tab>
                        </TabList>
                        <TabPanel tabId="one">
                          <div className="box-body">
                        <table id="example2" className="table table-bordered table-hover">
                          <thead>
                            <tr>
                              <th>Rendering engine</th>
                              <th>Browser</th>
                              <th>Platform(s)</th>
                              <th>Engine version</th>
                              <th>CSS grade</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Trident</td>
                              <td>Internet
                                Explorer 4.0
                              </td>
                              <td>Win 95+</td>
                              <td> 4</td>
                              <td>X</td>
                            </tr>
                            <tr>
                              <td>Trident</td>
                              <td>Internet
                                Explorer 5.0
                              </td>
                              <td>Win 95+</td>
                              <td>5</td>
                              <td>C</td>
                            </tr>
                            <tr>
                              <td>Trident</td>
                              <td>Internet
                                Explorer 5.5
                              </td>
                              <td>Win 95+</td>
                              <td>5.5</td>
                              <td>A</td>
                            </tr>
                            <tr>
                              <td>Trident</td>
                              <td>Internet
                                Explorer 6
                              </td>
                              <td>Win 98+</td>
                              <td>6</td>
                              <td>A</td>
                            </tr>
                            <tr>
                              <td>Trident</td>
                              <td>AOL browser (AOL desktop)</td>
                              <td>Win XP</td>
                              <td>6</td>
                              <td>A</td>
                            </tr>
                            <tr>
                              <td>Gecko</td>
                              <td>Firefox 1.0</td>
                              <td>Win 98+ / OSX.2+</td>
                              <td>1.7</td>
                              <td>A</td>
                            </tr>
                            <tr>
                              <td>Gecko</td>
                              <td>Firefox 1.5</td>
                              <td>Win 98+ / OSX.2+</td>
                              <td>1.8</td>
                              <td>A</td>
                            </tr>
                          </tbody>
                          <tfoot>
                            <tr>
                              <th>Rendering engine</th>
                              <th>Browser</th>
                              <th>Platform(s)</th>
                              <th>Engine version</th>
                              <th>CSS grade</th>
                            </tr>
                          </tfoot>
                        </table>
                      </div>
        </TabPanel>
        <TabPanel tabId="two">
        <div className="box-body">
                        <table id="example2" className="table table-bordered table-hover">
                          <thead>
                            <tr>
                              <th>Rendering engine</th>
                              <th>Browser</th>
                              <th>Platform(s)</th>
                              <th>Engine version</th>
                              <th>CSS grade</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Trident</td>
                              <td>Internet
                                Explorer 4.0
                              </td>
                              <td>Win 95+</td>
                              <td> 4</td>
                              <td>X</td>
                            </tr>
                            <tr>
                              <td>Trident</td>
                              <td>Internet
                                Explorer 5.0
                              </td>
                              <td>Win 95+</td>
                              <td>5</td>
                              <td>C</td>
                            </tr>
                            <tr>
                              <td>Trident</td>
                              <td>Internet
                                Explorer 5.5
                              </td>
                              <td>Win 95+</td>
                              <td>5.5</td>
                              <td>A</td>
                            </tr>
                            <tr>
                              <td>Trident</td>
                              <td>Internet
                                Explorer 6
                              </td>
                              <td>Win 98+</td>
                              <td>6</td>
                              <td>A</td>
                            </tr>
                            <tr>
                              <td>Trident</td>
                              <td>AOL browser (AOL desktop)</td>
                              <td>Win XP</td>
                              <td>6</td>
                              <td>A</td>
                            </tr>
                            <tr>
                              <td>Gecko</td>
                              <td>Firefox 1.0</td>
                              <td>Win 98+ / OSX.2+</td>
                              <td>1.7</td>
                              <td>A</td>
                            </tr>
                            <tr>
                              <td>Gecko</td>
                              <td>Firefox 1.5</td>
                              <td>Win 98+ / OSX.2+</td>
                              <td>1.8</td>
                              <td>A</td>
                            </tr>
                          </tbody>
                          <tfoot>
                            <tr>
                              <th>Rendering engine</th>
                              <th>Browser</th>
                              <th>Platform(s)</th>
                              <th>Engine version</th>
                              <th>CSS grade</th>
                            </tr>
                          </tfoot>
                        </table>
                      </div>
        </TabPanel>
        <TabPanel tabId="three">
          <div className="box-body">
                        <table id="example2" className="table table-bordered table-hover">
                          <thead>
                            <tr>
                              <th>Rendering engine</th>
                              <th>Browser</th>
                              <th>Platform(s)</th>
                              <th>Engine version</th>
                              <th>CSS grade</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Trident</td>
                              <td>Internet
                                Explorer 4.0
                              </td>
                              <td>Win 95+</td>
                              <td> 4</td>
                              <td>X</td>
                            </tr>
                            <tr>
                              <td>Trident</td>
                              <td>Internet
                                Explorer 5.0
                              </td>
                              <td>Win 95+</td>
                              <td>5</td>
                              <td>C</td>
                            </tr>
                            <tr>
                              <td>Trident</td>
                              <td>Internet
                                Explorer 5.5
                              </td>
                              <td>Win 95+</td>
                              <td>5.5</td>
                              <td>A</td>
                            </tr>
                            <tr>
                              <td>Trident</td>
                              <td>Internet
                                Explorer 6
                              </td>
                              <td>Win 98+</td>
                              <td>6</td>
                              <td>A</td>
                            </tr>
                            <tr>
                              <td>Trident</td>
                              <td>AOL browser (AOL desktop)</td>
                              <td>Win XP</td>
                              <td>6</td>
                              <td>A</td>
                            </tr>
                            <tr>
                              <td>Gecko</td>
                              <td>Firefox 1.0</td>
                              <td>Win 98+ / OSX.2+</td>
                              <td>1.7</td>
                              <td>A</td>
                            </tr>
                            <tr>
                              <td>Gecko</td>
                              <td>Firefox 1.5</td>
                              <td>Win 98+ / OSX.2+</td>
                              <td>1.8</td>
                              <td>A</td>
                            </tr>
                          </tbody>
                          <tfoot>
                            <tr>
                              <th>Rendering engine</th>
                              <th>Browser</th>
                              <th>Platform(s)</th>
                              <th>Engine version</th>
                              <th>CSS grade</th>
                            </tr>
                          </tfoot>
                        </table>
                      </div>
        </TabPanel>
      </Tabs>
                      </div>
                    </div>
                    {/* /.box-body */}
                    {/* /.box */}
                    <div className="box">
                      <div className="box-header">
                        <h3 className="box-title">Data Table With Full Features</h3>
                      </div>
                      {/* /.box-header */}
                      <div className="box-body">
                        <table id="example1" className="table table-bordered table-striped">
                          <thead>
                            <tr>
                              <th>Rendering engine</th>
                              <th>Browser</th>
                              <th>Platform(s)</th>
                              <th>Engine version</th>
                              <th>CSS grade</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Trident</td>
                              <td>Internet
                                Explorer 4.0
                              </td>
                              <td>Win 95+</td>
                              <td> 4</td>
                              <td>X</td>
                            </tr>
                            <tr>
                              <td>Trident</td>
                              <td>Internet
                                Explorer 5.0
                              </td>
                              <td>Win 95+</td>
                              <td>5</td>
                              <td>C</td>
                            </tr>
                            <tr>
                              <td>Trident</td>
                              <td>Internet
                                Explorer 5.5
                              </td>
                              <td>Win 95+</td>
                              <td>5.5</td>
                              <td>A</td>
                            </tr>
                            <tr>
                              <td>Trident</td>
                              <td>Internet
                                Explorer 6
                              </td>
                              <td>Win 98+</td>
                              <td>6</td>
                              <td>A</td>
                            </tr>
                            <tr>
                              <td>Trident</td>
                              <td>Internet Explorer 7</td>
                              <td>Win XP SP2+</td>
                              <td>7</td>
                              <td>A</td>
                            </tr>
                            <tr>
                              <td>Trident</td>
                              <td>AOL browser (AOL desktop)</td>
                              <td>Win XP</td>
                              <td>6</td>
                              <td>A</td>
                            </tr>
                            <tr>
                              <td>Gecko</td>
                              <td>Firefox 1.0</td>
                              <td>Win 98+ / OSX.2+</td>
                              <td>1.7</td>
                              <td>A</td>
                            </tr>
                            <tr>
                              <td>Gecko</td>
                              <td>Firefox 1.5</td>
                              <td>Win 98+ / OSX.2+</td>
                              <td>1.8</td>
                              <td>A</td>
                            </tr>
                            <tr>
                              <td>Gecko</td>
                              <td>Firefox 2.0</td>
                              <td>Win 98+ / OSX.2+</td>
                              <td>1.8</td>
                              <td>A</td>
                            </tr>
                            <tr>
                              <td>Gecko</td>
                              <td>Firefox 3.0</td>
                              <td>Win 2k+ / OSX.3+</td>
                              <td>1.9</td>
                              <td>A</td>
                            </tr>
                            <tr>
                              <td>Gecko</td>
                              <td>Camino 1.0</td>
                              <td>OSX.2+</td>
                              <td>1.8</td>
                              <td>A</td>
                            </tr>
                            <tr>
                              <td>Gecko</td>
                              <td>Camino 1.5</td>
                              <td>OSX.3+</td>
                              <td>1.8</td>
                              <td>A</td>
                            </tr>
                            <tr>
                              <td>Gecko</td>
                              <td>Netscape 7.2</td>
                              <td>Win 95+ / Mac OS 8.6-9.2</td>
                              <td>1.7</td>
                              <td>A</td>
                            </tr>
                            <tr>
                              <td>Gecko</td>
                              <td>Netscape Browser 8</td>
                              <td>Win 98SE+</td>
                              <td>1.7</td>
                              <td>A</td>
                            </tr>
                            <tr>
                              <td>Gecko</td>
                              <td>Netscape Navigator 9</td>
                              <td>Win 98+ / OSX.2+</td>
                              <td>1.8</td>
                              <td>A</td>
                            </tr>
                            <tr>
                              <td>Gecko</td>
                              <td>Mozilla 1.0</td>
                              <td>Win 95+ / OSX.1+</td>
                              <td>1</td>
                              <td>A</td>
                            </tr>
                            <tr>
                              <td>Gecko</td>
                              <td>Mozilla 1.1</td>
                              <td>Win 95+ / OSX.1+</td>
                              <td>1.1</td>
                              <td>A</td>
                            </tr>
                            <tr>
                              <td>Gecko</td>
                              <td>Mozilla 1.2</td>
                              <td>Win 95+ / OSX.1+</td>
                              <td>1.2</td>
                              <td>A</td>
                            </tr>
                            <tr>
                              <td>Gecko</td>
                              <td>Mozilla 1.3</td>
                              <td>Win 95+ / OSX.1+</td>
                              <td>1.3</td>
                              <td>A</td>
                            </tr>
                            <tr>
                              <td>Gecko</td>
                              <td>Mozilla 1.4</td>
                              <td>Win 95+ / OSX.1+</td>
                              <td>1.4</td>
                              <td>A</td>
                            </tr>
                            <tr>
                              <td>Gecko</td>
                              <td>Mozilla 1.5</td>
                              <td>Win 95+ / OSX.1+</td>
                              <td>1.5</td>
                              <td>A</td>
                            </tr>
                            <tr>
                              <td>Gecko</td>
                              <td>Mozilla 1.6</td>
                              <td>Win 95+ / OSX.1+</td>
                              <td>1.6</td>
                              <td>A</td>
                            </tr>
                            <tr>
                              <td>Gecko</td>
                              <td>Mozilla 1.7</td>
                              <td>Win 98+ / OSX.1+</td>
                              <td>1.7</td>
                              <td>A</td>
                            </tr>
                            <tr>
                              <td>Gecko</td>
                              <td>Mozilla 1.8</td>
                              <td>Win 98+ / OSX.1+</td>
                              <td>1.8</td>
                              <td>A</td>
                            </tr>
                            <tr>
                              <td>Gecko</td>
                              <td>Seamonkey 1.1</td>
                              <td>Win 98+ / OSX.2+</td>
                              <td>1.8</td>
                              <td>A</td>
                            </tr>
                            <tr>
                              <td>Gecko</td>
                              <td>Epiphany 2.20</td>
                              <td>Gnome</td>
                              <td>1.8</td>
                              <td>A</td>
                            </tr>
                            <tr>
                              <td>Webkit</td>
                              <td>Safari 1.2</td>
                              <td>OSX.3</td>
                              <td>125.5</td>
                              <td>A</td>
                            </tr>
                            <tr>
                              <td>Webkit</td>
                              <td>Safari 1.3</td>
                              <td>OSX.3</td>
                              <td>312.8</td>
                              <td>A</td>
                            </tr>
                            <tr>
                              <td>Webkit</td>
                              <td>Safari 2.0</td>
                              <td>OSX.4+</td>
                              <td>419.3</td>
                              <td>A</td>
                            </tr>
                            <tr>
                              <td>Webkit</td>
                              <td>Safari 3.0</td>
                              <td>OSX.4+</td>
                              <td>522.1</td>
                              <td>A</td>
                            </tr>
                            <tr>
                              <td>Webkit</td>
                              <td>OmniWeb 5.5</td>
                              <td>OSX.4+</td>
                              <td>420</td>
                              <td>A</td>
                            </tr>
                            <tr>
                              <td>Webkit</td>
                              <td>iPod Touch / iPhone</td>
                              <td>iPod</td>
                              <td>420.1</td>
                              <td>A</td>
                            </tr>
                            <tr>
                              <td>Webkit</td>
                              <td>S60</td>
                              <td>S60</td>
                              <td>413</td>
                              <td>A</td>
                            </tr>
                            <tr>
                              <td>Presto</td>
                              <td>Opera 7.0</td>
                              <td>Win 95+ / OSX.1+</td>
                              <td>-</td>
                              <td>A</td>
                            </tr>
                            <tr>
                              <td>Presto</td>
                              <td>Opera 7.5</td>
                              <td>Win 95+ / OSX.2+</td>
                              <td>-</td>
                              <td>A</td>
                            </tr>
                            <tr>
                              <td>Presto</td>
                              <td>Opera 8.0</td>
                              <td>Win 95+ / OSX.2+</td>
                              <td>-</td>
                              <td>A</td>
                            </tr>
                            <tr>
                              <td>Presto</td>
                              <td>Opera 8.5</td>
                              <td>Win 95+ / OSX.2+</td>
                              <td>-</td>
                              <td>A</td>
                            </tr>
                            <tr>
                              <td>Presto</td>
                              <td>Opera 9.0</td>
                              <td>Win 95+ / OSX.3+</td>
                              <td>-</td>
                              <td>A</td>
                            </tr>
                            <tr>
                              <td>Presto</td>
                              <td>Opera 9.2</td>
                              <td>Win 88+ / OSX.3+</td>
                              <td>-</td>
                              <td>A</td>
                            </tr>
                            <tr>
                              <td>Presto</td>
                              <td>Opera 9.5</td>
                              <td>Win 88+ / OSX.3+</td>
                              <td>-</td>
                              <td>A</td>
                            </tr>
                            <tr>
                              <td>Presto</td>
                              <td>Opera for Wii</td>
                              <td>Wii</td>
                              <td>-</td>
                              <td>A</td>
                            </tr>
                            <tr>
                              <td>Presto</td>
                              <td>Nokia N800</td>
                              <td>N800</td>
                              <td>-</td>
                              <td>A</td>
                            </tr>
                            <tr>
                              <td>Presto</td>
                              <td>Nintendo DS browser</td>
                              <td>Nintendo DS</td>
                              <td>8.5</td>
                              <td>C/A<sup>1</sup></td>
                            </tr>
                            <tr>
                              <td>KHTML</td>
                              <td>Konqureror 3.1</td>
                              <td>KDE 3.1</td>
                              <td>3.1</td>
                              <td>C</td>
                            </tr>
                            <tr>
                              <td>KHTML</td>
                              <td>Konqureror 3.3</td>
                              <td>KDE 3.3</td>
                              <td>3.3</td>
                              <td>A</td>
                            </tr>
                          </tbody>
                          <tfoot>
                            <tr>
                              <th>Rendering engine</th>
                              <th>Browser</th>
                              <th>Platform(s)</th>
                              <th>Engine version</th>
                              <th>CSS grade</th>
                            </tr>
                          </tfoot>
                        </table>
                      </div>
                      {/* /.box-body */}
                    </div>
                    {/* /.box */}
                  </div>
                  {/* /.col */}
                </div>
                {/* /.row */}
              </section>
              {/* /.content */}
            </div>
            {/* /.content-wrapper */}
            {/* Control Sidebar */}
            <aside className="control-sidebar control-sidebar-dark">
              {/* Create the tabs */}
              <ul className="nav nav-tabs nav-justified control-sidebar-tabs">
                <li><a href="#control-sidebar-home-tab" data-toggle="tab"><i className="fa fa-home" /></a></li>
                <li><a href="#control-sidebar-settings-tab" data-toggle="tab"><i className="fa fa-gears" /></a></li>
              </ul>
              {/* Tab panes */}
              <div className="tab-content">
                {/* Home tab content */}
                <div className="tab-pane" id="control-sidebar-home-tab">
                  <h3 className="control-sidebar-heading">Recent Activity</h3>
                  <ul className="control-sidebar-menu">
                    <li>
                      <a href="javascript:void(0)">
                        <i className="menu-icon fa fa-birthday-cake bg-red" />
                        <div className="menu-info">
                          <h4 className="control-sidebar-subheading">Langdon's Birthday</h4>
                          <p>Will be 23 on April 24th</p>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">
                        <i className="menu-icon fa fa-user bg-yellow" />
                        <div className="menu-info">
                          <h4 className="control-sidebar-subheading">Frodo Updated His Profile</h4>
                          <p>New phone +1(800)555-1234</p>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">
                        <i className="menu-icon fa fa-envelope-o bg-light-blue" />
                        <div className="menu-info">
                          <h4 className="control-sidebar-subheading">Nora Joined Mailing List</h4>
                          <p>nora@example.com</p>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">
                        <i className="menu-icon fa fa-file-code-o bg-green" />
                        <div className="menu-info">
                          <h4 className="control-sidebar-subheading">Cron Job 254 Executed</h4>
                          <p>Execution time 5 seconds</p>
                        </div>
                      </a>
                    </li>
                  </ul>
                  {/* /.control-sidebar-menu */}
                  <h3 className="control-sidebar-heading">Tasks Progress</h3>
                  <ul className="control-sidebar-menu">
                    <li>
                      <a href="javascript:void(0)">
                        <h4 className="control-sidebar-subheading">
                          Custom Template Design
                          <span className="label label-danger pull-right">70%</span>
                        </h4>
                        <div className="progress progress-xxs">
                          <div className="progress-bar progress-bar-danger" style={{width: '70%'}} />
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">
                        <h4 className="control-sidebar-subheading">
                          Update Resume
                          <span className="label label-success pull-right">95%</span>
                        </h4>
                        <div className="progress progress-xxs">
                          <div className="progress-bar progress-bar-success" style={{width: '95%'}} />
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">
                        <h4 className="control-sidebar-subheading">
                          Laravel Integration
                          <span className="label label-warning pull-right">50%</span>
                        </h4>
                        <div className="progress progress-xxs">
                          <div className="progress-bar progress-bar-warning" style={{width: '50%'}} />
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">
                        <h4 className="control-sidebar-subheading">
                          Back End Framework
                          <span className="label label-primary pull-right">68%</span>
                        </h4>
                        <div className="progress progress-xxs">
                          <div className="progress-bar progress-bar-primary" style={{width: '68%'}} />
                        </div>
                      </a>
                    </li>
                  </ul>
                  {/* /.control-sidebar-menu */}
                </div>
                {/* /.tab-pane */}
                {/* Stats tab content */}
                <div className="tab-pane" id="control-sidebar-stats-tab">Stats Tab Content</div>
                {/* /.tab-pane */}
                {/* Settings tab content */}
                <div className="tab-pane" id="control-sidebar-settings-tab">
                  <form method="post">
                    <h3 className="control-sidebar-heading">General Settings</h3>
                    <div className="form-group">
                      <label className="control-sidebar-subheading">
                        Report panel usage
                        <input type="checkbox" className="pull-right" defaultChecked />
                      </label>
                      <p>
                        Some information about this general settings option
                      </p>
                    </div>
                    {/* /.form-group */}
                    <div className="form-group">
                      <label className="control-sidebar-subheading">
                        Allow mail redirect
                        <input type="checkbox" className="pull-right" defaultChecked />
                      </label>
                      <p>
                        Other sets of options are available
                      </p>
                    </div>
                    {/* /.form-group */}
                    <div className="form-group">
                      <label className="control-sidebar-subheading">
                        Expose author name in posts
                        <input type="checkbox" className="pull-right" defaultChecked />
                      </label>
                      <p>
                        Allow the user to show his name in blog posts
                      </p>
                    </div>
                    {/* /.form-group */}
                    <h3 className="control-sidebar-heading">Chat Settings</h3>
                    <div className="form-group">
                      <label className="control-sidebar-subheading">
                        Show me as online
                        <input type="checkbox" className="pull-right" defaultChecked />
                      </label>
                    </div>
                    {/* /.form-group */}
                    <div className="form-group">
                      <label className="control-sidebar-subheading">
                        Turn off notifications
                        <input type="checkbox" className="pull-right" />
                      </label>
                    </div>
                    {/* /.form-group */}
                    <div className="form-group">
                      <label className="control-sidebar-subheading">
                        Delete chat history
                        <a href="javascript:void(0)" className="text-red pull-right"><i className="fa fa-trash-o" /></a>
                      </label>
                    </div>
                    {/* /.form-group */}
                  </form>
                </div>
                {/* /.tab-pane */}
              </div>
            </aside>
            {/* /.control-sidebar */}
            {/* Add the sidebar's background. This div must be placed
           immediately after the control sidebar */}
            <div className="control-sidebar-bg" />
          </div>
        );
    }
}
export default Table;