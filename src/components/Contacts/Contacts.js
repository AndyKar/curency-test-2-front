/* 
    Created on : 03.09.2019, 06:18:59
    Author     : Andy Kar
*/

import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import ReactHtmlParser from 'react-html-parser'
import { Container, Row, Col } from 'reactstrap';
import {Button, NavLink, ButtonGroup} from "reactstrap";
import './Contacts.scss'
import {RiLoginBoxLine, RiUserAddLine, RiLockPasswordLine, RiLogoutBoxRLine} from 'react-icons/ri'
import {FaRegUserCircle} from 'react-icons/fa'
import {RiMapPinUserLine} from 'react-icons/ri'
import classNames from "classnames";
import Contact from "../Contact/Contact"

function Contacts(props){

	const [contactsType, setContactsType] = React.useState('corp');

	const text = (prop) => {
		if(props.contacts && props.contacts.language){
			if(props.contacts.language[prop]) {
				return ReactHtmlParser(props.contacts.language[prop])
			} else if(props.languageMain[prop]){
				return ReactHtmlParser(props.languageMain[prop])
			} else {
				return null
			}
		}
	}

	const renderContacts = () => {
		return props.contacts.contacts.map((result, index) => {
			return (
				<div name={"contact-id-" + result.contact_id} className="contacts-table-tr" key={'contacts-tr' + index}>
					<div className="contacts-table-td td-lastname">{result.lastname}</div>
					<div className="contacts-table-td td-firstname">{result.firstname}</div>
					<div className="contacts-table-td td-email">{result.email}</div>
					<div className="contacts-table-td td-telephone">{result.telephone}</div>
				</div>
			)
		})
	}

	const renderContactsBlock = () => {
		return (
			<div className="table">
				<div className="table">
					<div className="contacts-table">
						<div className="contacts-table-header">
							<div className="contacts-table-td td-lastname">Фамилия</div>
							<div className="contacts-table-td td-firstname">Имя</div>
							<div className="contacts-table-td td-email">Email</div>
							<div className="contacts-table-td td-telephone">Телефон</div>
						</div>
						{renderContacts()}
					</div>
				</div>
			</div>
		)
	}

	const renderMyContacts = () => {
		return props.contacts.customer_contacts.map((result, index) => {
			return (
				<form name={"contact-id-" + result.contact_id} className="contacts-table-tr" key={'my-contacts-tr' + index}>
					<div className="my-contacts-table-td td-lastname">{result.lastname}</div>
					<div className="my-contacts-table-td td-firstname">{result.firstname}</div>
					<div className="my-contacts-table-td td-email">{result.email}</div>
					<div className="my-contacts-table-td td-telephone">{result.telephone}</div>
					<div className="my-contacts-table-td td-actions">
						<Button
							className="theme-border-button"
							style={{margin: "0 0 0 auto"}}
							type="button"
							color="none"
							onClick={props.deleteContact.bind(this, result.contact_id)}
						>
							<span>Удалить</span>
						</Button>
					</div>
				</form>
			)
		})
	}

	const renderMyContactsBlock = () => {
		return (
			<div className="table">
				<div className="contacts-table">
					<div className="contacts-table-header">
						<div className="my-contacts-table-td td-lastname">Фамилия</div>
						<div className="my-contacts-table-td td-firstname">Имя</div>
						<div className="my-contacts-table-td td-email">Email</div>
						<div className="my-contacts-table-td td-telephone">Телефон</div>
						<div className="my-contacts-table-td td-actions">Действия</div>
					</div>
					{renderMyContacts()}
				</div>
				<Contact
					info={props.contacts.contact}
					sendNewContactData={props.sendNewContactData}
				/>
			</div>
		)
	}

	return (
		<React.Fragment>
			<div className="contacts-block-menu main-theme-bg">
				<ul className="contacts-menu">
					<li className={classNames('nav-item', {active: contactsType === 'corp'})}>
						<span
							onClick={() => setContactsType('corp')}
							className={'nav-link'}
						><RiMapPinUserLine /> {text('text_contacts')}</span>
					</li>
					<li className={classNames('nav-item', {active: contactsType === 'my'})}>
						<span
							onClick={() => setContactsType('my')}
							className={'nav-link'}
						><RiMapPinUserLine /> {text('text_customer_contacts')}</span>
					</li>
				</ul>
			</div>
			{contactsType === 'corp'
				? <div
					className="contacts-block main-theme-bg"
					// onClick={() => { props.history.push('/addresses') }}
				>
					{console.log(props)}
					{props.contacts && props.contacts.contacts
						? <React.Fragment>
							<div className="profile-title-wrap">
								<h3 className={'profile-title'}>
									<RiMapPinUserLine style={{marginBottom: '6px', marginRight: '7px'}}/>
									{text('text_contacts')}
								</h3>
							</div>
							{props.contacts.contacts
								? renderContactsBlock()
								: <p>{text('text_empty')}</p>
							}
						</React.Fragment>
						: null
					}
				</div>
				: <div
					className="contacts-block main-theme-bg"
				>
					{props.contacts && props.contacts.customer_contacts
						? <React.Fragment>
							<div className="profile-title-wrap">
								<h3 className={'profile-title'}>
									<RiMapPinUserLine style={{marginBottom: '6px', marginRight: '7px'}}/>
									{text('text_customer_contacts')}
								</h3>
							</div>
							{props.contacts.customer_contacts
								? renderMyContactsBlock()
								: <p>{text('text_empty')}</p>
							}

						</React.Fragment>
						: null
					}
				</div>
			}
		</React.Fragment>
	)
}

export default withRouter(Contacts)
