import { styled } from "styled-components";

export const TodoLayout = styled.div`
  margin: 10px auto;
  max-width: 1200px;
  min-width: 800px;
`

export const DetailContainer = styled.div`
  width: 400px;
  height: 300px;
  border: 3px solid green;
  border-radius: 10px;
  margin: auto;
  margin-top: 20%;
  padding: 15px;
  gap: 10px;
`
export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Button = styled.button`
  width: 100px;
  height: 40px;
  display: flex;
  background-color: transparent;
  justify-content: center;
  align-items: center;
  border: 2px solid rgb(127,255,0);
  border-radius: 5px;
`

export const TitleBox = styled.div`
  margin: 20px 0px;
  font-weight: bold;
  font-size: 25px;
`

export const ContentBox = styled.div`
  font-size: 15px;
`

