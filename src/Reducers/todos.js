import { DISPLAY_TODOS } from "../actions/actions";
export const todos = (state = [], action) => {
  switch (action.type) {
    //  case 'ADD_TODO':
    // return [
    //   ...state,
    //   {
    //     text: action.text,
    //     completed: false,
    //     todoid:action.todoid
    //    }
    //    ];
    //    break
    case DISPLAY_TODOS:
      return action.payload;
    //     case 'DELETE_TODO':
    //     return state.filter((todo,index) => todo.todoid!== action.id);
    //     case 'EDIT_TODO':
    //     return state.map((todo)=>todo.todoid === action.id ? {...todo,completed:!todo.completed}:todo)
    //     case 'UPDATE_TODO':
    //     console.log(action.data)
    //     return state.map((todo)=>{
    //     if(todo.todoid === action.id) {
    //     return {
    //        ...todo,
    //        text:action.data.newText,
    //        completed: !todo.completed,
    //        }
    //   } else return todo;
    // })
    default:
      return state;
  }
};
