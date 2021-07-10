/* 
    Created on : 03.09.2019, 06:18:59
    Author     : Andy Kar
*/

import React, {Component} from 'react'
import { Container, Row, Col } from 'reactstrap';
import {Button, NavLink, ButtonGroup} from "reactstrap";
import '../NotFound/NotFound.scss'
function NotFound(props){

	const text = (prop) => {
		if(props.language){
			return props.language[prop]
		}
	}

	return (
		<div className="maintenance-content main-theme-bg">
			<div className="maintenance-image">
				<svg className="theme-svg" version="1.0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 422.000000 165.000000" preserveAspectRatio="xMidYMid meet">
					<g transform="translate(0.000000,165.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
						<path d="M1968 1500 c-289 -53 -471 -218 -539 -489 -18 -73 -21 -105 -17 -225 4 -119 9 -153 31 -219 71 -206 231 -354 447 -413 91 -25 329 -25 420 0 113 30 208 84 291 164 l77 72 343 -2 344 -3 3 -112 3 -113 247 0 247 0 0 112 0 113 103 3 102 3 0 164 0 164 -102 3 -103 3 -3 103 -3 102 -239 0 -240 0 0 -105 0 -105 -69 0 c-76 0 -131 8 -131 20 0 4 40 59 88 121 285 369 459 596 466 607 6 9 -48 12 -253 12 l-260 0 -326 -406 -325 -406 0 -144 0 -144 -40 0 -40 0 0 145 0 146 141 175 141 176 -17 51 c-28 88 -95 195 -162 257 -69 65 -190 130 -288 155 -70 19 -270 28 -337 15z m202 -361 c72 -41 110 -150 110 -319 0 -221 -63 -340 -179 -340 -118 0 -181 119 -181 340 0 109 13 180 45 245 42 87 127 118 205 74z"/>
						<path d="M498 1071 l-328 -408 0 -139 0 -139 400 3 400 2 0 -115 0 -115 250 0 250 0 0 104 c0 87 -3 107 -19 128 -29 36 -77 136 -96 198 -11 36 -19 105 -22 198 l-6 142 -168 0 -168 0 -3 -102 -3 -103 -97 0 c-53 0 -100 3 -103 7 -4 4 46 76 111 160 65 84 172 223 238 308 65 85 141 183 168 218 l50 62 -264 0 -263 0 -327 -409z"/>
					</g>
				</svg>
			</div>
			<div className="maintenance-message">
				<div className="message-wrap">
					<p>{text('text_empty')}</p>
				</div>
				<div className={'buttons'}>
					<NavLink href={'/'}>
						<Button className="theme-border-button" type="button" color="none">
							<span>{text('button_shopping')}</span>
						</Button>
					</NavLink>
				</div>
			</div>
		</div>
	)
}

export default NotFound
