import { HOURS, WEEKDAYS } from "../constants";
import { DateType } from "../types/interfaces";
import Calendar from "./Calendar";
import "./index.css";

const Day = () => (
  <>
    <div className="table-head"></div>
    <div className="table">
      {HOURS.map((h) => (
        <div className="table-col" key={h}>
          <div className="hour">{h}</div>
          <hr />
        </div>
      ))}
    </div>
  </>
);

const Month = () => (
  <div className="table month">
    {Array(6)
      .fill("")
      .map((_, i) => (
        <div className="month-row" key={i}>
          {WEEKDAYS.map((v, j) => (
            <div className="month-day" key={j}>
              {i === 0 && <div>{v}</div>}
              <div>1</div>
            </div>
          ))}
        </div>
      ))}
  </div>
);

const Week = () => (
  <>
    <div className="table-head">
      {WEEKDAYS.map((d) => (
        <div className="week-days" key={d}>
          <h4>{d}</h4>
          <h1>26</h1>
        </div>
      ))}
    </div>
    <div className="table">
      {HOURS.map((h) => (
        <div className="table-col" key={h}>
          <div className="hour">{h}</div>
          {Array(7)
            .fill("")
            .map((v, i) => (
              <div key={i} className="table-row">
                {v}
              </div>
            ))}
          <hr />
        </div>
      ))}
    </div>
  </>
);

const Year = () => (
  <div className="table table-year">
    {Array(12)
      .fill("")
      .map((_, i) => (
        <Calendar key={i} month={i} from="yearTable" />
      ))}
  </div>
);

const tables: Record<DateType, JSX.Element> = {
  day: <Day />,
  month: <Month />,
  week: <Week />,
  year: <Year />,
};

export default function DateTable({ type }: { type: DateType }) {
  return tables[type];
}
