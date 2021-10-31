import Item from "../Item/Item";
const { useState, useEffect } = require("react");

const List = () => {
    const [ todos, setTodos ] = useState([]);
    const [ text, setText ] = useState([]);
  
  
    const fetchTodos = async () => {
      const res = await fetch('http://localhost:3001/todos');
      setTodos(await res.json());
    };
  
    const addTodo = async () => {
      const res = await fetch('http://localhost:3001/todos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ desc: text, done: false })
      });
  
      fetchTodos();
      setText('');
    };
  
  
    useEffect(() => {
      fetchTodos();
    }, []);
  
    const items = todos.map(todo => <Item todo={todo} key={todo._id} fetchTodos={fetchTodos} />);
  
    return <div className="ui card">
    <div className="content">
      <p className="header" style={{textAlign:'center'}}>Todo App</p>
    </div>
    <div className="content">
      <div className="ui relaxed divided list">
        {items}
      </div>
    </div>
    <div className="extra content">
      <div className="fluid ui action input">
        <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
        <button className="btn btn-success" onClick={addTodo}>
          <i className="plus icon"></i>
          add
        </button>
      </div>
    </div>
  </div>
  };

  export default List;