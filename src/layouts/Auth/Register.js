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
      Col
} from "reactstrap";
import Message from "../../components/ui/message/Message";


function Register(props) {
    if(props.info) {
        const sendInfo = () => {
            const loginForm = document.forms.registerForm
            const loginData = new FormData(loginForm)
            props.sendAuthData('register', loginData)
            return false
        }

        const renderForm = (groups) => {
            const form = props.info.form
            if (form) {
                return groups.map((prop, key) => {
                    return (
                        <FormGroup key={'register_' + prop + '_' + key}>
                            <label>{form[prop].entry}</label>
                            <Input
                                id={'register_' + form[prop].name}
                                name={form[prop].name}
                                placeholder={form[prop].entry}
                                type={form[prop].type}
                            />
                        </FormGroup>
                    )
                })
            }
        }

        return (
            <div id={'user-login'} className="content">
                <Row>
                    <Col xs="12" sm={{size: 10, offset: 1}} lg={{size: 8, offset: 2}} xl={{size: 6, offset: 3}}>
                        <Card className={'main-theme-bg login-card'}>
                            <CardHeader>
                                <h4 className="title"><span>{props.info.heading_title}</span></h4>
                            </CardHeader>
                            <CardBody>

                                <Form name={'registerForm'}>
                                    <Row>
                                        <Col md={'6'}>
                                            {renderForm([0, 1, 2])}
                                        </Col>
                                        <Col md={'6'}>
                                            {renderForm([3, 4, 5])}
                                        </Col>
                                    </Row>
                                </Form>
                            </CardBody>
                            <CardFooter>
                                <Message
                                    success={props.messagesAuth.register}
                                    error={props.errorsAuth.register}
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
        );
    } else {
        return null
    }
}

export default Register
