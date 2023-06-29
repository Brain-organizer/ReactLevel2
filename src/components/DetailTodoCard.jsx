import { useNavigate, useParams } from "react-router-dom";
import { ReturnHomeButton, DetailContainer } from "../styles/SubPage.style"
import { useSelector } from "react-redux";
import { ContentBox, TitleBox, HeaderContainer } from "../styles/Global.style";

function DetailTodoCard() {
    const id = useParams().id;
    const todos = useSelector((state) =>state.todos);
    const targetTodo = todos.find((todo)=> todo.id === +id);
    const navigate = useNavigate();
    
  return (
    <DetailContainer>
        <HeaderContainer borderStyle="none">
          <div>id: {id}</div>
          <ReturnHomeButton onClick={()=>navigate('/')}>이전으로</ReturnHomeButton>
        </HeaderContainer>
        <div>
          <TitleBox>
            {targetTodo.title}
          </TitleBox>
          <ContentBox>
            {targetTodo.content}
          </ContentBox>
        </div>
      </DetailContainer>
  )
}

export default DetailTodoCard