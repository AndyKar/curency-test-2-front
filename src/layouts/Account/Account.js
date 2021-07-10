import React from "react";
import { Route, Switch, Redirect, useLocation } from "react-router-dom";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";
import AccountProfile from '../../components/AccountProfile/AccountProfile'
import AccountContacts from '../../components/AccountContacts/AccountContacts'
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

var ps;

function Account(props) {

    const location = useLocation();
    const mainPanelRef = React.useRef(null);
    const [sidebarOpened, setsidebarOpened] = React.useState(
        document.documentElement.className.indexOf("nav-open") !== -1
    );

    React.useEffect(() => {
        if (navigator.platform.indexOf("Win") > -1) {
            let tables = document.querySelectorAll(".table-responsive");
            for (let i = 0; i < tables.length; i++) {
                ps = new PerfectScrollbar(tables[i]);
            }
        }
        document.documentElement.scrollTop = 0;
        document.scrollingElement.scrollTop = 0;
        if (mainPanelRef.current) {
            mainPanelRef.current.scrollTop = 0;
        }
    }, [location]);
    // this function opens and closes the sidebar on small devices
    const toggleSidebar = () => {
        document.documentElement.classList.toggle("nav-open");
        setsidebarOpened(!sidebarOpened);
    };

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
                        </Row>
                </React.Fragment>
            )}
        </BackgroundColorContext.Consumer>
    )
}

export default Account;