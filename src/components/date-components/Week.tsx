import dayjs from "dayjs";
import { useAppDispatch, useAppSelector } from "../../redux";
import { openModal, setEventDate } from "../../redux/slices/eventSlice";
import { DATE_FORMAT, HOURS, WEEKDAYS } from "../../constants";
import { WeekRow } from "./WeekRow";

export const Week = () => {
  const currentDate = useAppSelector((s) => s.date.currentDate);
  const dispatch = useAppDispatch();
  const weekDays = Array(7)
    .fill("")
    .map((_, i) => dayjs(currentDate).day(i));

  const currentHour =
    dayjs(currentDate).format(DATE_FORMAT) === dayjs().format(DATE_FORMAT) &&
    dayjs().hour();

  const minute = dayjs(currentDate).minute();
  const events = useAppSelector((s) => s.event.events);
  const currentEvents = weekDays.map((wd) =>
    events.filter(
      (ev) => ev.date.split("_")[0] === dayjs(wd).format(DATE_FORMAT)
    )
  );

  const openEventField = (h: string, d: dayjs.Dayjs) => {
    dispatch(setEventDate(dayjs(d).format(DATE_FORMAT) + "_" + h));
    dispatch(openModal());
  };

  return (
    <>
      <div className="table-head">
        {weekDays.map((d, i) => (
          <div className="week-days" key={i}>
            <h4>{WEEKDAYS[i]}</h4>
            <h1>{dayjs(d).date()}</h1>
          </div>
        ))}
      </div>
      <div className="table">
        {HOURS.map((h) => {
          return (
            <div className="table-col" key={h}>
              <div className="hour">{h}</div>
              {Array(7)
                .fill("")
                .map((_, i) => {
                  const currEvt = currentEvents[i].filter(
                    (e) => e.date.split("_")[1] === h
                  );
                  return (
                    <WeekRow
                      currEvt={currEvt}
                      currentHour={currentHour}
                      currentDate={currentDate}
                      h={h}
                      i={i}
                      minute={minute}
                      openEventField={openEventField}
                      weekDays={weekDays}
                      key={i}
                    />
                  );
                })}
            </div>
          );
        })}
      </div>
    </>
  );
};
