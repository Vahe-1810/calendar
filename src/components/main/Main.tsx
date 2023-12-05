import dayjs from "dayjs";
import { useAppSelector } from "../../redux";
import Calendar from "../../shared/Calendar";
import DateTable from "../date-components/DateTable";
import "./Main.css";

const Main = () => {
  const dateType = useAppSelector((state) => state.date.type);

  return (
    <main>
      <div className="left-side">
        <Calendar month={dayjs().month()} from="side" />
      </div>
      <div className="right-side">
        <DateTable type={dateType} />
      </div>
    </main>
  );
};

export default Main;
