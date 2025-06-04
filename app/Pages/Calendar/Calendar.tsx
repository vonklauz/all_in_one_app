import { Hero } from "~/Components/Hero";
import { CalendarForm } from "~/Widgets/CalendarForm";


const Calendar = () => {
    return <div>
        <Hero title="Календарь" breadcrumbs={[{ text: 'Главная', link: '/' }, { text: 'Календарь'}]} />
        <section className="section-padding">
            <CalendarForm/>
        </section>
    </div>
}

export default Calendar;