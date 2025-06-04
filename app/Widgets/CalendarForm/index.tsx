import { Datepicker } from "~/Components/Datepicker";
import styles from './CalendarForm.module.css';
import { useGetScheduleQuery } from "~/Service/schedule.api";
import type { IScheduleEventState } from "~/Models";
import { useEffect, useState } from "react";
import { Skeleton } from "~/Components/Skeleton";
import { CalendarFormSkeleton } from "~/Components/Skeleton/CalendarFormSkeleton";


export const CalendarForm = () => {
    const [schedule, setSchedule] = useState<IScheduleEventState[]>();
    const { data, isLoading } = useGetScheduleQuery();
    console.log(data)

    useEffect(() => {
        if (data?.success) {
            setSchedule(data.data.events);
        }

    }, [data]);

    return <div className={`${styles.scheduleMain} "schedule-container"`}>
        <div className={styles.form}>
            {isLoading && <CalendarFormSkeleton />}
            {schedule?.map((event) => <Datepicker label={event.title} id={event.id} />)}
            {/* <Datepicker label="Дата оплаты депозита" />
            <Datepicker label="Дата отправки в суд" />
            <Datepicker label="Дата признания банкротом" />
            <Datepicker label="Дата заседания" />
            <Datepicker label="Дата завершения" /> */}
        </div>
    </div>
}