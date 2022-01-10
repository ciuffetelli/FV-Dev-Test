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
            <button name={props.name ?? 'button'} disabled={props.disabled === true ? 'disabled' : undefined}  onClick={() => {buttonAction()}}>{props.value ?? 'Button'}</button>
        </div>
    )
}

export default Button