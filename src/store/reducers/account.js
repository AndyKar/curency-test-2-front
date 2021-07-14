/* 
    Created on : 29.01.2020, 06:18:59
    Author     : Andy Kar
*/
import {
	FETCH_ACCOUNT_INFO_START,
	FETCH_ACCOUNT_INFO_SUCCESS,
	FETCH_ACCOUNT_INFO_ERROR,
	FETCH_ACCOUNT_EDIT_START,
	FETCH_ACCOUNT_EDIT_SUCCESS,
	FETCH_ACCOUNT_EDIT_ERROR,
	FETCH_CONTACTS_START,
	FETCH_CONTACTS_SUCCESS,
	FETCH_CONTACTS_ERROR,
	FETCH_CURRENCIES_START,
	FETCH_CURRENCIES_SUCCESS,
	FETCH_CURRENCIES_ERROR
} from '../actions/actionTypes'


import React from "react";

let initalState = {
	account: {
		account: {},
		contacts: {},
		currencies: {}
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

		case FETCH_CURRENCIES_START:
			return{
				...state, loading: true
			}
		case FETCH_CURRENCIES_SUCCESS:
			return{
				...state,
				loading: false,
				currencies: action.currencies,
			}
		case FETCH_CURRENCIES_ERROR:
			return{
				...state, loading: false, error: action.error
			}


		default:
			return state
	}
}