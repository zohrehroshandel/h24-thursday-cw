import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./reducer/reducerCounter"
import themeSlice from "./reducer/reducerTheme"

export const store = configureStore({
	reducer: {
		counter: counterSlice,
    theme: themeSlice,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
