/*
    Created on : 14.03.2021, 06:18:59
    Author     : Andy Kar
*/
import React, {useState} from 'react'
import classNames from 'classnames'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import logom from "../../image/molekula_red.png"
//import {fetchMainMenuCounts, getMainMenuCounts} from '../../store/actions/mainMenu'
import { Container, Nav, NavItem, NavLink} from "reactstrap";
//import {NavLink} from 'react-router-dom'
import ReactHtmlParser from "react-html-parser";
import Menu from "../ui/nav/Menu"
import Theme from "../ui/theme/Theme"
import {
    Button,
    Collapse,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    CardText,
    FormGroup,
    Form,
    Input,
    Row,
    Col,
} from "reactstrap";
import CategoryMenu from "../ui/nav/CategoryMenu";
//import {Route} from "react-router-dom";


function Header(props) {
    const [isOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen(prevState => !prevState)

    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const toggleMobileMenu = () => setMobileMenuOpen(prevState => !prevState)



    return(
        <header className="header">
            <div className="mobile-header-wrap">
                <div className="header-top-panel-wrap main-theme-bg">
                    <div className="container">
                        <div className="mobile-header-top-panel">
                            <div className="mobile-logo-wrap">
                                <a href='/' className="header-logo" style={{ maxWidth: '290px'}}>
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
                                </a>
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
                            <div className="site-logo-wrap">
                                <a href='/' className="header-logo" style={{flex: '1', maxWidth: '290px'}}>
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
                                </a>
                            </div>
                            {props.header.data_menu
                                ? <div className="site-menu">
                                    <Menu
                                        categories = {props.header.data_menu.categories}
                                    />
                                </div>
                                : null
                            }
                            <div className="mobile-menu-subwrap">
                                <div className="mobile-site-menu-bg"></div>
                            </div>
                            <div className="header-locale-block">
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
                        <div className="header-actions actions">
                            <ul className="actions-list">
                                { props.header.wishlist
                                    ? <li className={classNames('actions-list-item theme-button', {activePath: props.pathname === '/wish' })}>
                                        <NavLink
                                            //to={Dashboard}
                                            className=""
                                            onClick={() => { props.history.push('/wish'); toggleMobileMenu() }}
                                        >
                                            <svg version="1.1" width="21" height="19" id="wishlist-icon" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"  viewBox="0 0 540 507.7" >
                                                <g>
                                                    <path style={{strokeWidth:0.75,strokeMiterlimit:10}} className="wishlist-icon-path" d="M433.6,67c-24.7-24.7-57.4-38.2-92.3-38.2s-67.7,13.6-92.4,38.3L236,80l-13.1-13.1c-24.7-24.7-57.6-38.4-92.5-38.4
                                                                    c-34.8,0-67.6,13.6-92.2,38.2C13.5,91.4-0.1,124.2,0,159.1c0,34.9,13.7,67.6,38.4,92.3l187.8,187.8c2.6,2.6,6.1,4,9.5,4
                                                                    s6.9-1.3,9.5-3.9l188.2-187.5c24.7-24.7,38.3-57.5,38.3-92.4C471.8,124.5,458.3,91.7,433.6,67z M414.4,232.7l-178.7,178L57.4,232.4
                                                                    C37.8,212.8,27,186.8,27,159.1s10.7-53.7,30.3-73.2c19.5-19.5,45.5-30.3,73.1-30.3c27.7,0,53.8,10.8,73.4,30.4l22.6,22.6
                                                                    c5.3,5.3,13.8,5.3,19.1,0l22.4-22.4c19.6-19.6,45.7-30.4,73.3-30.4c27.6,0,53.6,10.8,73.2,30.3c19.6,19.6,30.3,45.6,30.3,73.3
                                                                    C444.8,187.1,434,213.1,414.4,232.7z" />
                                                </g>
                                            </svg>
                                            {props.countWishProducts
                                                ? <span id="wish-total" className="no-empty">
                                                            <span className="actions-counter">
                                                                {props.countWishProducts}
                                                            </span>
                                                        </span>
                                                : null
                                            }
                                        </NavLink>
                                    </li>
                                    :null
                                }
                                { props.header.account
                                    ? <li className={classNames('actions-list-item theme-button', {activePath: props.pathname === '/account' })}>
                                        <NavLink
                                            //to={'/account'}
                                            className="nav-link"
                                            //activeClassName="active"
                                            onClick={() => { props.auth.logged?props.history.push('/account/dashboard'):props.history.push('/login'); toggleMobileMenu() }}
                                        >
                                            <svg width="17" height="19" viewBox="0 0 17 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M8.01122 10.2377C8.03089 10.2377 8.05056 10.2377 8.07417 10.2377C8.08204 10.2377 8.08991 10.2377 8.09778 10.2377C8.10958 10.2377 8.12532 10.2377 8.13712 10.2377C9.28995 10.2181 10.2224 9.8128 10.911 9.03769C12.4258 7.33009 12.174 4.40278 12.1464 4.12342C12.0481 2.0263 11.0566 1.02299 10.2382 0.554773C9.62832 0.204597 8.91617 0.0157382 8.12138 0H8.09384C8.08991 0 8.08204 0 8.0781 0H8.0545C7.61776 0 6.76003 0.0708221 5.9377 0.539035C5.11144 1.00725 4.1042 2.01056 4.00583 4.12342C3.97829 4.40278 3.72648 7.33009 5.24128 9.03769C5.9259 9.8128 6.85839 10.2181 8.01122 10.2377ZM5.05636 4.22179C5.05636 4.20998 5.0603 4.19818 5.0603 4.19031C5.19014 1.36923 7.19283 1.06627 8.05056 1.06627H8.0663C8.07417 1.06627 8.08597 1.06627 8.09778 1.06627C9.16011 1.08987 10.9661 1.52268 11.088 4.19031C11.088 4.20211 11.088 4.21392 11.092 4.22179C11.0959 4.24933 11.3713 6.92483 10.1201 8.3334C9.62439 8.89211 8.96338 9.16753 8.09384 9.1754C8.08597 9.1754 8.08204 9.1754 8.07417 9.1754C8.0663 9.1754 8.06237 9.1754 8.0545 9.1754C7.18889 9.16753 6.52395 8.89211 6.03213 8.3334C4.78488 6.9327 5.05243 4.24539 5.05636 4.22179Z" fill="#545454"/>
                                                <path d="M16.1593 15.093C16.1593 15.0891 16.1593 15.0851 16.1593 15.0812C16.1593 15.0497 16.1554 15.0182 16.1554 14.9828C16.1318 14.2038 16.0807 12.3821 14.373 11.7998C14.3612 11.7958 14.3455 11.7919 14.3337 11.788C12.5592 11.3355 11.0838 10.3125 11.068 10.3007C10.828 10.1315 10.4975 10.1905 10.3283 10.4305C10.1591 10.6705 10.2182 11.001 10.4582 11.1702C10.525 11.2175 12.091 12.3073 14.0504 12.811C14.9672 13.1375 15.0695 14.1172 15.097 15.0143C15.097 15.0497 15.097 15.0812 15.1009 15.1127C15.1049 15.4668 15.0813 16.0137 15.0183 16.3285C14.3809 16.6904 11.8825 17.9416 8.08169 17.9416C4.29664 17.9416 1.78245 16.6865 1.14112 16.3245C1.07816 16.0098 1.05062 15.4629 1.05849 15.1087C1.05849 15.0773 1.06243 15.0458 1.06243 15.0104C1.08997 14.1133 1.19227 13.1336 2.10902 12.807C4.06843 12.3034 5.63439 11.2096 5.70127 11.1663C5.94128 10.9971 6.0003 10.6666 5.83112 10.4266C5.66193 10.1866 5.33143 10.1276 5.09142 10.2968C5.07568 10.3086 3.60809 11.3316 1.82573 11.784C1.80999 11.788 1.79819 11.7919 1.78639 11.7958C0.0787856 12.3821 0.0276362 14.2038 0.00402885 14.9789C0.00402885 15.0143 0.00402885 15.0458 9.42902e-05 15.0773C9.42902e-05 15.0812 9.42902e-05 15.0851 9.42902e-05 15.0891C-0.00384027 15.2937 -0.00777485 16.3442 0.200757 16.8714C0.240103 16.9737 0.310925 17.0603 0.405354 17.1193C0.523391 17.198 3.35234 19 8.08562 19C12.8189 19 15.6478 17.1941 15.7659 17.1193C15.8564 17.0603 15.9311 16.9737 15.9705 16.8714C16.1672 16.3481 16.1633 15.2976 16.1593 15.093Z" fill="#545454"/>
                                            </svg>
                                        </NavLink>
                                    </li>
                                    :null
                                }


                                { props.header.cart
                                    ? <li className={classNames('actions-list-item theme-button', {activePath: props.pathname === '/cart' })}>
                                        <NavLink
                                            //to={'/cart'}
                                            className="nav-link"
                                            //activeClassName="active"
                                            onClick={() => { props.history.push('/cart'); toggleMobileMenu() }}
                                        >
                                            <svg width="21" height="19" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clipPath="url(#clip0)">
                                                    <path d="M7.9323 14.9429C6.81409 14.9429 5.90137 15.8557 5.90137 16.9739C5.90137 18.0921 6.81409 19.0048 7.9323 19.0048C9.05051 19.0048 9.95846 18.0921 9.96324 16.9739C9.96324 15.8509 9.05051 14.9429 7.9323 14.9429ZM9.0075 16.9691C9.0075 17.5616 8.52486 18.0443 7.9323 18.0443C7.33975 18.0443 6.8571 17.5616 6.8571 16.9691C6.8571 16.3765 7.33975 15.8939 7.9323 15.8939C8.52486 15.8987 9.0075 16.3765 9.0075 16.9691Z" fill="#545454"/>
                                                    <path d="M14.9186 14.9429C13.8004 14.9429 12.8877 15.8557 12.8877 16.9739C12.8877 18.0921 13.8004 19 14.9186 19.0048C15.4586 19.0048 15.9699 18.7945 16.3522 18.4122C16.7345 18.03 16.9448 17.5186 16.9448 16.9786C16.9448 16.4387 16.7345 15.9273 16.3522 15.545C15.9699 15.1532 15.4586 14.9429 14.9186 14.9429ZM14.9186 15.8987C15.5112 15.8987 15.9938 16.3813 15.9938 16.9739C15.9938 17.2606 15.8839 17.5282 15.6784 17.7337C15.4777 17.9344 15.2054 18.0491 14.9186 18.0491C14.3261 18.0491 13.8434 17.5664 13.8434 16.9739C13.8434 16.3813 14.3261 15.8987 14.9186 15.8987Z" fill="#545454"/>
                                                    <path d="M19.9796 3.09658C19.8888 2.97233 19.7455 2.89588 19.5926 2.89588H4.83602L4.66876 1.83501C4.50151 0.769366 3.60312 0 2.52792 0C2.52314 0 2.52314 0 2.51836 0H0.477867C0.21504 0 0 0.21504 0 0.477867C0 0.740694 0.21504 0.955734 0.477867 0.955734H2.51836H2.52314C3.12525 0.955734 3.63179 1.38581 3.72259 1.98315L5.33778 12.1856C5.50025 13.2513 6.40342 14.0206 7.47862 14.0206C7.4834 14.0206 7.4834 14.0206 7.48818 14.0206H17.4708C17.7337 14.0206 17.9487 13.8056 17.9487 13.5428C17.9487 13.2799 17.7337 13.0649 17.4708 13.0649H7.48818H7.4834C6.89085 13.0649 6.37475 12.6253 6.28395 12.0375L6.03546 10.4701H16.0946C17.0216 10.4701 17.8483 9.88229 18.1494 9.0078L20.0465 3.53144C20.0943 3.3833 20.0704 3.2256 19.9796 3.09658ZM18.9188 3.85161L17.2414 8.6924C17.0694 9.18461 16.6059 9.51434 16.0898 9.51434H5.88254L4.98416 3.85161H18.9188Z" fill="#545454"/>
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0">
                                                        <rect width="20.0704" height="19" fill="white"/>
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                            {props.countCartProducts
                                                ? <span id="wish-total" className="no-empty">
                                                            <span
                                                                className="actions-counter">{props.countCartProducts}</span>
                                                        </span>
                                                : null
                                            }
                                        </NavLink>
                                    </li>
                                    :null
                                }
                            </ul>
                        </div>
                        { props.header.data_category_menu
                            ? <div className="category-menu">
                                    <CategoryMenu
                                        categories={props.header.data_category_menu.categories}
                                    />
                              </div>
                            : null
                        }
                        {props.header.data_menu
                            ? <div className="site-menu">
                                <Menu
                                    categories = {props.header.data_menu.categories}
                                />
                            </div>
                            : null
                        }
                    </div>
                </div>
            </div>
        </header>
    )

}
export default withRouter(Header)
