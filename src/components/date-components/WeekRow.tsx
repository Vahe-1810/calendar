import dayjs from "dayjs";
import { Event } from "../../types/interfaces";
import { useDrop } from "react-dnd";
import UserEvent from "../events/Event";
import { useAppDispatch, useAppSelector } from "../../redux";
import {
  editEvent,
  editTime,
  setEventDate,
} from "../../redux/slices/eventSlice";
import { DATE_FORMAT } from "../../constants";

interface IWeekRowProps {
  i: number;
  h: string;
  currEvt: Event[];
  weekDays: dayjs.Dayjs[];
  openEventField: (h: string, d: dayjs.Dayjs) => void;
  currentHour: number | false;
  minute: number;
  currentDate: string;
}

export const WeekRow = ({
  i,
  h,
  currEvt,
  weekDays,
  openEventField,
  currentHour,
  minute,
  currentDate,
}: IWeekRowProps) => {
  const dispatch = useAppDispatch();
  const [{ isDragged }, drop] = useDrop(() => ({
    accept: "event",
    drop: (item: Event) => {
      dispatch(
        editTime({
          date:
            dayjs(item.date.split("_")[0])
              .day(i)
              .hour(+h.split(" ")[0])
              .format(DATE_FORMAT + "_" + "HH") + " AM",
          id: item.id,
          title: item.title,
        })
      );
    },
    collect: (mtr) => ({
      isDragged: !!mtr.isOver(),
    }),
  }));

  return (
    <div
      key={i}
      className="table-row"
      onClick={() => openEventField(h, weekDays[i])}
      ref={drop}
      style={{ background: isDragged ? "yellow" : "" }}>
      {currEvt?.map(
        (evt) =>
          evt.date.split("_")[0] === dayjs(weekDays[i]).format(DATE_FORMAT) && (
            <UserEvent
              key={evt.id}
              title={evt.title}
              id={evt.id}
              date={evt.date}
            />
          )
      )}
      {currentHour &&
        currentHour === +h.split(" ")[0] &&
        i === dayjs(currentDate).day() && (
          <div
            className="hour-line week-line"
            style={{
              bottom: `calc(100% - ${(+minute / 60) * 100}%)`,
            }}></div>
        )}
    </div>
  );
};
