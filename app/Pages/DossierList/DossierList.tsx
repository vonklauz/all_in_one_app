import { Hero } from "~/Components/Hero";
import { DossierListWidget } from "~/Widgets/DossierListWidget";

const DossierList = () => {
    return <div>
        <Hero title="Анкеты" breadcrumbs={[{ text: 'Главная', link: '/' }, { text: 'Анкеты' }]} />
        <section className="section-padding">
            <DossierListWidget />
        </section>
    </div>
}
export default DossierList;