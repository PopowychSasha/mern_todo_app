const Item = (props) => {
    const { done, desc, _id } = props.todo;
  
    const deleteTodo = async () => {
      await fetch(`http://localhost:3001/todos/${_id}`, {
        method: 'DELETE'
      });
  
      props.fetchTodos();
    };
  
    const toggleDone = async () => {
      await fetch(`http://localhost:3001/todos/${_id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ done: !done, desc })
      });
  
      props.fetchTodos();
    };
  
    return <div className="item">
      {
        done ? 
          <i className="left floated green check square outline icon" onClick={toggleDone}></i> :
          <i className="left floated square outline icon" onClick={toggleDone}></i>
      }
      {desc}
      <i className="right floated red trash icon" onClick={deleteTodo}></i>
    </div>
  };

  export default Item;