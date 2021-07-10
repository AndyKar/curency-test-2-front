/* 
    Created on : 10.07.2021, 14:18:59
    Author     : Andy Kar
*/
import API from "../../utils/API"
import {
	FETCH_ACCOUNT_INFO_START,
	FETCH_ACCOUNT_INFO_SUCCESS,
	FETCH_ACCOUNT_INFO_ERROR,
	FETCH_CONTACTS_START,
	FETCH_CONTACTS_SUCCESS,
	FETCH_CONTACTS_ERROR,
	SEND_NEW_CONTACT_START,
	SEND_NEW_CONTACT_ERROR,
	SEND_CONTACT_START,
	SEND_CONTACT_ERROR,
	DELETE_CONTACT_SUCCESS,
} from './actionTypes'

export function fetchAccountInfo(code='', callback = () => {}){
	const start = new Date()
	return async dispatch => {
		dispatch(fetchAccountInfoStart())
		try{
			const response = await API.get('account/account')
			console.log('ACCOUNT response', response)
			if(response.status === 200) {
				const info = {
					account: response.data,
				}
				dispatch(fetchAccountInfoSuccess(info))
				dispatch(fetchContacts())

				callback()
				const end = new Date()
				console.log('ACCOUNT time = ', end - start)
			}

		} catch(e){
			console.log(e)
			dispatch(fetchAccountInfoError(e))
		}
	}
}
export function fetchContacts(){
	return async dispatch => {
		dispatch(fetchContactsStart())

		try{
			const responce = await API.get('account/contacts/getContacts')
			console.log('FETCH CONTACTS', responce)
			if(responce.status === 200){
				const info = {
					contacts: responce.data.contacts,
				}

				dispatch(fetchContactsSuccess(info))
			}

		} catch(e){
			console.log(e)
			dispatch(fetchContactsError(e))
		}
	}
}

export function sendNewContactData(newContactData){
	return async dispatch => {
		dispatch(sendNewContactStart())

		try{
			const response = await API.post('account/contacts/add', newContactData)
			console.log('sendNewContactData', response)
			if(response.status === 200) {

				dispatch(fetchContacts())

			} else {
				dispatch(sendNewContactError({error: "Ошибка связи с сервером"}))
			}
		} catch(e){
			console.log(e)
			dispatch(sendNewContactError(e))
		}
	}
}

export function sendContactData(contactData){
	return async dispatch => {
		dispatch(sendContactStart())

		try{
			const responce = await API.post('account/contacts/edit', contactData)

			if(responce.status === 200){
				dispatch(fetchContacts())

			} else {
				dispatch(sendContactError({error: "Ошибка связи с сервером"}))
			}
		} catch(e){
			console.log(e)
			dispatch(sendContactError(e))
		}
	}
}


export function deleteContact(contactId){
	return async dispatch => {

		try{
			const response = await API.get('/account/contacts/delete&contact_id=' + contactId)
			console.log('deleteContact', response)
			if(response.status === 200){
				dispatch(deleteContactSuccess())
				dispatch(fetchContacts())
			}
		} catch(e){
			console.log(e)
			//dispatch(deleteContactError(e))
		}
	}
}


export function fetchContactsStart(){
	return {
		type: FETCH_CONTACTS_START
	}
}
export function fetchContactsSuccess(info){
	return {
		type: FETCH_CONTACTS_SUCCESS,
		contacts: info.contacts,
	}
}
export function fetchContactsError(e){
	return {
		type: FETCH_CONTACTS_ERROR,
		error: e
	}
}
export function sendNewContactStart(){
	return {
		type: SEND_NEW_CONTACT_START
	}
}
export function sendNewContactError(e){
	return {
		type: SEND_NEW_CONTACT_ERROR,
		error: e
	}
}
export function sendContactStart(){
	return {
		type: SEND_CONTACT_START
	}
}
export function sendContactError(e){
	return {
		type: SEND_CONTACT_ERROR,
		error: e
	}
}
export function deleteContactSuccess(){
	return {
		type: DELETE_CONTACT_SUCCESS
	}
}

export function fetchAccountInfoStart(){
	return {
		type: FETCH_ACCOUNT_INFO_START
	}
}
export function fetchAccountInfoSuccess(info){
	return {
		type: FETCH_ACCOUNT_INFO_SUCCESS,
		account: info.account,
	}
}
export function fetchAccountInfoError(e){
	return {
		type: FETCH_ACCOUNT_INFO_ERROR,
		error: e
	}
}

