import '../css/Form.css'

function Button (props) {

    const buttonAction = () => {
        if(typeof props.buttonAction === 'function') {
            props.buttonAction()
        }
    }

    return (
        <div className="form-button">
            {props.disabled}
            <button name={props.name} disabled={props.disabled === true ? 'disabled' : undefined}  onClick={buttonAction}>{props.value}</button>
        </div>
    )
}

Button.defaultProps = {
    name: 'Button',
    value: 'Button',
    disabled: false,
    buttonAction: ''
}

export default Button