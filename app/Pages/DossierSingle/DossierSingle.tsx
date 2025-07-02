import { Hero } from "~/Components/Hero";
import { DossierForm } from "~/Widgets/DossierForm";

const DossierSingle = () => {
    return <div>
        <Hero title="Анкеты" breadcrumbs={[{ text: 'Главная', link: '/' }, { text: 'Анкеты' }]} />
        <section className="section-padding">
            <DossierForm />
        </section>
    </div>
}
export default DossierSingle;