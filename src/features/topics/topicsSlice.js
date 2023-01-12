import { createSlice } from '@reduxjs/toolkit';

const topics = createSlice({
    name: 'topics',
    initialState: {
        topics: {}
    },
    reducers: {
        addTopic: (state, action) => {
            state.topics[action.payload.id] = {
                id: action.payload.id,
                name: action.payload.name,
                icon: action.payload.icon,
                quizIds: []
            }
        },
        addQuizzId: (state, action) => {
            state.topics[action.payload.topicId].quizIds.push(action.payload.quizId);
        }
    }
});


export const selectTopics = (state) => {
    return state.topics;
};

export const { addTopic, addQuizzId } = topics.actions;
export default topics.reducer;