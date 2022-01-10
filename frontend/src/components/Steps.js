import '../css/Steps.css'

function Steps (props) {

    const expand = props.expand || false

    const headerAction = () => {
        if(typeof props.headerAction === 'function') {
            props.headerAction()
        }
    }

    return (
        <div className='step' expand={expand + ''}>
            <div className="step-header" onClick={() => {headerAction()}}>
                <span className="step-title">{props.title}</span>
            </div>
            <div className="step-content">
                {props.children}
            </div>
        </div>
    )
}

export default Steps