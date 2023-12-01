import "./Header.css";
import icon from "../../assets/calendar_30_2x.png";
import { useAppDispatch, useAppSelector } from "../../redux";
import { setDateType } from "../../redux/slices/dateSlice";
import { DateType } from "../../types/interfaces";
import dayjs from "dayjs";
import a from "dayjs/plugin/localizedFormat";

dayjs.extend(a);

const Header = () => {
  const dispatch = useAppDispatch();
  const currentDate = useAppSelector((s) => s.date.currentDate);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setDateType(e.target.value as DateType));
  };

  return (
    <header>
      <div className="header-icon">
        <img width={40} height={40} src={icon} alt="" />
        <h2 className="header-title">Calendar</h2>
      </div>
      <div className="header-actions">
        <div className="header-date">
          <div className="date-actions">
            <button className="today">Today</button>
            <button className="arrow-left">⇐</button>
            <button className="arrow-right">⇒</button>
            <h2 className="header-title">{dayjs(currentDate).format("LL")}</h2>
          </div>
          <div className="date-select">
            <select name="date" id="select" onChange={handleChange}>
              <option value="year">Year</option>
              <option value="day">Day</option>
              <option value="week">Week</option>
              <option value="month">Month</option>
            </select>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
