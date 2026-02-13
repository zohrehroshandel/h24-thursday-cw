import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface Userstate {
	isLoggedIn: boolean;
	username: string;
}
const initialState: Userstate = {
	isLoggedIn: false,
	username: "",
};
const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		login: (state: Userstate, action: PayloadAction<string>) => {
			state.isLoggedIn = true;
			state.username = action.payload;
		},
    	logout: (state: Userstate) => {
			state.isLoggedIn = false;
			state.username = "";
		},
	},
});
export const{login,logout}=userSlice.actions
export default userSlice.reducer