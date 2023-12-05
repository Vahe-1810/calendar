import dayjs from "dayjs";
import { useAppDispatch, useAppSelector } from "../../redux";
import { setCurrentDate, setDateType } from "../../redux/slices/dateSlice";
import { DateCalendar, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

export const Month = () => {
  const currentDate = useAppSelector((s) => s.date.currentDate);
  const dispatch = useAppDispatch();

  const handleChangeDate = (e: dayjs.Dayjs | null) => {
    dispatch(setCurrentDate(e?.toString()!));
    dispatch(setDateType("day"));
  };

  return (
    <div className="table month">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar
          showDaysOutsideCurrentMonth
          fixedWeekNumber={6}
          value={dayjs(currentDate)}
          onChange={handleChangeDate}
        />
      </LocalizationProvider>
    </div>
  );
};
