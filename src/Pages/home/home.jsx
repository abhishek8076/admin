import React from 'react';
import "./home.scss"
import { Navbar } from '../../components/navbar/navbar';
import { Sidebar } from '../../components/sidebar/Sidebar';
import { Widget } from '../../components/widget/widget';

export const Home = () => {
  return (
    <div className='home'>
     <Sidebar/>
     <div className='homeContainer'>
        <Navbar/>
       <div className='widgets'>
        <Widget/>
        <Widget/>
        <Widget/>
        <Widget/>
       </div>
     </div>
      </div>
   
  )
}
