import React from "react";
import { Route, Switch, Redirect, useLocation } from "react-router-dom";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";
import AccountProfile from '../../components/AccountProfile/AccountProfile'
import AccountContacts from '../../components/AccountContacts/AccountContacts'
import AccountCurrencies from '../../components/AccountCurrencies/AccountCurrencies'
// core components
//import Sidebar from "components/Sidebar/Sidebar.js";
import FixedPlugin from "components/FixedPlugin/FixedPlugin.js";
import logo from "assets/img/react-logo.png";
import { BackgroundColorContext } from "contexts/BackgroundColorContext";
import App from "../../App";
import NotFound from "../../components/NotFound/NotFound";
import {
    Container,
    Row,
    Col,
    Input,
    Label,
    Button,
    NavLink,
    ButtonGroup,
    CustomInput,
    Form,
    FormFeedback
} from 'reactstrap';
import CustomDatePicker from "../../components/CustomDatePicker/CustomDatePicker";

var ps;

function Account(props) {

    const location = useLocation();
    // console.log('ACCOUNT PROPS', props)

    return (
        <BackgroundColorContext.Consumer>
            {({color, changeColor}) => (
                <React.Fragment>
                    <Row>
                        <Col md={'12'} lg={'6'} xl={'4'} style={{marginBottom: '30px'}}>
                            <AccountContacts
                                language={props.languageMain}
                                contacts={props.contacts}
                            />
                        </Col>
                        <Col md={'12'} lg={'6'} xl={'4'} style={{marginBottom: '30px'}}>
                            <AccountCurrencies
                                language={props.languageMain}
                                currencies={props.currencies}
                            />
                        </Col>
                    </Row>
                </React.Fragment>
            )}
        </BackgroundColorContext.Consumer>
    )
}

export default Account;