import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
interface CounterState {
value: number;
}
const initialState: CounterState = {
value: 0,
};

const counterSlice = createSlice({
name: "counter",
initialState,
reducers: {
increment: (state: CounterState) => {
state.value += 1;
},
decrement: (state: CounterState) => {
if (state.value > 0) {
state.value -= 1;
}
},
incrementByAmount: (state: CounterState, action: PayloadAction<number>) => {
state.value += action.payload;
},
reset: (state: CounterState) => {
state.value = 0;
},
},
});

export const { increment, decrement, incrementByAmount, reset } =
counterSlice.actions;
export default counterSlice.reducer;