import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	value: 0,
};

export const homeSlide = createSlice({
	name: "home",
	initialState: {
		url: {},
		genres: {},
	},
	reducers: {
		getApiConfiguration: (state, action) => {
			state.url = action.payload;
		},
		getGenres: (state, action) => {
			state.genres = action.payload;
		},
	},
});

// export actions   
export const { getApiConfiguration, getGenres } = homeSlide.actions;

export default homeSlide.reducer;
