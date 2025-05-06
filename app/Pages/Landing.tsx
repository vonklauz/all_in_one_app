import "~/landing.css";

export const LandingPage = () => {
    return <>
        <main className="page">
            <section className="hero">
                <div className="hero-container">
                    <div className="hero__top top-hero">
                        <div className="top-hero__img -ibg">
                            <img src="/hero-img.webp" alt="Image" />
                        </div>
                        <div className="top-hero__body">
                            <h1 className="top-hero__title title title_h1">Самостоятельное банкротство</h1>
                            <div className="top-hero__text text text_descr">
                                <p>Попали в трудную финансовую ситуацию и задумываетесь о банкротстве? </p>
                                <p>
                                    Вы можете пройти всю процедуру самостоятельно, без необходимости обращаться к&nbsp;дорогостоящим
                                    юридическим услугам.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="hero__benefits">
                        <div className="item-benefits">
                            <div className="item-benefits__icon">
                                <img src="/icons/hero-benefits/01.svg" alt="Image" />
                            </div>
                            <div className="item-benefits__text">
                                Наши материалы максимально просты и доступны даже для тех, кто ранее не сталкивался с&nbsp;процедурой
                                банкротства. Следуйте пошаговым инструкциям и оформляйте документы самостоятельно
                                - мы подробно объясним, как это сделать правильно.
                            </div>
                        </div>
                        <div className="item-benefits">
                            <div className="item-benefits__icon">
                                <img src="/icons/hero-benefits/02.svg" alt="Image" />
                            </div>
                            <div className="item-benefits__text">
                                Больше не нужно беспокоиться о звонках коллекторов, судебных разбирательствах и постоянном
                                стрессе. С нашей помощью вы сможете законно освободиться от непосильных долгов и начать
                                жизнь с чистого листа. Забудьте о финансовых проблемах и сэкономьте средства, которые могли
                                бы уйти на оплату услуг юристов.
                            </div>
                        </div>
                        <div className="item-benefits">
                            <div className="item-benefits__icon">
                                <img src="/icons/hero-benefits/03.svg" alt="Image" />
                            </div>
                            <div className="item-benefits__text">
                                Не тратьте деньги на юристов - возьмите процесс банкротства в свои руки и избавьтесь от
                                долгов быстро и без лишних затрат. Сделайте первый шаг навстречу финансовому освобождению
                                уже сегодня!
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="video-about section-padding">
                <div className="video-about-container">
                    <div className="video-about__info">
                        <div className="video-about__icon">
                            <img src="/illustration-about-video.svg" alt="Image" />
                        </div>
                        <h3 className="video-about__title title title_h3">Самостоятельное банкротство</h3>
                        <div className="video-about__text">Банкротство физических лиц - это процедура, при которой гражданин
                            признается неспособным в полном объеме удовлетворить требования кредиторов по денежным
                            обязательствам и/или исполнить обязанность по уплате обязательных платежей. Таким образом,
                            банкротство физических лиц - это законная процедура урегулирования долговых обязательств перед
                            кредиторами в случае неплатежеспособности гражданина.
                        </div>
                    </div>
                    <div className="video-about__video">
                        <h3 className="video-about__title title title_h3">В этом видео мы расскажем? Что нужно для
                            самостоятельного ведения дела о банкротстве.
                        </h3>

                        <div className="video-block">
                            <div className="video-block__value">
                                <div className="video-block__inner">
                                    <picture>
                                        <source srcSet='https:\\img.youtube.com/vi_webp/GMgo3XX1mdU/maxresdefault.webp' type="image/webp" />
                                        <img src="https:\\img.youtube.com/vi/GMgo3XX1mdU/maxresdefault.webp" alt="Image" />
                                    </picture>
                                    <button className="video-btn" type="button" data-video-id="GMgo3XX1mdU">
                                        <svg width="66" height="46" viewBox="0 0 66 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M65.3409 9.92355C65.3409 9.92355 64.6961 5.41661 62.7171 3.4319C60.2074 0.827 57.3942 0.814066 56.1041 0.661613C46.8684 0 33.0143 0 33.0143 0H32.9856C32.9856 0 19.1318 0 9.89577 0.661613C8.60562 0.814066 5.79349 0.827 3.28285 3.4319C1.30398 5.41661 0.660032 9.92355 0.660032 9.92355C0.660032 9.92355 0 15.2162 0 20.5088V25.4706C0 30.7631 0.660032 36.0557 0.660032 36.0557C0.660032 36.0557 1.30398 40.5627 3.28285 42.5474C5.79349 45.1524 9.09139 45.07 10.5603 45.343C15.8403 45.8447 33 46 33 46C33 46 46.8684 45.9793 56.1041 45.3178C57.3942 45.1652 60.2074 45.1524 62.7171 42.5474C64.6961 40.5627 65.3409 36.0557 65.3409 36.0557C65.3409 36.0557 66 30.7631 66 25.4706V20.5088C66 15.2162 65.3409 9.92355 65.3409 9.92355Z" fill="url(#paint0_linear_60_2341)" fill-opacity="0.85" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M26.1862 31.107L26.1831 13.107L44.1831 22.1384L26.1862 31.107Z" fill="white" />
                                            <defs>
                                                <linearGradient id="paint0_linear_60_2341" x1="33" y1="0" x2="33" y2="46" gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="#085DA9" />
                                                    <stop offset="0.2" stop-color="#6C5B97" />
                                                    <stop offset="0.4" stop-color="#995685" />
                                                    <stop offset="0.6" stop-color="#BE4F73" />
                                                    <stop offset="0.8" stop-color="#E04461" />
                                                    <stop offset="1" stop-color="#FF314F" />
                                                </linearGradient>
                                            </defs>
                                        </svg>

                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </section>
            <section className="main-benefits section-padding">
                <div className="main-benefits-container">
                    <h2 className="main-benefits__title title title_h2">Преимущества самостоятельного банкротства</h2>
                    <div className="main-benefits__items">
                        <div className="item-benefit-main">
                            <div className="item-benefit-main__icon">
                                <img src="/icons/benefits/01.svg" alt="Image" />
                            </div>
                            <div className="item-benefit-main__title title title_h5">Экономия средств</div>
                            <div className="item-benefit-main__text">
                                Услуги юристов по банкротству физических лиц могут стоить десятки, а то и сотни тысяч
                                рублей. Оформляя документы самостоятельно, вы сможете сэкономить эти деньги и направить их
                                на погашение долгов
                            </div>
                        </div>
                        <div className="item-benefit-main">
                            <div className="item-benefit-main__icon">
                                <img src="/icons/benefits/02.svg" alt="Image" />
                            </div>
                            <div className="item-benefit-main__title title title_h5">Контроль над процессом</div>
                            <div className="item-benefit-main__text">
                                Работая напрямую с судом и кредиторами, вы будете в курсе всех нюансов и сможете лично
                                контролировать ход процедуры. Это исключит недопонимания и ошибки.
                            </div>
                        </div>
                        <div className="item-benefit-main">
                            <div className="item-benefit-main__icon">
                                <img src="/icons/benefits/03.svg" alt="Image" />
                            </div>
                            <div className="item-benefit-main__title title title_h5">Экономия времени</div>
                            <div className="item-benefit-main__text">
                                Юристы не&nbsp;всегда оперативно решают вопросы, а&nbsp;вы&nbsp;можете действовать
                                максимально быстро в&nbsp;соответствии с&nbsp;вашими интересами
                            </div>
                        </div>
                        <div className="item-benefit-main">
                            <div className="item-benefit-main__icon">
                                <img src="/icons/benefits/04.svg" alt="Image" />
                            </div>
                            <div className="item-benefit-main__title title title_h5">Простота и доступность</div>
                            <div className="item-benefit-main__text">
                                Наши пошаговые инструкции помогут разобраться в&nbsp;процедуре даже тем, кто&nbsp;ранее не&nbsp;сталкивался
                                с&nbsp;банкротством физических лиц. Все&nbsp;максимально понятно и&nbsp;прозрачно
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="allowance section-padding">
                <div className="allowance-container">
                    <h2 className="allowance__title title title_h2">Пособие по банкротству</h2>
                    <div className="allowance__text text text_descr">Данное пособие предназначено для физических лиц, которые
                        столкнулись с
                        финансовыми трудностями и рассматривают возможность прохождения процедуры банкротства
                        самостоятельно, без привлечения юридических специалистов.
                    </div>
                    <div className="allowance__items">
                        <div className="item-allowance">
                            <div className="item-allowance__img"><img src="/icons/documents-folder.svg" alt="Image" /></div>
                            <div className="item-allowance__block">
                                <div className="item-allowance__num">1/</div>
                                <div className="item-allowance__text">Подготовка необходимых документов и&nbsp;подача заявления
                                    о&nbsp;признании
                                    гражданина банкротом.
                                </div>
                            </div>
                        </div>
                        <div className="item-allowance">
                            <div className="item-allowance__num">2/</div>
                            <div className="item-allowance__text">Особенности взаимодействия с финансовым управляющим,
                                назначенным арбитражным судом.
                            </div>
                        </div>
                        <div className="item-allowance">
                            <div className="item-allowance__num">3/</div>
                            <div className="item-allowance__text">Формирование реестра требований кредиторов и проведение
                                собрания кредиторов
                            </div>
                        </div>
                        <div className="item-allowance">
                            <div className="item-allowance__num">4/</div>
                            <div className="item-allowance__text">Разработка и утверждение плана реструктуризации долгов или
                                реализация имущества
                            </div>
                        </div>
                        <div className="item-allowance">
                            <div className="item-allowance__num">5/</div>
                            <div className="item-allowance__text">Завершение процедуры банкротства и получение финансового
                                освобождения.
                            </div>
                        </div>
                    </div>
                    <div className="allowance__warning warning-block">
                        <div className="warning-block__text title title_h3">
                            Пособие будет полезно как гражданам, впервые сталкивающимся с процедурой банкротства, так и тем,
                            кто желает самостоятельно пройти этот процесс, сэкономив на услугах юристов.
                        </div>
                        <div className="warning-block__action">
                            <a className="button button_green icon_download" href="">Скачать пособие</a>
                            <a className="button" href="">Начать процедуру банкротства</a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    </>
}