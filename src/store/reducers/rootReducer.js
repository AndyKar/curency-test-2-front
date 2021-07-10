/* 
    Created on : 10.07.2021, 13:18:59
    Author     : Andy Kar
*/

import {combineReducers} from 'redux'
import mainReducer from './main'
import sessionReducer from './session'
import accountReducer from './account'
import authReducer from './auth'

export default combineReducers({
	main: mainReducer,
	session: sessionReducer,
	account: accountReducer,
	auth: authReducer,
})


