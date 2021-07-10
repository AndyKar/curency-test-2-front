/* 
    Created on : 29.01.2020, 06:18:59
    Author     : Andy Kar
*/

import API from "../../utils/API"
import {
	SEND_LOGIN_INFO_START,
	SEND_LOGIN_INFO_SUCCESS,
	SEND_LOGIN_INFO_ERROR,

} from './actionTypes'

export function sendData(type, infoData){
	// return async dispatch => {
	// 	dispatch(sendLoginInfoStart())
	//
	// 	switch (type) {
	// 		case 'login':
	// 			try{
	// 				const responce = await API.post('common/login', infoData)
	//
	// 				if(responce.status === 200){
	// 					const info = {
	//
	// 					}
	//
	// 					dispatch(sendLoginInfoSuccess(info))
	//
	// 				} else {
	// 					dispatch(sendLoginInfoError({error: "SERVER ERROR"}))
	// 				}
	// 			} catch(e){
	// 				console.log(e)
	// 				dispatch(sendLoginInfoError(e))
	// 			}
	//
	// 			break
	// 		case 'register':
	// 			try{
	// 				const responce = await API.post('common/register', infoData)
	//
	// 				if(responce.status === 200){
	// 					const info = {
	//
	// 					}
	//
	// 					dispatch(sendLoginInfoSuccess(info))
	//
	// 				} else {
	// 					dispatch(sendLoginInfoError({error: "SERVER ERROR"}))
	// 				}
	// 			} catch(e){
	// 				console.log(e)
	// 				dispatch(sendLoginInfoError(e))
	// 			}
	//
	// 			break
	//
	// 		case 'forgotten':
	// 			try{
	// 				const responce = await API.post('common/forgotten', infoData)
	//
	// 				if(responce.status === 200){
	// 					const info = {
	// 					}
	//
	// 					dispatch(sendLoginInfoSuccess(info))
	//
	// 				} else {
	// 					dispatch(sendLoginInfoError({error: "SERVER ERROR"}))
	// 				}
	// 			} catch(e){
	// 				console.log(e)
	// 				dispatch(sendLoginInfoError(e))
	// 			}
	//
	// 			break
	//
	// 		default:
	// 			break
	// 	}
	//
	//
	// }
}

export function sendLoginInfoStart(){
	return {
		type: SEND_LOGIN_INFO_START
	}
}
export function sendLoginInfoSuccess(info){
	return {
		type: SEND_LOGIN_INFO_SUCCESS,
		// logged: info.logged,
		// errorPassLogin: info.errorPassLogin,
		// errorPhoneLogin: info.errorPhoneLogin,
		// errorRegister: info.errorRegister,
		// errorReset: info.errorReset,
		// customerId: info.customerId,
		// customerEmail: info.customerEmail,
		// customerPhone: info.customerPhone,
		// code: info.code,
		// codeError: info.codeError,
		// codeMessage: info.codeMessage,
		// infoCheck: info.infoCheck
	}
}
export function sendLoginInfoError(e){
	return {
		type: SEND_LOGIN_INFO_ERROR,
		error: e
	}
}