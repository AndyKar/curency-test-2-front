import React, {Component, useState} from 'react'
import {Route, withRouter, Switch, Redirect, useLocation} from "react-router-dom";
import AuthNav from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footer/Footer.js";
import { BackgroundColorContext } from "contexts/BackgroundColorContext"
import Header from "../../components/Header/Header"
import {connect} from "react-redux"
import Login from "../Auth/Login"
import Register from "../Auth/Register"
import Account from "../Account/Account";
import Profile from "../../components/Profile/Profile";
import Contacts from "../../components/Contacts/Contacts";
import Currencies from "../../components/Currencies/Currencies";
import {fetchInitInfo, changeCurrency, changeLanguage, sendAuthData, logout} from "../../store/actions/main"
import {sendNewContactData, deleteContact, addContactToFavorite, deleteContactFromFavorite, fetchCurrencies} from "../../store/actions/account"
import Logout from "../../components/Logout/Logout";

class MainLayout extends Component {

  state = {
    sidebarOpened: false,
    //activeTab: 'login'
    selectColourStyles : {
      control: styles => ({ ...styles, backgroundColor: '#26272a' }),
      option: (styles, { isDisabled, isFocused, isSelected }) => {
        return {
          ...styles,
          backgroundColor: isDisabled
              ? null
              : isSelected
                  ? '#26272a'
                  : isFocused
                      ? 'blue'
                      : null,
          color: isDisabled
              ? '#ccc'
              : isSelected
                  ? 'black'
                  : 'green',
          cursor: isDisabled ? 'not-allowed' : 'pointer',

          ':active': {
            ...styles[':active'],
            backgroundColor:
                !isDisabled && (isSelected ? 'red' : 'blue'),
          }
        }
      }
    }
  }

  changeLanguage = (code) => {
    this.props.changeLanguage(code)
    return true
  }
  changeCurrency = (code) => {
    this.props.changeCurrency(code)
    return true
  }
  logout = () => {
    this.props.logout()
    return null
  }

  title = () => {
    const path = this.props.location.pathname.split('/')[1]
    if(path && this.props.auth[path + 'Info'] && this.props.auth[path + 'Info'].heading_title){
      return this.props.auth[path + 'Info'].heading_title
    } else if (path && this.props[path] && this.props[path].heading_title){
      return this.props[path].heading_title
    }
    return null
  }

  UNSAFE_componentWillMount(){
    if(!this.props.main.header.length){
      this.props.fetchInitInfo()
      //this.props.fetchCustomerOptions()
    }
  }

  render() {
    return (
        <BackgroundColorContext.Consumer>
          {({color, changeColor}) => (
              <React.Fragment>
                <Header
                    header = { this.props.main.header }
                    pathname={this.props.location?this.props.location.pathname:'/'}
                    auth={this.props.auth}
                />
                <div className="container" style={{zIndex: 0}}>
                  <div className="category-top-panel-wrap main-theme-bg">
                    <AuthNav
                        logged={this.props.auth.logged}
                        logout={this.logout}
                        data={color}
                        pathname={this.props.location?this.props.location.pathname:'/'}
                        info={this.props.auth}
                        title={this.title()}
                        toggleSidebar={this.toggleSidebar}
                        sidebarOpened={this.state.sidebarOpened}
                    />
                  </div>
                </div>
                <div className="content-columns">
                  <div className="container">
                    <div id="content" className="main-column">
                      <Switch>

                        <Route path="/logout" render={() =>
                            <Logout
                                info={this.props.auth.logoutInfo}
                                logged={this.props.auth.logged}
                                logout={this.logout}
                            />
                        }/>
                        {!this.props.auth.logged
                            ? <Redirect from={'/account'} to={'/login'}/>
                            : <Redirect from={'/login'} to={'/account'}/>
                        }
                         <React.Fragment>
                              { !this.props.auth.logged
                                  ? <React.Fragment>
                                    <Route path="/login" render={() =>
                                        <Login
                                            info={this.props.auth.loginInfo}
                                            errorsAuth={this.props.errorsAuth}
                                            messagesAuth={this.props.messagesAuth}
                                            sendAuthData={this.props.sendAuthData}
                                        />
                                    }/>
                                    <Route path="/register" render={() =>
                                        <Register
                                            info={this.props.auth.registerInfo}
                                            errorsAuth={this.props.errorsAuth}
                                            messagesAuth={this.props.messagesAuth}
                                            sendAuthData={this.props.sendAuthData}
                                        />
                                    }/>
                                  </React.Fragment>
                                  : <React.Fragment>
                                        <Route path="/account" render={() =>
                                            <Account
                                                account={this.props.account}
                                                //accountEdit={this.props.profile}
                                                contacts={this.props.contacts}
                                                currencies={this.props.currencies}
                                                language={this.props.account.language}
                                                languageMain={this.props.main.language}
                                            />
                                        }/>
                                        <Route path="/profile" render={() =>
                                            <Profile
                                                accountEdit={this.props.profile}
                                                language={this.props.account.language}
                                                languageMain={this.props.main.language}
                                            />
                                        }/>
                                        <Route path="/contacts" render={() =>
                                            <Contacts
                                                contacts={this.props.contacts}
                                                language={this.props.account.language}
                                                languageMain={this.props.main.language}
                                                sendNewContactData={this.props.sendNewContactData}
                                                deleteContact={this.props.deleteContact}
                                                addContactToFavorite={this.props.addContactToFavorite}
                                                deleteContactFromFavorite={this.props.deleteContactFromFavorite}
                                            />
                                        }/>
                                        <Route path="/currencies" render={() =>
                                            <Currencies
                                                currencies={this.props.currencies}
                                                language={this.props.account.language}
                                                languageMain={this.props.main.language}
                                                fetchCurrencies={this.props.fetchCurrencies}
                                            />
                                        }/>
                                        <Route path="/register" render={() =>
                                            <Redirect from={'/register'} to={'/account'}/>
                                        }/>
                                  </React.Fragment>
                              }
                         </React.Fragment>
                       </Switch>
                    </div>
                  </div>
                </div>
                <Footer
                  footer = { this.props.main.footer }
                />
              </React.Fragment>
          )}
        </BackgroundColorContext.Consumer>
    )
  }
}

function mapStateToProps(state){
  console.log('MAIN STATE', state)
  //console.log('MAIN STATE SESSION', state.session.session)
  return {
    loading: state.main.loading,
    error: state.main.error,
    main: state.main.main,
    errorsAuth: state.main.errorsAuth,
    messagesAuth: state.main.messagesAuth,
    auth: state.main.auth,

    account: state.account.account,
    profile: state.account.accountEdit,
    contacts: state.account.contacts,
    currencies: state.account.currencies,
    session: state.session.session
  }
}

function mapDispatchToProps(dispatch){
  return {
    fetchInitInfo: () => dispatch(fetchInitInfo()),
    logout: (callback) => dispatch(logout(callback)),
    sendAuthData: (currentOption, authData) => dispatch(sendAuthData(currentOption, authData)),
    sendNewContactData: (contactData) => dispatch(sendNewContactData(contactData)),
    fetchCurrencies: (date) => dispatch(fetchCurrencies(date)),
    deleteContact: (contactId) => dispatch(deleteContact(contactId)),
    addContactToFavorite: (contactId) => dispatch(addContactToFavorite(contactId)),
    deleteContactFromFavorite: (contactId) => dispatch(deleteContactFromFavorite(contactId))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainLayout))
