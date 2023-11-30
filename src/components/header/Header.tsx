import "./Header.css";
import icon from "../../assets/calendar_30_2x.png";

const Header = () => {
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
            <h2 className="header-title">8 November 2023</h2>
          </div>
          <div className="date-select">
            <select name="date" id="select">
              <option value="Day">Day</option>
              <option value="Week">Week</option>
              <option value="Month">Month</option>
            </select>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
