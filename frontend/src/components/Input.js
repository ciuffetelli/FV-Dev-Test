import {useState, useEffect} from 'react'

import '../css/Form.css'

function Input (props) {

    const [inputValue, setInputValue] = useState(props.value)

    const validate = (value) => {

        const required = props.required

        const validateTypes = {
            text: (value) => {
                return (value.length > 0)
            },
            email: (value) => {

                if(validateTypes.text(value)){
                    return (String(value.toLowerCase()).match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) !== null)
                }

                return false
            },
            tel: (value) => {
                return (validateTypes.text(value) && parseInt(value) == value)
            }
        }

        return !(required && !validateTypes[props.type](value))
    }

    useEffect(() => {

        if(typeof props.state !== 'function') return
        
        
        if(validate(inputValue)){
            props.state(inputValue)
        }else {
            props.state('')
        }

    }, [inputValue])

    return (
        <div className="form-input">
            <label className="form-label">{props.label}:</label>
            <input type={props.type} value={inputValue} onChange={e => {setInputValue(e.target.value)}} />
        </div>
    )
}

Input.defaultProps = {
    value: '',
    label: '',
    type: 'text',
    required: false,
    state: ''
}

export default Input