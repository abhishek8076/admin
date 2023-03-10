import React from 'react';
import "./home.scss"
import { Navbar } from '../../components/navbar/navbar';
import { Sidebar } from '../../components/sidebar/Sidebar';
import { Widget } from '../../components/widget/widget';
import { Feautred } from '../../components/feautred/feautred';
import { Chart } from '../../components/chart/chart';

export const Home = () => {
  return (
    <div className='home'>
     <Sidebar/>
     <div className='homeContainer'>
        <Navbar/>
       <div className='widgets'>
        <Widget type="User"/>
        <Widget type="Order"/>
        <Widget type="Earning"/>
        <Widget type="Balance"/>
       </div>
       <div className="chart">
        <Feautred/>
        <Chart/>
       </div>
     </div>
      </div>
   
  )
}
