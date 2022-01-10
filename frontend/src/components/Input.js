import {useState, useEffect} from 'react'

import '../css/Form.css'

function Input (props) {

    const [inputValue, setInputValue] = useState(props.value)

    useEffect(() => {
        
        if(props.model) props.model(inputValue)

    }, [inputValue])

    return (
        <div className="form-input">
            <label>{props.label}:</label>
            <input id={props.id} type={props.type ?? 'text'} value={inputValue} onChange={e => {setInputValue(e.target.value)}} />
        </div>
    )
}

export default Input