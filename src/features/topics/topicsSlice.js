import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

export const topicsSlice = createSlice({
    name: 'topics',
    initialState: {
        topics: {}
    },
    reducers: {
        addTopic: (state, action) => {
            const id = uuidv4();
            const { name, icon } = action.payload;
            state.topics[id] = {
                id,
                name,
                icon,
                quizIds: []
            };
        }
    }
});

export const selectTopics = (state) => state.topics.topics;

export const { addTopic } = topicsSlice.actions;
export default topicsSlice.reducer;