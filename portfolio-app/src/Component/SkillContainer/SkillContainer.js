import React from 'react';
import {Element} from 'react-scroll';
import skillset from '../../Assets/skill.jpg';
import ProgressBar from "@ramonak/react-progress-bar";
import './SkillContainer.css';
function SkillContainer() {
  return (<>
 <Element className='skillcontainer' id="skills">
    <div className='skillcontainer_image'>
<img src={skillset} alt=""width="600px" />
</div>
<div className='skillcontainer__text'>
  <h2>SKILLSET</h2>
  <div className='skillcontainer_skillset'>
  <h5>React</h5>
  <div className='skillcontainer__slider skillcontainer__slider1'>
  <ProgressBar completed={70} maxCompleted={100}/>
  </div>
  </div>

  <div className='skillcontainer_skillset'>
  <h5>Java</h5>
  <div className='skillcontainer__slider skillcontainer__slider1'>
  <ProgressBar completed={70} maxCompleted={100}/>
  </div>
  </div>

  <div className='skillcontainer_skillset'>
  <h5>Spring Boot</h5>
  <div className='skillcontainer__slider skillcontainer__slider1'>
  <ProgressBar completed={60} maxCompleted={100}/>
  </div>
  </div>

  <div className='skillcontainer_skillset'>
  <h5>Html</h5>
  <div className='skillcontainer__slider skillcontainer__slider1'>
  <ProgressBar completed={90} maxCompleted={100}/>
  </div>
  </div>
</div>
 </Element>
 </>
  )
}

export default SkillContainer