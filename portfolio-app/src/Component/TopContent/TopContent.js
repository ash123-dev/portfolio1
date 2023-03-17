import React from 'react';
import { Link } from 'react-scroll';
import './TopContent.css'
import cv from '../../Assets/Akash M_Resume.pdf'

function TopContent() {
  return (
    <div className='topcontent'>
        <div className='topcontent_container'>
        <h1>Mr.Akash</h1>
        <p>I'm a Full Stack Developer</p>
        <a href={cv}>
            <button  className='topcontent_cvbutton'>Download CV</button>
        </a>
        <Link>
        <button className='topcontent_myworkbutton'>My Work</button>
        </Link>
    </div>
    </div>
  )
}

export default TopContent