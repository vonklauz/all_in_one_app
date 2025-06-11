import { Hero } from "~/Components/Hero";
import { DocumentsForm } from "~/Widgets/DocumentsForm";

const Documents = () => {
    return <div>
        <Hero title="Документы" breadcrumbs={[{ text: 'Главная', link: '/' }, { text: 'Документы' }]} />
        <section className="section-padding">
            <DocumentsForm />
        </section>
    </div>
}
export default Documents;