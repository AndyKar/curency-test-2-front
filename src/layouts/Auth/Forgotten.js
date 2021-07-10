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
} from "reactstrap"
import Message from "../../components/ui/message/Message";


function Forgotten(props) {
    if(props.info) {

        const sendInfo = () => {
            const loginForm = document.forms.forgottenForm
            const loginData = new FormData(loginForm)
            console.log('loginData', loginForm)
            props.sendAuthData('forgotten', loginData)
            return false
        }

        const renderForm = () => {
            const form = props.info.form
            if (form) {
                return form.map((prop, key) => {
                    return (
                        <FormGroup key={'forgotten_' + key}>
                            <label>{prop.entry}</label>
                            <Input
                                id={'forgotten_' + prop.name}
                                name={prop.name}
                                placeholder={prop.entry}
                                type={prop.type}
                            />
                        </FormGroup>
                    )
                })
            }
        }

        return (

            <div id={'user-forgotten'} className="content">
                <Row>
                    <Col xs="12" sm={{size: 8, offset: 2}} lg={{size: 6, offset: 3}} xl={{size: 4, offset: 4}}>
                        <Card className={'main-theme-bg login-card'}>
                            <CardHeader>
                                <h4 className="title"><span>{props.info.heading_title}</span></h4>
                            </CardHeader>
                            <CardBody>
                                <Form name={'forgottenForm'}>
                                    {renderForm()}
                                </Form>
                            </CardBody>
                            <CardFooter>
                                <Message
                                    success={props.messagesAuth.forgotten}
                                    error={props.errorsAuth.forgotten}
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

export default Forgotten
