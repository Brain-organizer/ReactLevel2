import React from 'react'
import { TextNameBox, ToDoListContainer } from "../styles/Home.style"
import { useSelector } from 'react-redux'
import ToDoCard from './ToDoCard';

function ToDoList({title, isDone}) {
  const todos = useSelector((state) => state.todos);

  return (
    <div style={{ padding: '0px 20px' }}>
        <TextNameBox>{title}</TextNameBox> 
        {/*박스들 모음*/}
        <ToDoListContainer>
        {
          todos
          .filter((todo)=>todo.isDone===isDone)
          .map((todo) => <ToDoCard key={todo.id} todo={todo}/>)
        }
        </ToDoListContainer>
    </div>
  )
}

export default ToDoList