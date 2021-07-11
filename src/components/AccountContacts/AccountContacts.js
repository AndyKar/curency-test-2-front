/* 
    Created on : 03.09.2019, 06:18:59
    Author     : Andy Kar
*/

import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import ReactHtmlParser from 'react-html-parser'
import { Container, Row, Col } from 'reactstrap';
import {Button, NavLink, ButtonGroup} from "reactstrap";
import './AccountContacts.scss'
import {RiLoginBoxLine, RiUserAddLine, RiLockPasswordLine, RiLogoutBoxRLine} from 'react-icons/ri'
import {FaRegUserCircle} from 'react-icons/fa'
import {RiMapPinUserLine} from 'react-icons/ri'
function accountContacts(props){

	const text = (prop) => {
		if(props.contacts && props.contacts.language){
			return ReactHtmlParser(props.contacts.language[prop])
		}
	}

	return (
		<div
			className="account-contacts main-theme-bg"
			onClick={() => { props.history.push('/contacts') }}
		>
			{console.log('accountContacts', props)}
			{props.contacts
				? <React.Fragment>
					<div className="profile-title-wrap">
						<h3 className={'profile-title'}>
							<RiMapPinUserLine style={{marginBottom: '6px', marginRight: '7px'}}/>
							{text('heading_title')}
						</h3>
					</div>
					<div className="contacts-data-wrap">
						<div className="contacts-data">
							<span className={'data-name'}>{text('text_contacts')}</span>
							<span className={'data-value'}>{props.contacts.contacts.length}</span>
						</div>
						<div className="contacts-data">
							<span className={'data-name'}>{text('text_favorite')}</span>
							<span className={'data-value'}>{props.contacts.favorite_contacts.length}</span>
						</div>
						<div className="contacts-data">
							<span className={'data-name'}>{text('text_customer_contacts')}</span>
							<span className={'data-value'}>{props.contacts.customer_contacts.length}</span>
						</div>
					</div>
				</React.Fragment>
				: null
			}
		</div>
	)
}

export default withRouter(accountContacts)
