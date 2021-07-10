/* 
    Created on : 29.01.2020, 06:18:59
    Author     : Andy Kar
*/
import API from "../../utils/API"
import {
	FETCH_SESSION_START,
	FETCH_SESSION_SUCCESS,
	FETCH_SESSION_ERROR
} from './actionTypes'


export function fetchSession(sessionData = null, shippingCode = null, paymentCode = null){
	const start = new Date()
	return async dispatch => {
		dispatch(fetchSessionStart())
        if(!sessionData) {
            try {
                const response = await API.get('common/session')
                console.log('SESSION Response', response)
                const info = {
                    session: response.data.session,
                }

                dispatch(fetchSessionSuccess(info))
                const end = new Date()
                //console.log('SESSION time = ', end - start)

            } catch (e) {
                console.log(e)
                dispatch(fetchSessionError(e))
            }
        } else {
			const info = {
				session: sessionData,
			}

			dispatch(fetchSessionSuccess(info))
			//setTimeout(() => dispatch(fetchTotals()), 200)
		}
	}
}

export function fetchSessionStart(){
	return {
		type: FETCH_SESSION_START
	}
}
export function fetchSessionSuccess(info){
	return {
		type: FETCH_SESSION_SUCCESS,
		session: info.session,
	}
}
export function fetchSessionError(e){
	return {
		type: FETCH_SESSION_ERROR,
		error: e
	}
}