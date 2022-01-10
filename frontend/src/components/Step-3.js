import Steps from "./Steps"
import Button from "./Button"

function Step3 (props) {
    return (
        <Steps title="Step 3: Final comments" headerAction={props.headerAction} expand={props.expand}>
            <Button name="next" value="Next >" />
        </Steps>
    )
}

export default Step3