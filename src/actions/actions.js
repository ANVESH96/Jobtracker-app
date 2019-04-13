import database from "../firebase/fbconfig";
let todoId = 0;
export const DISPLAY_TODOS = "DISPLAY_TODOS";

export const addTodo = text => ({
  type: "ADD_TODO",
  text,
  todoid: todoId++
});

export const addTofirebase = text => {
  return dispatch => {
    database.ref("todos").push(text);
    // dispatch({type:addTodo,text})
  };
};
export const displayFirebase = () => {
  return dispatch => {
    database.ref("todos").on("value", snapshot => {
      dispatch({ type: DISPLAY_TODOS, payload: snapshot.val() });
    });
  };
};

export const deleteTodo = id => {
  return dispatch => {
    database
      .ref("todos")
      .child(id)
      .remove();
  };
  // type:'DELETE_TODO',
  // id
};

export const editTodo = id => ({
  type: "EDIT_TODO",
  id
});
export const UpdateTodo = (id, data) => ({
  type: "UPDATE_TODO",
  id,
  data
});
