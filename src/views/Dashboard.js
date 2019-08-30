import React from 'react';
import Footer from '../components/Footer';
import Menu from '../components/Menu';
import Header from '../components/Header';
import Generals from '../components/Generals/Generals';
import Chart from '../components/Chart';

class Dashboard extends React.Component{
      render(){
        return(
            <div>
            <Header/>
            <Menu/>
            <Generals/>
            <Chart/>        
            <Footer/>
            </div>
        );
    }
}
export default Dashboard;