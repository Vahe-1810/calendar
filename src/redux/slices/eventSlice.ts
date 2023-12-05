import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Event, IEventSlice } from "../../types/interfaces";

const initialState: IEventSlice = {
  events: [],
  open: false,
  currentEventDate: null,
  currentId: null,
};

const eventSlice = createSlice({
  initialState,
  name: "event",
  reducers: {
    addNewEvent(state, { payload }: PayloadAction<Event>) {
      state.events = [...state.events, payload];
    },

    editEvent(state, { payload }: PayloadAction<Event>) {
      state.events = state.events.map((ev) =>
        ev.id === payload.id ? { ...ev, ...payload } : ev
      );
    },

    openModal(state) {
      state.open = true;
    },

    closeModal(state) {
      state.open = false;
    },

    setEventDate(state, { payload }: PayloadAction<string | null>) {
      state.currentEventDate = payload;
    },

    setId(state, { payload }: PayloadAction<typeof initialState.currentId>) {
      state.currentId = payload;
    },

    editTime(state, { payload }: PayloadAction<Event>) {
      state.events = state.events.map((e) =>
        e.id === payload.id ? payload : e
      );
    },
  },
});

export const {
  addNewEvent,
  openModal,
  closeModal,
  setEventDate,
  setId,
  editEvent,
  editTime,
} = eventSlice.actions;

export default eventSlice.reducer;
