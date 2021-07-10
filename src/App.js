/* 
    Created on : 03.09.2019, 06:18:59
    Author     : Andy Kar
*/
import React, {Component} from 'react'
import { Route, Switch, Redirect } from "react-router-dom"
// import MainPage from './pages/MainPage/MainPage'
// import WishPage from './pages/WishPage/WishPage'
// import BonusPage from './pages/BonusPage/BonusPage'
// import OrdersPage from './pages/OrdersPage/OrdersPage'
// import OrderPage from './pages/OrderPage/OrderPage'
// import PasswordPage from './pages/PasswordPage/PasswordPage'
import MainLayout from "./layouts/Main/Main"

class App extends Component {

	render(){
		return (
			<React.Fragment>
				<MainLayout>
					{/*<Switch>*/}

					{/*	<Route path="/wishlist" component={WishPage} />*/}
					{/*	<Route path="/bonuses/:page" component={BonusPage} />*/}
					{/*	<Route path="/bonuses" component={BonusPage} />*/}
					{/*	<Route path="/orders/:page" component={OrdersPage} />*/}
					{/*	<Route path="/orders"  component={OrdersPage} />*/}
					{/*	<Route path="/order/:id" component={OrderPage} />*/}
					{/*	<Route path="/password" component={PasswordPage} />*/}
					{/*	<Route path="/" component={MainPage} />*/}
					{/*	<Route component={MainPage} />*/}

					{/*</Switch>*/}
				</MainLayout>
			</React.Fragment>
		)
	}
}

export default App
