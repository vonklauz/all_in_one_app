import { Hero } from "~/Components/Hero";
import { DossierForm } from "~/Widgets/DossierForm";

const Dossier = () => {
    return <div>
        <Hero title="Анкета-приложение
к заявлению на банкротство" breadcrumbs={[{ text: 'Главная', link: '/' }, { text: 'Анкета' }]} />
        <section className="section-padding">
            <DossierForm />
        </section>
    </div>
}
export default Dossier;