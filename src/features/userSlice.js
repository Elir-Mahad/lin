import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
	name: "user",
	initialState: {
		user: null
	},
	reducers: {
		login: (state, action) => {
			// when you login
			state.value = action.payload;
			//
		},
		logout: (state) => {
			// when you log out
			state.user = null;
			// user will get set to null
		}
	}
});

export const { login, logout } = userSlice.actions;

export const selectUser = (state) => state.user.value;

export default userSlice.reducer;

// IMPORTANT: After making all the necessary changes to this document.
// Go into the browser redux dev tools extension, click on state,
// and if everything is working well, then the result should look like
// the image 'reduxcheckdevtools'
