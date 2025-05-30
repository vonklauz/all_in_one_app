import { useOutletContext } from "react-router";
import { ConfirmForm } from "~/Widgets/ConfirmForm";

const Confirm = () => {
    const context = useOutletContext<string>()
    console.log('context', context)
    return <section className="section-padding">
        <ConfirmForm confirmToken={context} />
    </section>
}

export default Confirm;