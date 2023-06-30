import { styled } from "styled-components";

export const AddTodoContainer = styled.div`
  display: flex;
  background-color: rgba(0,0,0,0.1);
  border-radius: 10px;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  height: 80px;
`

export const InputTextContainer = styled.div`
  align-items: center;
  display: flex;
  gap: 10px;
`

export const InputNameBox = styled.div`
  text-align: center;
  font-size: 15px;
  font-weight: bold;
`

export const InputBox = styled.input`
  border: none;
  border-radius: 10px;
  height: 40px;
  width: 240px;
  font-size: 30px;
` 

//TodDoList Components css//

//Working.... Done...
export const TextNameBox = styled.div`
  font-weight: bold;
  font-size: 30px;
  padding: 20px 0;
`

export const ToDoListContainer = styled.div`
  display: flex;
  flex-wrap: wrap; 
  gap: 10px; 
  width: 100%; 
  margin-bottom: 20px;
`

//작은 박스들,, 타이틀하고 내용 들어가는..
export const ToDoItemContainer = styled.div`
  width: 250px;
  height: 150px;
  padding: 20px;
  border: 4px solid palevioletred;
  border-radius: 10px;
`

//상세보기div
export const GoToDetailBox = styled.div`
  font-size: 13px;
`
  
//텍스트만 모아놓는 div
export const ToDoTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-bottom: 10px;
`

//버튼만 모아놓는 div
export const SmallButtonContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`
export const SmallButton = styled.button`
  width: 120px;
  height: 40px;

  background-color: transparent;
  border: 2px solid ${({$bordercolor})=>$bordercolor};
  border-radius: 10px;
`