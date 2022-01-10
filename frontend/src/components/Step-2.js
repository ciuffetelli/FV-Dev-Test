import Steps from "./Steps"
import Button from "./Button"

function Step2 (props) {
    return (
        <Steps title="Step 2: More comments" headerAction={props.headerAction} expand={props.expand}>
            <Button name="next" value="Next >" />
        </Steps>
    )
}

export default Step2