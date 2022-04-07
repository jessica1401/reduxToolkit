import { createSlice, PayloadAction } from '@reduxjs/toolkit';
interface RservationState {
    values: string[]
}
const initialState: RservationState = {
    values: ['Jessica', 'Sanohit']
}
export const reservationsSlice = createSlice({
    name: "reservations",
    initialState, 
    reducers: {
        addReservations: (state, action: PayloadAction<string>) => {
             state.values.push(action.payload)
        }
    },
  });

  export const {addReservations} = reservationsSlice.actions;

  export default reservationsSlice.reducer;