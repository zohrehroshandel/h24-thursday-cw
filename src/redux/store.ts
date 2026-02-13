import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import counterSlice from "./reducer/reducerCounter";
import userSlice from "./reducer/reducerGreeting";
import themeSlice from "./reducer/reducerTheme";

const persistConfig = {
	key: "root",
	storage,
	whiteList: ["user"],
};
const rootReducer = combineReducers({
	user: userSlice,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
	reducer: {
		counter: counterSlice,
		theme: themeSlice,
		user: persistedReducer,
	},
});
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
