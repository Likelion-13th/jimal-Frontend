import React from 'react';
import Menu from './Menu';
import Banner from './Banner';
import './../../styles/Home.css'
import Info from "./Info"; 


const Home=()=>{
    return(
        <div className="home-container">
            <Banner />
            <Menu></Menu>
            <Info />
        </div>
    );
};

export default Home;