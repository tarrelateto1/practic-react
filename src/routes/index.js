import React from 'react'
import {Route, Switch} from 'react-router-dom'
//Main
import Home from '../containers/Contents/Main/Home'
//Game
import BrainBattle from '../containers/Contents/Game/BrainBattle'
import CoinFarm from '../containers/Contents/Game/CoinFarm'
import Milieu from '../containers/Contents/Survey/Milieu'
import Surveyon from '../containers/Contents/Survey/Surveyon'
import ClipClap from '../containers/Contents/Clip/ClipClap'
//Wallet
import Paypal from '../containers/Contents/MoneyWallet/Paypal'
//NotFound
import NotFoundPage from "../containers/Contents/Main/NotFoundPage";

export default () => (
    <Switch>
        <Route exact path='/' component={Home}/>
        {/*<Route path='/search' component={Promotion} />*/}
        {/*<Route path='/profile' component={Profile} />*/}
        <Route path='/game/brain-battle' component={BrainBattle}/>
        <Route path='/game/coin-farm' component={CoinFarm}/>
        <Route path='/survey/milieu' component={Milieu}/>
        <Route path='/survey/surveyon' component={Surveyon}/>
        <Route path='/clip/clipclap' component={ClipClap}/>
        <Route path='/wallet/paypal' component={Paypal}/>
        <Route component={NotFoundPage}/>
    </Switch>
)