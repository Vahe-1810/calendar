import dayjs from "dayjs";

export type DateType = "day" | "month" | "week" | "year";

export interface IDateSlice {
  type: DateType;
  currentDate: string;
}

export interface ICalendar {
  month: dayjs.ConfigType;
  from: "side" | "yearTable";
}
