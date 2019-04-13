import React, { Component } from "react";
import { connect } from "react-redux";
// import Todo from "./Todos"
// import EditComponent from "../containers/EditTodo"
import { displayFirebase, deleteTodo } from "../actions/actions";
import _ from "lodash";

class TodoList extends Component {
  componentWillMount() {
    this.props.displayFirebase();
  }

  showposts() {
    return _.map(this.props.todos, (todo, id) => {
      return (
        <div>
          <div key={id}>{todo}</div>
          {/* <div>{key}</div> */}
          <button
            onClick={() => {
              this.props.deleteTodo(id);
            }}
          >
            {" "}
            Deletetodo
          </button>
        </div>
      );
    });
  }
  render() {
    return (
      <div>
        <h4>ToodList</h4>
        {this.showposts()}
        {/* {this.props.todos.map((todo) => 
                // <div key={todo.todoid}>
                // {todo.completed ? 
                // <EditComponent todo={todo} key={todo.todoid} /> : <Todo todo={todo}key={todo.todoid} />}
                // </div>)}  
                 )} */}
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    todos: state.todos
  };
};
// const mapDispatchToProps =(dispatch)=>{
//     return {displayFirebase: dispatch(displayFirebase())
//     }
// }

export default connect(
  mapStateToProps,
  { displayFirebase, deleteTodo }
)(TodoList);
