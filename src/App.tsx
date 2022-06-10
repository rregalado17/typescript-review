import React, { useState } from 'react';
import './App.css';
import { InputField } from './components/InputField'
import TodoList from './components/TodoList';
import { Todo } from "./model"
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd'


const App:React.FC = () => {

  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const [completedTodos, setCompletedTodos] = useState<Todo[]>([]);
   
  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if(todo) {
      setTodos([...todos, {id: Date.now(), todo:todo, isDone: false}])
      setTodo("") 
    }
  };

  // const onDragEnd = (result:DropResult) => {
  //   console.log(result)
  // }

  
  return (
    <DragDropContext onDragEnd={() => {}}>
      <div className="App">
        <span className="heading">Taskii</span> 
        <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
        <TodoList 
          todos={todos} 
          setTodos={setTodos}
          completedTodos={completedTodos} 
          setCompletedTodos={setCompletedTodos}
        />
      </div>
    </DragDropContext>
  );
}

export default App;
