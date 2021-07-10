/* 
    Created on : 29.01.2020, 06:18:59
    Author     : Andy Kar
*/
import {
	FETCH_INIT_INFO_START,
	FETCH_INIT_INFO_SUCCESS,
	FETCH_INIT_INFO_ERROR,
	SEND_LOGIN_INFO_START,
	SEND_LOGIN_INFO_SUCCESS,
	SEND_LOGIN_INFO_ERROR,
	FETCH_SESSION_START,
	FETCH_SESSION_SUCCESS,
	FETCH_SESSION_ERROR,
} from '../actions/actionTypes'
import React from "react";

let initalState = {
	main: {
		header: {},
		footer: {}
	},
	session: {},
	cookie: {},
	auth: {},
	messagesAuth:{
		login: null,
		register: null,
		forgotten: null
	},
	errorsAuth:{
		login: null,
		register: null,
		forgotten: null
	}
}

export default function mainReducer(state = initalState, action){
	switch(action.type){
		case FETCH_INIT_INFO_START:
			return{...state, loading: true}
		case FETCH_INIT_INFO_SUCCESS:
			return {...state,
				loading: false,
				main: action.main,
				auth: action.auth,
				//session: action.session,
				cookie: action.cookie
			}
		case FETCH_INIT_INFO_ERROR:
			return{...state, loading: false, error: action.error}

		case SEND_LOGIN_INFO_START:
			return{
				...state, loading: true
			}
		case SEND_LOGIN_INFO_SUCCESS:
			return{
				...state,
				loading: false,
				errorsAuth: action.errorsAuth,
				messagesAuth: action.messagesAuth
			}
		case SEND_LOGIN_INFO_ERROR:
			return{ ...state, loading: false, error: action.error }
		case FETCH_SESSION_START:
			return{...state, loading: true}
		case FETCH_SESSION_SUCCESS:
			return {...state, loading: false, session: action.session}
		case FETCH_SESSION_ERROR:
			return{...state, loading: false, error: action.error}
		default:
			return state
	}
}