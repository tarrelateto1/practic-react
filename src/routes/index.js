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
import Bitkub from "../containers/Contents/MoneyWallet/Bitkub";
//NotFound
import NotFoundPage from "../containers/Contents/Main/NotFoundPage";
import FreeBitco from "../containers/Contents/Bitcoin/FreeBitco";
import BtcClick from "../containers/Contents/Bitcoin/BtcClick";
import PaypalWithDraw from "../containers/Contents/MoneyWallet/PaypalWithDraw";
import BitkubWithDraw from "../containers/Contents/MoneyWallet/BitkubWithDraw";

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
        <Route path='/bitcoin/freebitco' component={FreeBitco}/>
            <Route path='/bitcoin/btcclick' component={BtcClick}/>
            <Route path='/wallet/paypal' component={Paypal}/>
        <Route path='/wallet/paypal-withdraw' component={PaypalWithDraw}/>
        <Route path='/wallet/bitkub' component={Bitkub}/>
        <Route path='/wallet/bitkub-withdraw' component={BitkubWithDraw}/>
        <Route component={NotFoundPage}/>
    </Switch>
)