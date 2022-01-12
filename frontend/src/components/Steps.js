import '../css/Steps.css'

function Steps (props) {

    const expanded = props.expanded

    const headerAction = () => {
        if(typeof props.headerAction === 'function') {
            props.headerAction()
        }
    }

    return (
        <div className='step' expanded={expanded + ''}>
            <div className="step-header" onClick={() => {headerAction()}}>
                <span className="step-title">{props.title}</span>
            </div>
            <div className="step-content">
                {props.children}
            </div>
        </div>
    )
}

Steps.defaultProps = {
    title: '',
    expanded : false,
    headerAction: ''
}

export default Steps