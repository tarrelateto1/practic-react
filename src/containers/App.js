import React from 'react';
import {Layout} from 'antd';
import './App.css';
//Components
import SiderComponent from "../components/SiderComponent";
import HeaderComponent from "../components/HeaderComponent";
import FooterComponent from "../components/FooterComponent";

// Contents
import Routing from '../routes'



function App() {
  return (
    <Layout>
    <SiderComponent></SiderComponent>
    <Layout>
      <HeaderComponent/>
    <Routing/>
      <FooterComponent/>
    </Layout>
  </Layout>
  );
}

export default App;
