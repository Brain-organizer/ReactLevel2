import { useNavigate, useParams } from "react-router-dom";
import { DetailContainer } from "../styles/SubPage.style"
import { useSelector } from "react-redux";
import { ContentBox, TitleBox, HeaderContainer, BigButton } from "../styles/Global.style";

function DetailTodoCard() {
    const id = useParams().id;
    const todos = useSelector((state) =>state.todos);
    const targetTodo = todos.find((todo)=> todo.id === +id);
    const navigate = useNavigate();
    
  return (
    <DetailContainer>
        <HeaderContainer $borderstyle="none">
          <div>id: {id}</div>
          <BigButton onClick={()=>navigate('/')} $bgcolor='transparent' $bordercolor='green'>이전으로</BigButton>
        </HeaderContainer>
        <div>
          <TitleBox $marginstyle="20px">
            {targetTodo.title}
          </TitleBox>
          <ContentBox>
            {targetTodo.content}
          </ContentBox>
        </div>
    </DetailContainer >
  )
}

export default DetailTodoCard