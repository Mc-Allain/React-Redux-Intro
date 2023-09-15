const redux = require('redux');
const { configureStore } = require('@reduxjs/toolkit');
const createStore = redux.legacy_createStore;

/** ACTIONS */

const GO_UP = 'GO_UP';
const GO_DOWN = 'GO_DOWN';
const GO_LEFT = 'GO_LEFT';
const GO_RIGHT = 'GO_RIGHT';

const goUp = () => {
    return {
        type: GO_UP,
        description: 'Go Upward',
    }
}

const goDown = () => {
    return {
        type: GO_DOWN,
        description: 'Go Downward',
    }
}

const goLeft = () => {
    return {
        type: GO_LEFT,
        description: 'Go Left Side',
    }
}

const goRight = () => {
    return {
        type: GO_RIGHT,
        description: 'Go Right Side',
    }
}

/** REDUCERS */

const gridPositionState = {
    x: 0,
    y: 0,
    action: {},
};

const reducer = (state = gridPositionState, action) => {
    switch (action.type) {
        case GO_UP: return {
                ...state,
                y: state.y + 1,
                action: action,
            }

        case GO_DOWN: return {
                ...state,
                y: state.y - 1,
                action: action,
            }

        case GO_LEFT: return {
                ...state,
                x: state.x - 1,
                action: action,
            }

        case GO_RIGHT: return {
                ...state,
                x: state.x + 1,
                action: action,
            }

        default: return state
    }
}

/** REDUX STORE */

const store = createStore(reducer);
console.log('Initial state', store.getState());
const storeSubscription = store.subscribe(() => console.log('State updated', store.getState()));
store.dispatch(goUp());
store.dispatch(goUp());
store.dispatch(goRight());
store.dispatch(goDown());
store.dispatch(goLeft());
store.dispatch(goLeft());
store.dispatch(goDown());
store.dispatch(goDown());
store.dispatch(goRight());
store.dispatch(goUp());
storeSubscription();