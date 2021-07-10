import React, {useState} from 'react'
import {FaInfoCircle, FaCheck} from 'react-icons/fa'
import './Contact.scss'
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

function Contact(props){

    if(props.info) {
        const sendInfo = () => {
            const contactForm = document.forms.contactForm
            const contactData = new FormData(contactForm)
            props.sendNewContactData(contactData)
            return false
        }

        const renderForm = () => {
            const form = props.info.form
            return form.map((prop, key) => {
                return (
                    <div className={'my-contacts-table-td td-' + prop.name} key={'contactData_' + key}>
                        <Input
                            id={'contactData_' + prop.name}
                            name={prop.name}
                            placeholder={prop.entry}
                            type={prop.type}
                        />
                    </div>
                )
            })
        }

        return (

            <form name="contactForm" className="contacts-table">
                <div className="contacts-table-tr">
                    {renderForm()}
                    <div className="my-contacts-table-td td-actions">
                        <Button
                            className="theme-border-button"
                            style={{margin: "0 0 0 auto"}}
                            type="button"
                            color="none"
                            onClick={sendInfo}
                        >
                            <span>{props.info.button}</span>
                        </Button>
                    </div>
                </div>
            </form>
        )
    } else {
        return null
    }

}

export default Contact