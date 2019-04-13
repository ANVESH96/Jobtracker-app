import React, { Component } from 'react';
import { connect } from 'react-redux';

class EditComponent extends Component {
handleEdit = (e) => {
  e.preventDefault();
  const newText = this.getTitle.value;
  const data = {
    newText,
  }
  this.props.dispatch({ type: 'UPDATE_TODO', id: this.props.todo.todoid, data: data })
}
render() {
return (
<div>
  <form onSubmit={this.handleEdit}>
    <input required type="text" ref={(input) => this.getTitle = input}
    defaultValue={this.props.todo.text}  /><br /><br />
    <button>Update</button>
  </form>
</div>
);
}
}
export default connect()(EditComponent);