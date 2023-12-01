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
  const isToday = month === dayjs().month() && from === "yearTable";
  const isFromSide = from === "side";

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DateCalendar"]}>
        <DemoItem>
          {isFromSide ? (
            <DateCalendar
              value={dayjs(currentDate)}
              onChange={(e) => dispatch(setCurrentDate(e?.toString()!))}
            />
          ) : (
            <DateCalendar
              minDate={dayjs().month(month as number)}
              maxDate={dayjs()
                .month(month as number)
                .endOf("month")}
              focusedView={"day"}
              value={isToday ? dayjs().month(month as number) : null}
              onChange={(e) => dispatch(setCurrentDate(e?.toString()!))}
              views={["day", "month"]}
            />
          )}
        </DemoItem>
      </DemoContainer>
    </LocalizationProvider>
  );
}
