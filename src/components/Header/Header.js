/*
    Created on : 14.07.2021, 16:18:59
    Author     : Andy Kar
*/
import React, {useState} from 'react'
import classNames from 'classnames'
import {withRouter} from 'react-router-dom'
import ReactHtmlParser from "react-html-parser";
import Theme from "../ui/theme/Theme"

function Header(props) {

    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const toggleMobileMenu = () => setMobileMenuOpen(prevState => !prevState)

    return(
        <header className="header">
            <div className="mobile-header-wrap">
                <div className="header-top-panel-wrap main-theme-bg">
                    <div className="container">
                        <div className="mobile-header-top-panel">
                            <div
                                className="mobile-logo-wrap"
                                onClick={() => { props.history.push('/account') }}
                            >

                                <svg version="1.0" viewBox="0 0 917.000000 149.000000" preserveAspectRatio="xMidYMid meet" style={{width: "250px"}}>
                                    <g transform="translate(0.000000,149.000000) scale(0.100000,-0.100000)"
                                       fill="#b7b7b8" stroke="none">
                                        <path d="M10 745 l0 -735 4570 0 4570 0 0 735 0 735 -4570 0 -4570 0 0 -735z
                                            m5160 0 l0 -725 -2575 0 -2575 0 0 725 0 725 2575 0 2575 0 0 -725z m570 265
                                            c0 -104 3 -190 6 -190 3 0 106 86 229 190 l224 190 165 -2 165 -3 -219 -179
                                            c-192 -157 -218 -182 -207 -195 23 -26 430 -525 440 -538 7 -10 -23 -13 -145
                                            -13 l-154 0 -160 210 c-87 115 -162 210 -166 210 -4 0 -45 -32 -92 -71 l-86
                                            -70 0 -140 0 -139 -120 0 -120 0 0 465 0 465 120 0 120 0 0 -190z m1616 22
                                            c45 -92 147 -301 227 -465 l146 -297 -128 0 -128 0 -49 105 -49 105 -226 0
                                            -226 0 -48 -105 -48 -105 -129 0 -128 0 18 37 c10 21 110 230 222 466 l204
                                            427 130 0 131 0 81 -168z m1289 143 c135 -42 215 -183 174 -306 -29 -85 -96
                                            -139 -208 -168 l-74 -18 55 -35 c61 -40 117 -100 243 -265 l85 -113 -142 0
                                            -143 1 -80 106 c-44 59 -114 142 -155 184 -83 86 -111 99 -217 99 l-63 0 0
                                            -195 0 -195 -120 0 -120 0 0 466 0 466 353 -5 c307 -3 360 -6 412 -22z"/>
                                        <path d="M670 804 c-162 -224 -312 -431 -333 -460 l-39 -54 64 0 63 0 109 150
                                            108 150 247 -2 246 -3 60 -147 60 -148 58 0 c31 0 57 1 57 3 0 2 -85 208 -188
                                            458 -115 278 -194 455 -202 457 -10 1 -126 -150 -310 -404z m355 48 c37 -90
                                            65 -165 62 -168 -2 -2 -88 -3 -190 -2 l-185 3 121 167 c67 92 122 166 123 165
                                            1 -1 32 -75 69 -165z"/>
                                        <path d="M1716 1183 c-3 -16 -37 -210 -76 -433 -39 -223 -73 -417 -76 -433 -6
                                            -27 -5 -27 50 -27 50 0 56 2 61 23 2 12 30 168 60 347 31 179 57 329 58 334 2
                                            4 146 -152 322 -348 176 -196 325 -356 332 -356 14 0 9 -26 93 460 39 223 73
                                            417 76 433 6 27 5 27 -50 27 -50 0 -56 -2 -61 -22 -2 -13 -30 -169 -60 -348
                                            -31 -179 -57 -329 -58 -334 -2 -5 -147 152 -322 348 -176 196 -325 356 -331
                                            356 -7 0 -15 -12 -18 -27z"/>
                                        <path d="M2916 1183 c-3 -16 -37 -210 -76 -433 -39 -223 -73 -418 -76 -434
                                            l-6 -28 288 4 c254 5 299 8 367 26 102 28 167 64 231 128 227 229 182 562 -96
                                            698 -97 48 -219 66 -450 66 l-176 0 -6 -27z m410 -74 c158 -22 264 -86 319
                                            -194 26 -52 30 -69 30 -144 0 -72 -4 -95 -27 -143 -51 -110 -148 -189 -274
                                            -224 -66 -18 -484 -34 -484 -18 0 5 28 172 62 372 l63 362 117 0 c64 0 151 -5
                                            194 -11z"/>
                                        <path d="M4002 1188 c33 -51 278 -465 283 -479 5 -12 -35 -263 -61 -392 -6
                                            -27 -5 -27 50 -27 50 0 56 2 61 23 2 12 18 101 35 197 l30 175 262 262 263
                                            263 -75 0 -75 0 -205 -205 c-113 -113 -207 -205 -210 -205 -3 0 -59 92 -125
                                            205 l-120 204 -64 0 -63 1 14 -22z"/>
                                        <path d="M7078 823 c-37 -81 -70 -156 -73 -165 -7 -17 4 -18 144 -18 l150 0
                                            -53 113 c-29 61 -63 136 -77 165 l-24 54 -67 -149z"/>
                                        <path d="M8120 930 l0 -112 194 3 c179 4 197 6 223 25 45 33 59 66 48 110 -7
                                            28 -20 44 -45 59 -31 18 -55 20 -227 23 l-193 4 0 -112z"/>
                                    </g>
                                </svg>
                            </div>
                            {props.header.data_menu || true
                                ? <div
                                    className={classNames('mobile-button site-mobile-button', {open: isMobileMenuOpen })}
                                    onClick={() => toggleMobileMenu()}
                                >
                                    <span className="bars">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </span>
                                </div>
                                : null
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className="desctop-header-wrap">
                <div className="header-top-panel-wrap main-theme-bg">
                    <div className="container">
                        <div className="header-top-panel">
                            <div className="site-logo-wrap"
                                 onClick={() => { props.history.push('/account') }}
                            >
                                {props.header.svg_logo
                                    ? ReactHtmlParser(props.header.svg_logo)
                                    : <svg version="1.0" viewBox="0 0 917.000000 149.000000" preserveAspectRatio="xMidYMid meet" style={{width: "250px"}}>
                                        <g transform="translate(0.000000,149.000000) scale(0.100000,-0.100000)"
                                           fill="#b7b7b8" stroke="none">
                                            <path d="M10 745 l0 -735 4570 0 4570 0 0 735 0 735 -4570 0 -4570 0 0 -735z
                                                m5160 0 l0 -725 -2575 0 -2575 0 0 725 0 725 2575 0 2575 0 0 -725z m570 265
                                                c0 -104 3 -190 6 -190 3 0 106 86 229 190 l224 190 165 -2 165 -3 -219 -179
                                                c-192 -157 -218 -182 -207 -195 23 -26 430 -525 440 -538 7 -10 -23 -13 -145
                                                -13 l-154 0 -160 210 c-87 115 -162 210 -166 210 -4 0 -45 -32 -92 -71 l-86
                                                -70 0 -140 0 -139 -120 0 -120 0 0 465 0 465 120 0 120 0 0 -190z m1616 22
                                                c45 -92 147 -301 227 -465 l146 -297 -128 0 -128 0 -49 105 -49 105 -226 0
                                                -226 0 -48 -105 -48 -105 -129 0 -128 0 18 37 c10 21 110 230 222 466 l204
                                                427 130 0 131 0 81 -168z m1289 143 c135 -42 215 -183 174 -306 -29 -85 -96
                                                -139 -208 -168 l-74 -18 55 -35 c61 -40 117 -100 243 -265 l85 -113 -142 0
                                                -143 1 -80 106 c-44 59 -114 142 -155 184 -83 86 -111 99 -217 99 l-63 0 0
                                                -195 0 -195 -120 0 -120 0 0 466 0 466 353 -5 c307 -3 360 -6 412 -22z"/>
                                            <path d="M670 804 c-162 -224 -312 -431 -333 -460 l-39 -54 64 0 63 0 109 150
                                                108 150 247 -2 246 -3 60 -147 60 -148 58 0 c31 0 57 1 57 3 0 2 -85 208 -188
                                                458 -115 278 -194 455 -202 457 -10 1 -126 -150 -310 -404z m355 48 c37 -90
                                                65 -165 62 -168 -2 -2 -88 -3 -190 -2 l-185 3 121 167 c67 92 122 166 123 165
                                                1 -1 32 -75 69 -165z"/>
                                            <path d="M1716 1183 c-3 -16 -37 -210 -76 -433 -39 -223 -73 -417 -76 -433 -6
                                                -27 -5 -27 50 -27 50 0 56 2 61 23 2 12 30 168 60 347 31 179 57 329 58 334 2
                                                4 146 -152 322 -348 176 -196 325 -356 332 -356 14 0 9 -26 93 460 39 223 73
                                                417 76 433 6 27 5 27 -50 27 -50 0 -56 -2 -61 -22 -2 -13 -30 -169 -60 -348
                                                -31 -179 -57 -329 -58 -334 -2 -5 -147 152 -322 348 -176 196 -325 356 -331
                                                356 -7 0 -15 -12 -18 -27z"/>
                                            <path d="M2916 1183 c-3 -16 -37 -210 -76 -433 -39 -223 -73 -418 -76 -434
                                                l-6 -28 288 4 c254 5 299 8 367 26 102 28 167 64 231 128 227 229 182 562 -96
                                                698 -97 48 -219 66 -450 66 l-176 0 -6 -27z m410 -74 c158 -22 264 -86 319
                                                -194 26 -52 30 -69 30 -144 0 -72 -4 -95 -27 -143 -51 -110 -148 -189 -274
                                                -224 -66 -18 -484 -34 -484 -18 0 5 28 172 62 372 l63 362 117 0 c64 0 151 -5
                                                194 -11z"/>
                                            <path d="M4002 1188 c33 -51 278 -465 283 -479 5 -12 -35 -263 -61 -392 -6
                                                -27 -5 -27 50 -27 50 0 56 2 61 23 2 12 18 101 35 197 l30 175 262 262 263
                                                263 -75 0 -75 0 -205 -205 c-113 -113 -207 -205 -210 -205 -3 0 -59 92 -125
                                                205 l-120 204 -64 0 -63 1 14 -22z"/>
                                            <path d="M7078 823 c-37 -81 -70 -156 -73 -165 -7 -17 4 -18 144 -18 l150 0
                                                -53 113 c-29 61 -63 136 -77 165 l-24 54 -67 -149z"/>
                                            <path d="M8120 930 l0 -112 194 3 c179 4 197 6 223 25 45 33 59 66 48 110 -7
                                                28 -20 44 -45 59 -31 18 -55 20 -227 23 l-193 4 0 -112z"/>
                                        </g>
                                    </svg>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={classNames('mobile-menu-wrap-wrap', {visible: isMobileMenuOpen })}>
                <div className="wrap mobile-menu-wrap main-theme-bg">
                    <div className="mobile-site-menu">
                        <div className="header-language header-locale-block">
                            {props.header.theme
                                ? <div className="header-control">
                                    <Theme/>
                                </div>
                                : null
                            }
                        </div>

                    </div>
                </div>
            </div>
        </header>
    )

}
export default withRouter(Header)
