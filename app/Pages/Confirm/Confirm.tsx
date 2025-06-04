import { useOutletContext } from "react-router";
import { ConfirmForm } from "~/Widgets/ConfirmForm";

const Confirm = () => {
    const context = useOutletContext<string>();
    
    return (
        <section className="section-padding">
            <ConfirmForm confirmToken={context} />
        </section>
    )
}

export default Confirm;