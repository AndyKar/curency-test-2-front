/* 
    Created on : 03.09.2019, 06:18:59
    Author     : Andy Kar
*/

import React from 'react'
import ReactHtmlParser from 'react-html-parser'
import {Redirect} from "react-router-dom";
import { Container, Row, Col } from 'reactstrap';
import {Button, NavLink, ButtonGroup} from "reactstrap";
import '../Logout/Logout.scss'
function Logout(props){
	if(props.info) {
		return (
			<div className="maintenance-content main-theme-bg">
				{ props.logged
					? props.logout()
					: null
				}
				<div className="maintenance-image">
					<svg className="theme-svg" version="1.0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 422.000000 165.000000" preserveAspectRatio="xMidYMid meet">
						<g transform="translate(0.000000,165.000000) scale(0.100000,-0.100000)" stroke="none">
							<path
								d="M80 825 l0 -775 2030 0 2030 0 0 775 0 775 -2030 0 -2030 0 0 -775z m1120 0 l0 -655 -325 0 -325 0 0 655 0 655 325 0 325 0 0 -655z m1628 555 c68 -42 91 -124 52 -188 -57 -94 -183 -94 -240 0 -71 117 71 259 188 188z m480 -297 c86 -139 86 -133 20 -172 l-36 -22 -59 106 -58 105 -92 0 c-51 0 -93 -3 -93 -7 0 -4 47 -86 105 -183 l105 -177 0 -135 0 -136 165 -7 165 -7 0 -59 0 -59 -222 2 -223 3 -3 143 c-1 78 -4 142 -7 142 -2 0 -53 -32 -112 -70 l-108 -71 -7 -52 c-3 -28 -6 -105 -7 -171 -1 -118 -1 -118 -23 -112 -13 3 -35 6 -51 6 l-27 0 2 202 3 202 105 63 c58 35 106 67 108 71 1 5 -23 53 -55 108 l-58 99 -3 -67 -3 -68 -180 0 -180 0 3 53 3 52 125 0 125 0 3 113 3 112 27 1 c45 1 87 22 120 60 18 20 32 42 32 48 0 8 47 11 154 11 l155 0 79 -127z m-1546 -76 c-56 -56 -102 -106 -102 -110 0 -4 144 -7 320 -7 l321 0 -3 -72 -3 -73 -320 4 -320 3 110 -111 110 -111 -105 0 -105 0 -145 145 -145 145 145 145 145 145 100 0 100 0 -103 -103z"/>
						</g>
					</svg>
				</div>
				<div className="maintenance-message">
					<div className="message-wrap">
						{ ReactHtmlParser (props.info.language.text_message) }
					</div>
					<div className={'buttons'}>
						<div className={'buttons'}>
							<NavLink href={'/'}>
								<Button className="theme-border-button" type="button" color="none">
									<span>{props.info.language.button_shopping}</span>
								</Button>
							</NavLink>
						</div>
					</div>
				</div>

			</div>
		)
	} else {
		return null
	}
}

export default Logout
