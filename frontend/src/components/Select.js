import {useState, useEffect} from 'react'

import '../css/Form.css'

function Select (props) {

    const [selectValue, setSelectValue] = useState(props.value)

    const options = props.options

    useEffect(() => {

        if(typeof props.state === 'function') props.state(selectValue)

    }, [selectValue])

    return (
        <div className="form-input">
            <label className='form-label'>{props.label}:</label>
            <select defaultValue="" onChange={e => { setSelectValue(e.target.value) }}>

                <option value="" disabled>Select {props.label}</option>

                {options.map( (option, index) => {
                    return (
                        <option key={index} value={option}>{option}</option>
                    )
                })}

            </select>
        </div>
    )
}

Select.defaultProps = {
    label: '',
    value: '',
    state: '',
    option: []
}

export default Select