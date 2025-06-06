import { format } from "date-fns";
import { Datepicker } from "~/Components/Datepicker";
import styles from './CalendarForm.module.css';
import type { IScheduleEventState, IUserScheduleEvent } from "~/Models";
import { useEffect, useState } from "react";
import { CalendarFormSkeleton } from "~/Components/Skeleton/CalendarFormSkeleton";
import { useLoadSchedule } from "~/Hooks/useLoadSchedule";
import { cloneDeep, getDateFromString } from "~/Utils";
import { useCreateUserEventMutation, useDeleteUserEventMutation, useUpdateUserEventMutation } from "~/Service/schedule.api";


export const CalendarForm = () => {
    const [form, setForm] = useState<IScheduleEventState[]>([]);
    const [createEvent, resultCreateEvent] = useCreateUserEventMutation();
    const [updateEvent, resultUpdateEvent] = useUpdateUserEventMutation();
    const [deleteEvent, resultDeleteEvent] = useDeleteUserEventMutation();
    const { schedule, isLoading } = useLoadSchedule();
    console.log('form', form)

    useEffect(() => {
        if (schedule) {
            setForm(schedule);
        }
    }, [schedule]);

    const updateEventDate = (id: string, date?: Date) => {
        const newForm = cloneDeep(form) as IScheduleEventState[];
        const eventToUpdate = newForm.find((event) => event.id === id);
        if (eventToUpdate) {
            if (date) {
                eventToUpdate.sendDate = format(new Date(date), 'dd.MM.yyyy');
            } else {
                eventToUpdate.sendDate = undefined;
            }
            setForm([...newForm]);
        }
    }

    const sendEventToServer = (id: string) => {
        const eventToSend = form.find((event) => event.id === id);
        if (eventToSend && eventToSend.sendDate) {
            if (!eventToSend.userEventId) {
                const dataForSend = { id: eventToSend.id, sendDate: getDateFromString(eventToSend.sendDate) };
                createEvent(dataForSend);
            } else {
                const dataForSend = { id: eventToSend.userEventId, sendDate: getDateFromString(eventToSend.sendDate) };
                updateEvent(dataForSend)
            }
        }
    }

    const deleteEventFromServer = (id: string) => {
        const eventToDelete = form.find((event) => event.id === id);
        if (eventToDelete) {
            deleteEvent({ userEventId: eventToDelete.userEventId })
            updateEventDate(id);
        }
    }

    return <div className={`${styles.scheduleMain} "schedule-container"`}>
        <div className={styles.form}>
            {isLoading && <CalendarFormSkeleton />}
            {form?.map((event) => (
                <>
                    {/**@ts-ignore */}
                    <Datepicker label={event.title} id={event.id} key={event.id} value={event.sendDate} onChange={updateEventDate} />
                    {event.sendDate && <div className="flex">
                        <button className="button button_small button_green mr-4" type="button" onClick={() => sendEventToServer(event.id)}>Сохранить</button>
                        <button className="button button_small button_red" type="button" disabled={!event.userEventId} onClick={() => deleteEventFromServer(event.id)}>Удалить</button>
                    </div>}
                </>
            ))}
        </div>
    </div>
}