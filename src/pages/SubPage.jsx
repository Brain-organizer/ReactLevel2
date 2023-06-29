import { useSelector } from 'react-redux';
import {useParams} from 'react-router-dom';
import { BodyContainer, Button, ContentBox, DetailContainer, HeaderContainer, TitleBox, TodoLayout } from '../styles/stylecomponents';


function SubPage() {
  const id = useParams().id;
  const todos = useSelector((state) =>state.todos);
  
  const targetTodo = todos.find((todo)=> todo.id === +id);
  
  return (
    <TodoLayout>
      <DetailContainer>
        <HeaderContainer>
          <div>id: {id}</div>
          <Button>이전으로</Button>
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
    </TodoLayout>
  )
}

export default SubPage