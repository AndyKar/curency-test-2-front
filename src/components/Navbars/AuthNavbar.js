import React, {useState} from "react"
import classNames from 'classnames'
import {withRouter} from "react-router-dom"
import {RiLoginBoxLine, RiUserAddLine, RiLogoutBoxRLine} from 'react-icons/ri'
import {NavLink} from 'react-router-dom'


function AuthNav(props) {

  const text = (mode) => {
      if(mode && props.info[mode + 'Info']){
          return props.info[mode + 'Info'].heading_title
      }
  }
  // const breadcrumb = () => {
  //     const languages = props.language
  //     if(languages){
  //         return (
  //             <ul className={'breadcrumb'}>
  //                 <li style={{marginRight: '4px'}}><a href={'/'} ><FaHome style={{marginBottom: '3px'}}/></a></li>
  //                 <li><span> {languages[props.activeTab].heading_title}</span></li>
  //             </ul>
  //         )
  //     }
  // }

  return (
      <div className={'top-panel'} style={{paddingTop: '10px'}}>
        <div>
            {/*{breadcrumb()}*/}
            <h1 className="page-title section-title">{props.title}</h1>
        </div>
       <div className="site-menu" style={{paddingBottom: '10px'}}>
          <ul className={'nav'}>
              {!props.logged
                  ? <React.Fragment>
                      <li className={classNames('nav-item', {active: props.pathname === '/login'})}>
                          <NavLink
                              to={'/login'}
                              className={'nav-link'}
                          ><RiLoginBoxLine/> {text('login')}</NavLink>
                      </li>
                      <li className={classNames('nav-item', {active: props.pathname === '/register'})}>
                          <NavLink
                              to={'/register'}
                              className={'nav-link'}
                          ><RiUserAddLine/> {text('register')}</NavLink>
                      </li>

                  </React.Fragment>
                  : <li className='nav-item'>
                      <NavLink
                          to={'/logout'}
                          className={'nav-link'}
                      ><RiLogoutBoxRLine/> {text('logout')}</NavLink>
                  </li>
              }
          </ul>
        </div>
      </div>
  )
}

export default withRouter(AuthNav)
