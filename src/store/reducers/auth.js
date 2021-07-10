/* 
    Created on : 29.01.2020, 06:18:59
    Author     : Andy Kar
*/
import {
	FETCH_CHECK_LOGGED_START,
	FETCH_CHECK_LOGGED_SUCCESS,
	FETCH_CHECK_LOGGED_ERROR,
	SEND_LOGIN_INFO_START,
	SEND_LOGIN_INFO_SUCCESS,
	SEND_LOGIN_INFO_ERROR,
	SEND_RESET_START,
	SEND_RESET_SUCCESS,
	SEND_RESET_ERROR
} from '../actions/actionTypes'

let initalState = {

	formControls: {
		register: {
			controls: {
				firstname: {
					value: '',
					type: 'text',
					label: 'Имя',
					placeholder: 'Имя',
					errorMessage: '',
					valid: true,
					touched: false,
					validation: {
						required: true,
						minLength: 2,
						maxLength: 30
					}
				},
				lastname: {
					value: '',
					type: 'text',
					label: 'Фамилия',
					placeholder: 'Фамилия',
					errorMessage: '',
					valid: true,
					touched: false,
					validation: {
						required: false,
						maxLength: 30
					}
				},
				email: {
					value: '',
					type: 'email',
					label: 'E-mail',
					placeholder: 'E-mail',
					errorMessage: '',
					valid: true,
					touched: false,
					validation: {
						required: true,
						email: true
					}
				},
				telephone: {
					value: '',
					type: 'tel',
					label: 'Телефон',
					placeholder: 'Телефон',
					errorMessage: '',
					valid: true,
					touched: false,
					mask: "+37\\5 99 999 99 99",
					validation: {
						required: true,
						tel: true
					}
				},
				password: {
					value: '',
					type: 'password',
					label: 'Пароль',
					placeholder: '',
					errorMessage: '',
					valid: true,
					touched: false,
					validation: {
						required: true,
						minLength: 4,
						maxLength: 30
					}
				},
				passconfirm: {
					value: '',
					type: 'password',
					label: 'Пароль еще раз',
					placeholder: '',
					errorMessage: '',
					valid: true,
					touched: false,
					validation: {
						passconfirm: true,
						required: true
					}
				}
			},
			label: 'Регистрация аккаунта',
			icon: 'PersonAdd',
			buttonRegister: 'Зарегистрировать'
		},
		loginMail: {
			controls: {
				email: {
					value: '',
					type: 'email',
					label: 'E-mail',
					placeholder: 'E-mail',
					errorMessage: '',
					valid: true,
					touched: false,
					validation: {
						required: true,
						email: true
					}
				},
				password: {
					value: '',
					type: 'password',
					label: 'Пароль',
					placeholder: '',
					errorMessage: '',
					valid: true,
					touched: false,
					validation: {
						required: true,
						minLength: 4,
						maxLength: 30
					}
				}
			},
			label: 'Вход по паролю',
			icon: 'VpnKey',
			sendButtonLogin: 'Войти',
			sendButtonReset: 'Забыли пароль?',
			buttonRegister: 'Зарегистрировать'
		},
		loginPhone: {
			controls: {
				telephone: {
					value: '',
					type: 'tel',
					label: 'Ваш номер телефона',
					placeholder: 'Номер телефона',
					errorMessage: '',
					valid: true,
					touched: false,
					mask: "+37\\5 99 999 99 99",
					validation: {
						required: true,
						tel: true
					}
				},
				code: {
					value: '',
					type: 'text',
					label: 'SMS Код',
					placeholder: '****',
					errorMessage: '',
					valid: true,
					touched: false,
					mask: "9999",
					validation: {
						required: true,
						minLength: 4,
						maxLength: 4
					}
				}
			},

			label: 'Вход по SMS-коду',
			icon: 'PhoneIphone',
			sendButtonCode: 'Отправьте мне SMS с кодом',
			sendButtonLogin: 'Войти',
			buttonRegister: 'Зарегистрировать',
		}

	},
	code: false,
	codeError: null,
	codeMessage: null,
	customerPhone: null,
	customerEmail: null,
	loading: false,
	error: null,
	errorPassLogin: null,
	errorPhoneLogin: null,
	errorRegister: null,
	errorReset: null,
	logged: false,
	infoCheck: true,
	errorWarning: false,
	customerId: null

}

export default function authReducer(state = initalState, action){

	switch(action.type){
		case FETCH_CHECK_LOGGED_START:
			return{
				...state, loading: true
			}
		case FETCH_CHECK_LOGGED_SUCCESS:

			initalState = {
				...state, logged: action.logged, infoCheck: action.infoCheck
			}
			return{
				...state, loading: false, logged: action.logged, infoCheck: action.infoCheck
			}
		case FETCH_CHECK_LOGGED_ERROR:
			return{
				...state, loading: false, error: action.error
			}
		case SEND_LOGIN_INFO_START:
			return{
				...state, loading: true
			}
		case SEND_LOGIN_INFO_SUCCESS:
			const formControls = {...state.formControls }
			formControls.register.controls.email.value = action.customerEmail?action.customerEmail:''
			formControls.register.controls.telephone.value = action.customerPhone?action.customerPhone:''
			formControls.loginPhone.controls.code.value = ''
			initalState = {
				...state,
				formControls,
				logged: action.logged,
				infoCheck: action.infoCheck,
				error: action.error,
				errorPassLogin: action.errorPassLogin,
				errorPhoneLogin: action.errorPhoneLogin,
				errorRegister: action.errorRegister,
				errorReset: action.errorReset,
				customerId: action.customerId,
				customerPhone: action.customerPhone
			}
			return{
				...state,
				loading: false,
				logged: action.logged,
				infoCheck: action.infoCheck,
				error: action.error,
				errorPassLogin: action.errorPassLogin,
				errorPhoneLogin: action.errorPhoneLogin,
				errorRegister: action.errorRegister,
				errorReset: action.errorReset,
				customerId: action.customerId,
				customerEmail: action.customerEmail,
				customerPhone: action.customerPhone,
				code: action.code,
				codeError: action.codeError,
				codeMessage: action.codeMessage
			}
		case SEND_LOGIN_INFO_ERROR:
			return{
				...state, loading: false, error: action.error
			}
		case SEND_RESET_START:
			return{
				...state, loading: true
			}
		case SEND_RESET_SUCCESS:
			console.log(action.errorReset)
			const formControlsReset = {...state.formControls }
			formControlsReset.register.controls.email.value = action.customerEmail?action.customerEmail:''
			formControlsReset.register.controls.telephone.value = action.customerPhone?action.customerPhone:''
			formControlsReset.loginPhone.controls.code.value = ''
			initalState = {
				...state,
				formControls:formControlsReset,
				logged: action.logged,
				infoCheck: action.infoCheck,
				error: action.error,
				errorPassLogin: action.errorPassLogin,
				errorPhoneLogin: action.errorPhoneLogin,
				errorRegister: action.errorRegister,
				errorReset: action.errorReset,
				customerId: action.customerId,
				customerPhone: action.customerPhone
			}
			return{
				...state,
				loading: false,
				logged: action.logged,
				infoCheck: action.infoCheck,
				error: action.error,
				errorPassLogin: action.errorPassLogin,
				errorPhoneLogin: action.errorPhoneLogin,
				errorRegister: action.errorRegister,
				errorReset: action.errorReset,
				customerId: action.customerId,
				customerEmail: action.customerEmail,
				customerPhone: action.customerPhone,
				code: action.code,
				codeError: action.codeError,
				codeMessage: action.codeMessage
			}
		case SEND_RESET_ERROR:
			return{
				...state, loading: false, error: action.error
			}

		default:
			return state
	}

}