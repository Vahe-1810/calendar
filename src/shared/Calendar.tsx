import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { ICalendar } from "../types/interfaces";
import { useAppDispatch, useAppSelector } from "../redux";
import { setCurrentDate } from "../redux/slices/dateSlice";

export default function Calendar({ month, from }: ICalendar) {
  const dispatch = useAppDispatch();
  const currentDate = useAppSelector((s) => s.date.currentDate);
  const isFromSide = from === "side";
  const isToday = month === dayjs().month() && from === "yearTable";

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DateCalendar"]}>
        <DemoItem>
          {isFromSide ? (
            <DateCalendar
              showDaysOutsideCurrentMonth
              value={dayjs(currentDate)}
              onChange={(e) => dispatch(setCurrentDate(e?.toString()!))}
            />
          ) : (
            <DateCalendar
              minDate={dayjs(currentDate).month(month).startOf("month")}
              maxDate={dayjs(currentDate).month(month).endOf("month")}
              value={isToday ? dayjs().month(month) : null}
              onChange={(e) => dispatch(setCurrentDate(e?.toString()!))}
            />
          )}
        </DemoItem>
      </DemoContainer>
    </LocalizationProvider>
  );
}
