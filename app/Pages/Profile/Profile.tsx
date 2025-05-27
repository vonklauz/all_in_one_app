import { Hero } from "~/Components/Hero";
import { PersonalDataForm } from "~/Widgets/PersonalDataForm";


const Profile = () => {
    return <div>
        <Hero title="Личная информация" breadcrumbs={[{ text: 'Главная', link: '/' }, { text: 'Личная информация'}]} />
        <section className="section-padding">
            <PersonalDataForm/>
        </section>
    </div>
}

export default Profile;