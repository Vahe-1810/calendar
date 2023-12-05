import dayjs from "dayjs";
import { useAppDispatch, useAppSelector } from "../../redux";
import { openModal, setEventDate } from "../../redux/slices/eventSlice";
import { DATE_FORMAT, HOURS } from "../../constants";
import { Row } from "./Row";

export const Day = () => {
  const dispatch = useAppDispatch();
  const currentDate = useAppSelector((s) => s.date.currentDate);
  const currentHour =
    dayjs(currentDate).format(DATE_FORMAT) === dayjs().format(DATE_FORMAT) &&
    dayjs().hour();
  const events = useAppSelector((s) => s.event.events);

  const minute = dayjs(currentDate).minute();

  const currentEvents = events.filter(
    (ev) => ev.date.split("_")[0] === dayjs(currentDate).format(DATE_FORMAT)
  );

  const openEventField = (h: string) => {
    dispatch(setEventDate(dayjs(currentDate).format(DATE_FORMAT) + "_" + h));
    dispatch(openModal());
  };

  return (
    <>
      <div className="table-head table-day-head">
        {
          <div className="week-days">
            <h1>{dayjs(currentDate).format("DD ddd")}</h1>
          </div>
        }
      </div>
      <div className="table">
        {HOURS.map((h, i) => {
          const currEvt = currentEvents.find((e) => e.date.split("_")[1] === h);

          return (
            <Row
              currEvt={currEvt}
              currentHour={currentHour}
              h={h}
              i={i}
              minute={minute}
              openEventField={openEventField}
              key={h}
            />
          );
        })}
      </div>
    </>
  );
};
