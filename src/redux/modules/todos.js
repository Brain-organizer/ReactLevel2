const ADD_TODO = "create_todo";
const DELETE_TODO = 'remove_todo';
const TOGGLE_STATE_TODO = 'toggle_todo';

const initialTodos = [
  {
    id: 0,
    title: '리액트 공부',
    content: '열심히 하자',
    isDone: false,
  },

  {
    id: 1,
    title: '자바스크립트 공부',
    content: '열심히 하자',
    isDone: false,
  }
]


export const addToDo = (title, content) =>{
    return {
        type:ADD_TODO,
        payload:{
          id: Date.now(),
          title,
          content,
          isDone: false
        }
    }
}

export const deleteToDo = (id) =>{
    return {
        type:DELETE_TODO,
        payload: id
    }
}

export const toggleStateToDo = (id) =>{
    return {
        type:TOGGLE_STATE_TODO,
        payload:id
    }
}

const todos = (state = initialTodos, action) => {
  switch(action.type){
    case ADD_TODO:
      const newTodo = action.payload
      return [...state, newTodo]; 
    
    case DELETE_TODO:
      const deleteTargetId = +action.payload;
      return state.filter((item) => item.id!==deleteTargetId);
    
    case TOGGLE_STATE_TODO:
      const toggleTargetId = +action.payload;
      return state.map((item) => item.id===toggleTargetId? {...item, isDone:!item.isDone} : item);

    default:
      return state;
  }
}

export default todos;