import { BigButton } from "../styles/Global.style"
import { AddTodoContainer, InputBox, InputNameBox, InputTextContainer } from "../styles/Home.style"

function TodoAdder() {
  return (
    <AddTodoContainer>
      <InputTextContainer>
        <InputNameBox>제목</InputNameBox>
        <InputBox/>
        <InputNameBox>내용</InputNameBox>
        <InputBox/>
      </InputTextContainer>
      <BigButton bgColor='white' borderColor='darkgreen'>추가하기</BigButton>
    </AddTodoContainer>
  )
}

export default TodoAdder