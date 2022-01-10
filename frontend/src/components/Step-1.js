import {useState, useEffect} from 'react'

import Steps from "./Steps"
import Input from "./Input"
import Button from "./Button"

function validateEmpty (string) {
    return (string && string.length > 0)
}

function validateEmail (string) {
    if(!validateEmpty(string)) return false

    return (String(string.toLowerCase()).match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) !== null)
}

function Step1 (props) {

    const [validated, setValidated] = useState(false)

    const [firstName, setFirstName] = useState('')
    const [surname, setSurname] = useState('')
    const [email, setEmail] = useState('')

    useEffect(() => {
        
        if(validateEmpty(firstName) && validateEmpty(surname) && validateEmail(email)){
            setValidated(true)
        } else {
            setValidated(false)
        }
        
    }, [firstName, surname, email])

    return (
        <Steps title="Step 1: Your details" headerAction={props.headerAction} expand={props.expand}>

            <Input label="First Name" value={firstName} model={setFirstName} />

            <Input label="Surname" value={surname} model={setSurname} />
        
            <Input label="Email Address" type="email" value={email} model={setEmail} />

            <Button name="next" value="Next >" disabled={!validated} buttonAction={props.buttonAction} />
        </Steps>
    )
}

export default Step1