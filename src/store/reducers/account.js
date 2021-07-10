/* 
    Created on : 29.01.2020, 06:18:59
    Author     : Andy Kar
*/
import {
	FETCH_ACCOUNT_INFO_START, FETCH_ACCOUNT_INFO_SUCCESS, FETCH_ACCOUNT_INFO_ERROR,
	FETCH_ACCOUNT_EDIT_START, FETCH_ACCOUNT_EDIT_SUCCESS, FETCH_ACCOUNT_EDIT_ERROR,
	FETCH_CONTACTS_START, FETCH_CONTACTS_SUCCESS, FETCH_CONTACTS_ERROR
} from '../actions/actionTypes'
import Dashboard from "views/Dashboard.js";
import Icons from "../../views/Icons"
import Map from "views/Map.js";
import Notifications from "views/Notifications.js";
//import Rtl from "views/Rtl.js";
import TableList from "views/TableList.js"
import Typography from "views/Typography.js"
import UserProfile from "views/UserProfile.js"

import {Route} from "react-router-dom";
import React from "react";

let initalState = {
	account: {
		account: {},
		contacts: {}
	},
}

export default function accountReducer(state = initalState, action){
	switch(action.type){
		case FETCH_ACCOUNT_INFO_START:
			return{
				...state, loading: true
			}
		case FETCH_ACCOUNT_INFO_START:
			return{...state, loading: true}
		case FETCH_ACCOUNT_INFO_SUCCESS:

			return {...state,
				loading: false,
				account: action.account,
				routes: action.routes
			}
		case FETCH_ACCOUNT_INFO_ERROR:
			return{...state, loading: false, error: action.error}

		case FETCH_ACCOUNT_EDIT_START:
			return{
				...state, loading: true
			}
		case FETCH_ACCOUNT_EDIT_SUCCESS:
			return{
				...state,
				loading: false,
				accountEdit: action.accountEdit
			}
		case FETCH_ACCOUNT_EDIT_ERROR:
			return{
				...state, loading: false, error: action.error
			}
		case FETCH_CONTACTS_START:
			return{
				...state, loading: true
			}
		case FETCH_CONTACTS_SUCCESS:
			return{
				...state,
				loading: false,
				contacts: action.contacts,
			}
		case FETCH_CONTACTS_ERROR:
			return{
				...state, loading: false, error: action.error
			}


		default:
			return state
	}
}