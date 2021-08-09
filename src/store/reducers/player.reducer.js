import Player from '~src/models/Player.model.js';
import ACTIONS from '~src/store/actions.js';

let initialState = new Player({
    name: '',
    highest_score = 0
});

const playerReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTIONS.EDIT_PLAYER_NAME:
            let updatedState = [...state];
            updatedState.name = action.payload;
            return updatedState;

        case ACTIONS.EDIT_PLAYER_HIGHEST_SCORE:
            let updatedState = [...state];
            updatedState.highest_score = action.payload;
            return updatedState;
        default:
            return state;
    }
}

export default playerReducer;