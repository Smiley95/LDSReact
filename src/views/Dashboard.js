import React from 'react';
import Footer from '../components/Footer';
import Menu from '../components/Menu';
import Header from '../components/Header';
import Table from '../components/Table';
import Chart from '../components/Chart';
class Dashboard extends React.Component{
      render(){
        return(
            <div>
                <Header/>
            <Menu/>
            <Chart/>
            <Table/>
            <Footer/>
            </div>
        );
    }
}
export default Dashboard;