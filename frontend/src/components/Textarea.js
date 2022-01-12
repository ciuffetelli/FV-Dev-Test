import {useState, useEffect} from 'react'

import '../css/Form.css'

function Textarea (props) {

    const [textareaValue, setTextareaValue] = useState(props.value)

    useEffect(() => {

        if(typeof props.state === 'function') return props.state(textareaValue)

    }, [textareaValue])

    return (
        <div className="form-input">
        <label className="form-label">{props.label}:</label>

        <textarea defaultValue={textareaValue} onChange={e => {setTextareaValue(e.target.value)}}></textarea>
        
        
        
        {/* <input value={inputValue} onChange={e => {setInputValue(e.target.value)}} /> */}
        </div>
        
    )
}

Textarea.defaultProps = {
    label: '',
    value : ''
}

export default Textarea