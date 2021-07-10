/* 
    Created on : 29.01.2020, 06:18:59
    Author     : Andy Kar
*/
import {
	FETCH_SESSION_START,
	FETCH_SESSION_SUCCESS,
	FETCH_SESSION_ERROR,
} from '../actions/actionTypes'
import React from "react"

let initalState = {
	'session': {}
}

export default function sessionReducer(state = initalState, action){
	switch(action.type){
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