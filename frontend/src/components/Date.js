import {useState, useEffect} from 'react'

import '../css/Form.css'

function DateInput (props) {

    const getPropsValue = (position) => {
        
        if(!props.value) return ''

        return props.value.split('-')[position] || ''
    }

    const [dayValue, setDayValue] = useState(getPropsValue(1))
    const [monthValue, setMonthValue] = useState(getPropsValue(0))
    const [yearValue, setYearValue] = useState(getPropsValue(2))

    const validateInt = (input) => {
        return (parseInt(input) == input)
    }

    const validateDate = () => {

        const checkDate = new Date(`${monthValue}-${dayValue}-${yearValue}`)

        return (checkDate != 'Invalid Date')
    }

    useEffect(() => {

        if(!validateInt(dayValue)) setDayValue( (dayValue) ? parseInt(dayValue) : '')
        if(!validateInt(monthValue)) setMonthValue( (monthValue) ? parseInt(monthValue) : '')
        if(!validateInt(yearValue)) setYearValue(  (yearValue) ? parseInt(yearValue) : '')

        let inputDate = `${monthValue}-${dayValue}-${yearValue}`

        if(!validateDate()) inputDate = ''

        if(typeof props.state == 'function') props.state(inputDate)

    }, [dayValue, monthValue, yearValue])



    return (
        <div className="form-input">
            <label className="form-label">{props.label}</label>

            <div className="form-date">
                <input type="text" value={dayValue} onChange={e => {setDayValue(e.target.value)}} />
                <input type="text" value={monthValue} onChange={e => {setMonthValue(e.target.value)}} />
                <input type="text" value={yearValue} onChange={e => {setYearValue(e.target.value)}} />
            </div>
        </div>
    )
}

DateInput.defaultProps = {
    label: '',
    value: '',
    state: ''
}


export default DateInput