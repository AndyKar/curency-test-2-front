/* 
    Created on : 03.09.2019, 06:18:59
    Author     : Andy Kar
*/

import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import ReactHtmlParser from 'react-html-parser'
import { Container, Row, Col } from 'reactstrap';
import {Button, NavLink, ButtonGroup} from "reactstrap";
import './AccountCurrencies.scss'
import {RiLoginBoxLine, RiUserAddLine, RiLockPasswordLine, RiLogoutBoxRLine} from 'react-icons/ri'
import {FaRegUserCircle} from 'react-icons/fa'
import {BsGraphUp} from 'react-icons/bs'
function accountCurrencies(props){

	const text = (prop) => {
		if(props.currencies && props.currencies.language){
			return ReactHtmlParser(props.currencies.language[prop])
		}
	}

	const currencyRate = (charCode) => {
		if (props.currencies && props.currencies.currencies) {
			return props.currencies.currencies.map((result, index) => {
				if(result.charCode === charCode){
					console.log(charCode, result.nominal)
					console.log(charCode, result.charCode)
					console.log(charCode, result.value)

					return (
						<div className="contacts-data">
							<span className={'data-name'}>
								{result.nominal} {result.charCode}
							</span>
							<span className={'data-value'}>{result.value}</span>
						</div>
					)
				}
			})
		}
	}

	return (
		<div
			className="account-contacts main-theme-bg"
			onClick={() => { props.history.push('/currencies') }}
		>
			{console.log('accountCurrencies', props)}

			{props.currencies
				? <React.Fragment>
					<div className="profile-title-wrap">
						<h3 className={'profile-title'} style={{display: 'flex', justifyContent: 'space-between'}}>
							<span>
								<BsGraphUp style={{marginBottom: '6px', marginRight: '7px'}}/>
								{text('heading_title')}
							</span>
							<span style={{fontSize: '14px'}}>{props.currencies.date}</span>
						</h3>

					</div>
					<div className="contacts-data-wrap">
						{currencyRate('USD')}
						{currencyRate('EUR')}
						<div className="contacts-data">
							<span className={'data-name'} style={{marginTop: '13px', display: 'block'}}>{text('text_more')}</span>
						</div>
					</div>
				</React.Fragment>
				: null
			}
		</div>
	)
}

export default withRouter(accountCurrencies)
