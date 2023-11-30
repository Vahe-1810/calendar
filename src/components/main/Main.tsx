import Calendar from "../../shared/Calendar";
import DateTable from "../../shared/DateTable";
import "./Main.css";

const Main = () => {
  return (
    <main>
      <div className="left-side">
        <Calendar />
      </div>
      <div className="right-side">
        <DateTable type="day" />
      </div>
    </main>
  );
};

export default Main;
