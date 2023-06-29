import React from 'react'
import MainHeader from '../components/MainHeader'
import { TodoLayout } from '../styles/Global.style'
import TodoAdder from '../components/TodoAdder'

function Home() {
  return (
    <TodoLayout>
      <MainHeader/>
      <TodoAdder/>
    </TodoLayout>
    
  )
}

export default Home