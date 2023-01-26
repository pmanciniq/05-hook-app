const initialState = [{
    id: 1,
    todo: 'Recolectar la piedra del Alma',
    done: false
}];

const todoReducer = (state = initialState, action = {}) => {

    if (action.type === '[TODO] add todo') {
        return [ ...state,action.payload ]
    }

    return state;
};

const todos = todoReducer();

const newTodo = {
    id: 2,
    todo: 'Recolectar la piedra del poder',
    done: false
}

let addTodoAction = {
    type: '[TODO] add todo',
    payload: newTodo
}