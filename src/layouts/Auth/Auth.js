/*
    Created on : 03.09.2019, 06:18:59
    Author     : Andy Kar
*/
import React from 'react'
import '../../styles/Auth.scss'
import Forgotten from './/Forgotten'
import Login from './/Login'
import Register from './/Register'
import {TabPane, TabContent} from "reactstrap";

function Auth(props) {
	console.log('AUTH PROPS', props)
	return(
		<React.Fragment>
			<TabContent activeTab={props.pathname}>
				<TabPane tabId="/login">
					<Login
						info={props.info}
						errorsAuth={props.errorsAuth}
						messagesAuth={props.messagesAuth}
						sendAuthData={ props.sendAuthData }
					/>
				</TabPane>
				<TabPane tabId="/register">
					<Register
						language={props.language}
						errorsAuth={props.errorsAuth}
						messagesAuth={props.messagesAuth}
						sendAuthData={ props.sendAuthData }
					/>
				</TabPane>
				<TabPane tabId="/forgotten">
					<Forgotten
						language={props.language}
						errorsAuth={props.errorsAuth}
						messagesAuth={props.messagesAuth}
						sendAuthData={ props.sendAuthData }
					/>
				</TabPane>
			</TabContent>
		</React.Fragment>
	)
}

export default Auth