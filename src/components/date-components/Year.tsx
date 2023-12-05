import Calendar from "../../shared/Calendar";

export const Year = () => (
  <div className="table table-year">
    {Array(12)
      .fill("")
      .map((_, i) => (
        <Calendar key={i} month={i} from="yearTable" />
      ))}
  </div>
);
