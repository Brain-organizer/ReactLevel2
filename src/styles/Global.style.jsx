import { styled } from "styled-components";

export const TodoLayout = styled.div`
  margin: 10px auto;
  max-width: 1200px;
  min-width: 800px;
`

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px ${(props) => props.borderStyle} gray;
  border-radius: 5px;
  padding: 10px;
`

export const TitleBox = styled.div`
  margin: 20px 0px;
  font-weight: bold;
  font-size: 25px;
`

export const ContentBox = styled.div`
  font-size: 15px;
`
