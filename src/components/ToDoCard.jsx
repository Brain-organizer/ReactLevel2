import {SmallButton, SmallButtonContainer, ToDoItemContainer, ToDoTextContainer,GoToDetailBox } from "../styles/Home.style"
import { TitleBox, ContentBox } from "../styles/Global.style"
import { useDispatch } from "react-redux"
import { deleteToDo, toggleStateToDo } from "../redux/modules/todos";
import { useNavigate } from "react-router-dom";


function ToDoCard({todo}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <ToDoItemContainer>
      <GoToDetailBox onClick={()=>navigate(`/${todo.id}`)}>상세보기</GoToDetailBox>
      <ToDoTextContainer>
        <TitleBox $marginstyle="5px">{todo.title}</TitleBox>
        <ContentBox>{todo.content}</ContentBox>
      </ToDoTextContainer>

      <SmallButtonContainer>
        <SmallButton onClick={() => dispatch(deleteToDo(todo.id))} $bordercolor="red">삭제하기</SmallButton>
        <SmallButton onClick={()=>dispatch(toggleStateToDo(todo.id))} $bordercolor="green">{todo.isDone ? "취소!" : "완료!"}</SmallButton>
      </SmallButtonContainer>
    </ToDoItemContainer>
  )
}

export default ToDoCard