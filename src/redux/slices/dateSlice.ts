import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { DateType, IDateSlice } from "../../types/interfaces";
import dayjs from "dayjs";

const initialState: IDateSlice = {
  type: "month",
  currentDate: dayjs().toString(),
};

const dateSlice = createSlice({
  name: "date",
  initialState,
  reducers: {
    setDateType: (state, { payload }: PayloadAction<DateType>) => {
      state.type = payload;
    },
    setCurrentDate: (
      state,
      { payload }: PayloadAction<typeof initialState.currentDate>
    ) => {
      state.currentDate = payload;
    },
  },
});

export const { setDateType, setCurrentDate } = dateSlice.actions;
export default dateSlice.reducer;
