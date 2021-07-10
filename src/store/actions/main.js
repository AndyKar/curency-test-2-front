/* 
    Created on : 29.01.2020, 06:18:59
    Author     : Andy Kar
*/
import API from "../../utils/API"
import {
	FETCH_INIT_INFO_START,
	FETCH_INIT_INFO_SUCCESS,
	FETCH_INIT_INFO_ERROR,
	SEND_LOGIN_INFO_START,
	SEND_LOGIN_INFO_SUCCESS,
	SEND_LOGIN_INFO_ERROR,
	// FETCH_SESSION_START,
	// FETCH_SESSION_SUCCESS,
	// FETCH_SESSION_ERROR
} from './actionTypes'

import {fetchAccountInfo, fetchAddresses} from '../actions/account'
import {fetchSession} from "./session";

export function fetchInitInfo(code='', callback = () => {}){
	const start = new Date()
	return async dispatch => {
		dispatch(fetchInitInfoStart())
		try{
			const response = await API.get('common/main')
			console.log('MAIN response', response)
			const info = {
				main: response.data.main,
				auth: response.data.auth,
				//session: response.data.session,
				cookie: response.data.cookie,
			}

			dispatch(fetchSession())
			if(info.auth.logged){
				dispatch(fetchAccountInfo())
			}
			dispatch(fetchInitInfoSuccess(info))
			callback()
			const end = new Date()
			console.log('INIT time = ', end - start)

		} catch(e){
			console.log(e)
			dispatch(fetchInitInfoError(e))
		}
	}
}

export function logout (callback){
	return async dispatch => {
		try{
			const response = await API.get('common/logout/logout')
			if(response.status === 200 && response.data.success){
				dispatch(fetchInitInfo())
			}
		} catch(e){
			console.log(e)
		}
	}
}


export function sendAuthData(type, infoData){
	return async dispatch => {
		dispatch(sendLoginInfoStart())

		switch (type) {
			case 'login':
				try{
					const response = await API.post('common/login/login', infoData)
					console.log('MAIN AUTH LOGIN response', response)
					if(response.status === 200){
						const info = {
							errorsAuth:{
								login: response.data.error_warning? response.data.error_warning:null,
								register: null,
								forgotten: null,
							},
							messagesAuth:{
								login: response.data.success? response.data.success:null,
								register: null,
								forgotten: null,
							}
						}
						dispatch(sendLoginInfoSuccess(info))
						if(!response.data.error_warning){
							dispatch(fetchInitInfo())
						}

					} else {
						dispatch(sendLoginInfoError({error: "SERVER ERROR"}))
					}
				} catch(e){
					console.log(e)
					dispatch(sendLoginInfoError(e))
				}

				break
			case 'register':
				try{
					const response = await API.post('common/register/register', infoData)
					console.log('REGISTER RESPONSE', response)
					if(response.status === 200){
						const info = {
							errorsAuth:{
								login: null,
								register: response.data.error_warning? response.data.error_warning:null,
								forgotten: null,
							},
							messagesAuth:{
								login: null,
								register: response.data.success? response.data.success:null,
								forgotten: null,
							}
						}
						dispatch(sendLoginInfoSuccess(info))
						if(!response.data.error_warning){
							dispatch(fetchInitInfo())
						}

					} else {
						dispatch(sendLoginInfoError({error: "SERVER ERROR"}))
					}
				} catch(e){
					console.log(e)
					dispatch(sendLoginInfoError(e))
				}

				break

			case 'forgotten':
				try{
					const response = await API.post('common/forgotten/forgotten', infoData)
					console.log('FORGOTTEN RESPONSE', response)
					if(response.status === 200){
						const info = {
							errorsAuth:{
								login: null,
								register: null,
								forgotten: response.data.error_warning? response.data.error_warning:null,
							},
							messagesAuth:{
								login: null,
								register: null,
								forgotten: response.data.success? response.data.success:null,
							}
						}
						dispatch(sendLoginInfoSuccess(info))
					} else {
						dispatch(sendLoginInfoError({error: "SERVER ERROR"}))
					}
				} catch(e){
					console.log(e)
					dispatch(sendLoginInfoError(e))
				}

				break

			default:
				break
		}
	}
}

export function fetchInitInfoStart(){
	return {
		type: FETCH_INIT_INFO_START
	}
}
export function fetchInitInfoSuccess(info){
	return {
		type: FETCH_INIT_INFO_SUCCESS,
		main: info.main,
		auth: info.auth,
		cookie: info.cookie,
	}
}
export function fetchInitInfoError(e){
	return {
		type: FETCH_INIT_INFO_ERROR,
		error: e
	}
}

export function sendLoginInfoStart(){
	return {
		type: SEND_LOGIN_INFO_START
	}
}
export function sendLoginInfoSuccess(info){
	return {
		type: SEND_LOGIN_INFO_SUCCESS,
		errorsAuth: info.errorsAuth,
		messagesAuth: info.messagesAuth,
	}
}
export function sendLoginInfoError(e){
	return {
		type: SEND_LOGIN_INFO_ERROR,
		error: e
	}
}
