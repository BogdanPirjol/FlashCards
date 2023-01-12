import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
    name: 'cards',
    initialState: {
        cards: {}
    },
    reducers: {
        addCard: (state, action) => {
            state.cards[action.payload.id] = {
                id: action.payload.id,
                front: action.payload.front,
                back: action.payload.back
            }
        }
    }
});

export const selectCards = state => state.cards;
export const { addCard } = slice.actions;
export default slice.reducer; 