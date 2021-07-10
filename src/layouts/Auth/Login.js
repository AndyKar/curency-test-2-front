import React from "react";
import {
      Button,
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
    Collapse,
    TabContent,
    TabPane
} from "reactstrap";
import Message from "../../components/ui/message/Message";

function Login(props) {
    if(props.info) {
        const sendInfo = () => {
            console.log('loginForm')
            const loginForm = document.forms.loginForm
            const loginData = new FormData(loginForm)
            props.sendAuthData('login', loginData)
            return false
        }

        const renderForm = () => {
            const form = props.info.form
            return form.map((prop, key) => {
                return (
                    <FormGroup key={'login_' + key}>
                        <label>{prop.entry}</label>
                        <Input
                            id={'login_' + prop.name}
                            name={prop.name}
                            placeholder={prop.entry}
                            type={prop.type}
                        />
                    </FormGroup>
                )
            })
        }

        return (
            <div id={'user-login'} className="content">
                <Row>
                    <Col xs="12" sm={{size: 8, offset: 2}} lg={{size: 6, offset: 3}} xl={{size: 4, offset: 4}}>
                        <Card className={'main-theme-bg login-card'}>
                            <CardHeader>
                                <h4 className="title"><span>{props.info ? props.info.heading_title : null}</span></h4>
                            </CardHeader>
                            <CardBody>
                                <Form name={'loginForm'}>
                                    {renderForm()}
                                </Form>
                            </CardBody>
                            <CardFooter>
                                <Message
                                    success={props.messagesAuth.login}
                                    error={props.errorsAuth.login}
                                />
                                <Button
                                    className="theme-border-button"
                                    type="button"
                                    color="none"
                                    onClick={sendInfo}
                                >
                                    <span>{props.info.button}</span>
                                </Button>
                            </CardFooter>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    } else {
        return null
    }
}

export default Login;
