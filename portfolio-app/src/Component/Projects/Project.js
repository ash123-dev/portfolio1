import React, { useState } from 'react'

function Project(img,title,descr,link) {
 const [show,setShow]=useState(false);

  return (
<a href={link}>
    <div className='project' onMouseEnter={()=>setShow(true)} onMouseLeave={()=>setShow(false)}>
{
        show?(
            <div>
                <h4>{title}</h4>
                <p>{descr}</p>
            </div>
        ):(
            <img src={img} alt=""/>
        )
}


    </div>
</a>

   
  )
}

export default Project