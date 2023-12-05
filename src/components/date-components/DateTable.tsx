import { DateType } from "../../types/interfaces";
import { Day } from "./Day";
import { Month } from "./Month";
import { Week } from "./Week";
import { Year } from "./Year";
import "./index.css";

const tables: Record<DateType, JSX.Element> = {
  day: <Day />,
  month: <Month />,
  week: <Week />,
  year: <Year />,
};

export default function DateTable({ type }: { type: DateType }) {
  return tables[type];
}
