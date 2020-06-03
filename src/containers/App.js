import React from 'react';
import {Layout} from 'antd';
import './App.css';
//Components
import SiderComponent from '../components/SiderComponent'
import HeaderComponent from "../components/HeaderComponent";
import FooterComponent from "../components/FooterComponent";
import Home from "./Contents/Home";

import {Route, Switch} from 'react-router-dom';
import Promotion from "./Contents/Promotion";
import Profile from "./Contents/Profile";


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
