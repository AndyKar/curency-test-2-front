/* 
    Created on : 03.09.2019, 06:18:59
    Author     : Andy Kar
*/

import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import ReactHtmlParser from 'react-html-parser'
import { Container, Row, Col } from 'reactstrap';
import {Button, NavLink, ButtonGroup} from "reactstrap";
import './AccountProfile.scss'
import {RiLoginBoxLine, RiUserAddLine, RiLockPasswordLine, RiLogoutBoxRLine} from 'react-icons/ri'
import {FaRegUserCircle} from 'react-icons/fa'
function AccountProfile(props){

	const text = (prop) => {
		if(props.accountEdit && props.accountEdit.language){
			return ReactHtmlParser(props.accountEdit.language[prop])
		}
	}

	return (
		<div
			className="account-profile main-theme-bg"
			onClick={() => { props.history.push('/profile') }}
		>
			{console.log(props)}
			{props.accountEdit
				? <React.Fragment>
					<div className="profile-title-wrap">
						<h3 className={'profile-title'}>
							<FaRegUserCircle style={{marginBottom: '6px', marginRight: '7px'}}/>
							{props.accountEdit.heading_title}
						</h3>
					</div>
					<div className="profile-data-wrap">
						<div className="profile-data">
							<span className={'data-name'}>{text('entry_firstname')}</span>
							<span className={'data-value'}>{props.accountEdit.firstname}</span>
						</div>
						<div className="profile-data">
							<span className={'data-name'}>{text('entry_lastname')}</span>
							<span className={'data-value'}>{props.accountEdit.lastname}</span>
						</div>
						<div className="profile-data">
							<span className={'data-name'}>{text('entry_email')}</span>
							<span className={'data-value'}>{props.accountEdit.email}</span>
						</div>
						<div className="profile-data">
							<span className={'data-name'}>{text('entry_telephone')}</span>
							<span className={'data-value'}>{props.accountEdit.telephone}</span>
						</div>
					</div>
				</React.Fragment>
				: null
			}
		</div>
	)
}

export default withRouter(AccountProfile)
