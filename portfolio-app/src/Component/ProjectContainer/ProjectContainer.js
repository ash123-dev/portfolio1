import React from 'react';
import{Element} from 'react-scroll';
import Project from '../Projects/Project'

function ProjectContainer() {
const projects=[{
    img:"https://www.google.com/search?q=images+hd&sxsrf=AJOqlzWOvgdhJPUc7g_BB7xFtEju5Yh7qA:1678680207209&source=lnms&tbm=isch&sa=X&ved=2ahUKEwi0v8SLg9j9AhUK4XMBHVylBhUQ_AUoAXoECAEQAw&biw=1366&bih=625&dpr=1#imgrc=qzvZNraHWUqcwM",
    title:"project"  ,
    descr: "This is My First Project",
    link:"www.google.com"
}
    ,{
        img:"https://www.google.com/search?q=images+hd&sxsrf=AJOqlzWOvgdhJPUc7g_BB7xFtEju5Yh7qA:1678680207209&source=lnms&tbm=isch&sa=X&ved=2ahUKEwi0v8SLg9j9AhUK4XMBHVylBhUQ_AUoAXoECAEQAw&biw=1366&bih=625&dpr=1#imgrc=qzvZNraHWUqcwM",
        title:"project"  ,
        descr: "This is My First Project",
        link:"www.google.com"
    }
    ,{
        img:"https://www.google.com/search?q=images+hd&sxsrf=AJOqlzWOvgdhJPUc7g_BB7xFtEju5Yh7qA:1678680207209&source=lnms&tbm=isch&sa=X&ved=2ahUKEwi0v8SLg9j9AhUK4XMBHVylBhUQ_AUoAXoECAEQAw&biw=1366&bih=625&dpr=1#imgrc=qzvZNraHWUqcwM",
        title:"project"  ,
        descr: "This is My First Project",
        link:"www.google.com"
    }
    ,{
        img:"https://www.google.com/search?q=images+hd&sxsrf=AJOqlzWOvgdhJPUc7g_BB7xFtEju5Yh7qA:1678680207209&source=lnms&tbm=isch&sa=X&ved=2ahUKEwi0v8SLg9j9AhUK4XMBHVylBhUQ_AUoAXoECAEQAw&biw=1366&bih=625&dpr=1#imgrc=qzvZNraHWUqcwM",
        title:"project"  ,
        descr: "This is My First Project",
        link:"www.google.com"
    }
    ,{
        img:"https://www.google.com/search?q=images+hd&sxsrf=AJOqlzWOvgdhJPUc7g_BB7xFtEju5Yh7qA:1678680207209&source=lnms&tbm=isch&sa=X&ved=2ahUKEwi0v8SLg9j9AhUK4XMBHVylBhUQ_AUoAXoECAEQAw&biw=1366&bih=625&dpr=1#imgrc=qzvZNraHWUqcwM",
        title:"project"  ,
        descr: "This is My First Project",
        link:"www.google.com"
    },
    {
        img:"https://www.google.com/search?q=images+hd&sxsrf=AJOqlzWOvgdhJPUc7g_BB7xFtEju5Yh7qA:1678680207209&source=lnms&tbm=isch&sa=X&ved=2ahUKEwi0v8SLg9j9AhUK4XMBHVylBhUQ_AUoAXoECAEQAw&biw=1366&bih=625&dpr=1#imgrc=qzvZNraHWUqcwM",
        title:"project"  ,
        descr: "This is My First Project",
        link:"www.google.com"
    }]

  return (
    <Element className='projectcontainer__projects' id='project'>
        <h1>Projects</h1>
        <p>These are my project </p>
        <div>
      {
        projects.map((project,index)=>{
            return(
                <Project key={index} img={project.img} title={project.title} descr={project.descr} link={project.link}/>
            )
        })
}
        </div>
    </Element>
  )
}

export default ProjectContainer