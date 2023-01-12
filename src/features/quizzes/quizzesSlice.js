import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: 'quizzes',
    initialState: {
        quizzes: {

        }
    },
    reducers:{
        addQuizz: (state, action) => {
            state.quizzes[action.payload.id] = {
                id: action.payload.id,
                topicId: action.payload.topicId,
                name: action.payload.name,
                cardIds: action.payload.cardIds
            }
        }
    }
});

export const selectQuizzes = state => state.quizzes;
export const { addQuizz } = slice.actions;
export default slice.reducer;