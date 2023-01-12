import { createSlice } from 'react-redux';

const topics = createSlice({
    name: 'topics',
    initialState: {
        topics: {

        }
    },
    reducers: {
        addTopic: (state, action) => {
            state.topics[action.payload.id] = {
                id: action.payload.id,
                name: action.payload.name,
                icon: action.payload.icon,
                quizIDs: []
            }
        }
    }
})


export const selectTopics = (state) => state.topics;

export const { addTopic } = topics.actions;
export default topics.reducer;