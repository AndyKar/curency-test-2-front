/* 
    Created on : 03.09.2019, 06:18:59
    Author     : Andy Kar
*/

import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import ReactHtmlParser from 'react-html-parser'
import { Container, Row, Col } from 'reactstrap';
import {Button, NavLink, ButtonGroup} from "reactstrap";
import './Currencies.scss'
import {RiLoginBoxLine, RiUserAddLine, RiLockPasswordLine, RiLogoutBoxRLine} from 'react-icons/ri'
import {FaRegUserCircle} from 'react-icons/fa'
import {RiMapPinUserLine} from 'react-icons/ri'
import classNames from "classnames";
import Contact from "../Contact/Contact"
import CustomDatePicker from "../CustomDatePicker/CustomDatePicker";
import {BsGraphUp} from 'react-icons/bs'

function Currencies(props){

	const [currenciesType, setcurrenciesType] = React.useState('corp');

	const text = (prop) => {
		if(props.currencies && props.currencies.language){
			if(props.currencies.language[prop]) {
				return ReactHtmlParser(props.currencies.language[prop])
			} else if(props.languageMain[prop]){
				return ReactHtmlParser(props.languageMain[prop])
			} else {
				return null
			}
		}
	}

	const renderCurrenciesBlock = () => {
		return (
			<div className="table">
				<div className="currencies-table">
					<div className="currencies-table-header">
						<div className="currencies-table-td td-num">#</div>
						<div className="currencies-table-td td-valuteID">valuteID</div>
						<div className="currencies-table-td td-numCode">numCode</div>
						<div className="currencies-table-td td-charCode">charCode</div>
						<div className="currencies-table-td td-name">Наименование</div>
						<div className="currencies-table-td td-nominal">Номинал</div>
						<div className="currencies-table-td td-value">Курс</div>
					</div>
					{renderMyCurrencies()}
				</div>
			</div>
		)
	}

	const renderMyCurrencies = () => {
		return props.currencies.currencies.map((result, index) => {
			return (
				<div className="currencies-table-tr" key={'currencies-tr' + index}>
					<div className="currencies-table-td td-num">{index + 1}</div>
					<div className="currencies-table-td td-valuteID">{result.valuteID}</div>
					<div className="currencies-table-td td-numCode">{result.numCode}</div>
					<div className="currencies-table-td td-charCode">{result.charCode}</div>
					<div className="currencies-table-td td-name">{result.name}</div>
					<div className="currencies-table-td td-nominal">{result.nominal}</div>
					<div className="currencies-table-td td-value">{result.value}</div>
				</div>
			)
		})

	}

	const convertDate = (date) => {
		const dateArray =  date.split('/')
		return dateArray[2] + '/' + dateArray[1] + '/' + dateArray[0]
	}

	return (
		<React.Fragment>
			<div className="currencies-block main-theme-bg">
				{props.currencies && props.currencies.currencies.length
					? <React.Fragment>
						<div className="profile-title-wrap">
							<h3 className={'profile-title'} style={{display: 'flex', justifyContent: 'space-between'}}>
								<span>
									<BsGraphUp style={{marginBottom: '6px', marginRight: '7px'}}/>
									{text('heading_title')}
								</span>

								{ props.currencies
									? <div className="data-picker-wrap">
										{console.log('convertDate', convertDate(props.currencies.date))}
										<CustomDatePicker
											dateStart={convertDate(props.currencies.date)}
											available={props.currencies.dates}
											minDate={convertDate(props.currencies.minDate)}
											maxDate={convertDate(props.currencies.maxDate)}
											fetchCurrencies={props.fetchCurrencies}
										/>
									</div>
									: null
								}

							</h3>
						</div>
						{renderCurrenciesBlock()}
					</React.Fragment>
					: <div className="message-wrap">
						<p>{text('text_empty')}</p>
					</div>
				}
			</div>
		</React.Fragment>
	)
}

export default withRouter(Currencies)
