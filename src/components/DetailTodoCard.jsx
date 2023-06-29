import { useNavigate, useParams } from "react-router-dom";
import { Button, ContentBox, DetailContainer, HeaderContainer, TitleBox } from "../styles/stylecomponents"
import { useSelector } from "react-redux";

function DetailTodoCard() {
    const id = useParams().id;
    const todos = useSelector((state) =>state.todos);
    const targetTodo = todos.find((todo)=> todo.id === +id);
    const navigate = useNavigate();
    
  return (
    <DetailContainer>
        <HeaderContainer>
          <div>id: {id}</div>
          <Button onClick={()=>navigate('/')}>이전으로</Button>
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