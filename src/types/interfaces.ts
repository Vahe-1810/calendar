import dayjs from "dayjs";

export type DateType = "day" | "month" | "week" | "year";

export interface IDateSlice {
  type: DateType;
  currentDate: string;
}

export interface ICalendar {
  month: number;
  from: "side" | "yearTable";
}

export interface IEventSlice {
  events: Event[];
  open: boolean;
  currentEventDate: string | null;
  currentId: string | null;
}

export interface Event {
  id: string;
  title: string;
  date: string;
}
