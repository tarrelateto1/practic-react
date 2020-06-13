import React from 'react';
import {Layout} from 'antd';
import './App.css';
//Components
import SiderComponent from "../components/SiderComponent";
import HeaderComponent from "../components/HeaderComponent";
import FooterComponent from "../components/FooterComponent";


import {Route, Switch} from 'react-router-dom';
// Contents
import Home from "./Contents/Main/Home";
import Promotion from "./Contents/Main/Promotion";
import Profile from "./Contents/Main/Profile";


function App() {
  return (
    <Layout>
    <SiderComponent></SiderComponent>
    <Layout>
      <HeaderComponent/>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/search' component={Promotion} />
            <Route path='/profile' component={Profile} />
        </Switch>
      <FooterComponent/>
    </Layout>
  </Layout>
  );
}

export default App;
