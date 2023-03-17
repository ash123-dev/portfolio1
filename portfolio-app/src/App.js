import React from 'react'
import { Header } from './Component/Header/Header';
import TopContainer from './Component/Container/TopContainer';
import SkillContainer from './Component/SkillContainer/SkillContainer';
import ProjectContainer from './Component/ProjectContainer/ProjectContainer';

function App() {
  return (
    <div>
      <Header/>
      <TopContainer/>
     <SkillContainer/>
     <ProjectContainer/>
    </div>
  )
}

export default App