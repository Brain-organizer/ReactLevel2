import { useDispatch } from "react-redux"
import { BigButton } from "../styles/Global.style"
import { AddTodoContainer, InputBox, InputNameBox, InputTextContainer } from "../styles/Home.style"
import { useState } from "react";
import { addToDo } from "../redux/modules/todos";

function TodoAdder() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const titleOnChangeHandler = (event) => {
    setTitle(event.target.value);
  };
  const contentOnChangeHandler = (event) => {
    setContent(event.target.value);
  }
  const addButtonOnClickHandler = () => {
    dispatch(addToDo(title, content));
    setTitle('');
    setContent('');
  }

  return (
    <AddTodoContainer>
      <InputTextContainer>
        <InputNameBox htmlFor="title">제목</InputNameBox>
        <InputBox
          id="title"
          value={title}
          onChange={titleOnChangeHandler}
        />
        <InputNameBox htmlFor="content">내용</InputNameBox>
        <InputBox
          id="content"
          value={content}
          onChange={contentOnChangeHandler}
        />
      </InputTextContainer>
      <BigButton 
      onClick={addButtonOnClickHandler}
      $bgcolor='white' $bordercolor='darkgreen'>추가하기</BigButton>
    </AddTodoContainer>
  )
}

export default TodoAdder