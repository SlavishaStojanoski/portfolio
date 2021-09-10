import React from 'react';
import ButtonGoUp from './ButtonGoUp';
import '../Styles/skills.css';

const Skills = () => {
  return (
    <div className='sec' id='Skills'>
      {/* <ButtonGoUp /> */}
      <div className='secSkills'>
        <div className='edu'>
          <h2 className='font-effect-3d'>Education</h2>
          <ul>
            <label className='faculty'>Faculty</label>
            {/* CSS Efect for first link */}
            <a href='https://www.seeu.edu.mk/en/faculties/cst' className='link'>
              <span class='mask'>
                <div class='link-container'>
                  <li class='link-title1 title'>
                    Contemporary Computer Science at "South East European
                    University (SEEU)"
                  </li>
                  <li class='link-title2 title'>
                    Contemporary Computer Science at "South East European
                    University (SEEU)"
                  </li>
                </div>
              </span>
            </a>
            <label className='faculty'>Courses</label>
            <a
              href='https://semosedu.com.mk/Home_page/Education/MS_Office/IT_Pro_and_Developer/Open_Source/Package_FullStack.aspx'
              target='blank'
            >
              <li className='hoverLinks'>
                FullStack JavaScript Developer - Semos Education
              </li>
            </a>
            <a
              href='https://www.udemy.com/course/the-complete-web-developer-course-2/'
              target='blank'
            >
              <li className='hoverLinks'>
                The Complete Web Developer Course 2.0 - Udemy (online course)
              </li>
            </a>
            <a
              href='https://www.udemy.com/course/the-complete-javascript-course/'
              target='blank'
            >
              <li className='hoverLinks'>
                The complete JavaScript course from zero to Exprert - Udemy
                (online course)
              </li>
            </a>
            <a
              href='https://www.udemy.com/course/wordpress-for-beginners-create-a-website-blog-step-by-step/'
              target='blank'
            >
              <li className='hoverLinks'>WordPress - Udemy (online course)</li>
            </a>
          </ul>
        </div>
        <div className='skills'>
          <h2 className='font-effect-3d'>Skills</h2>
          <div className='skillsFlex'>
            <div className='ttt'>
              <p>HTML</p>
              <p>CSS</p>
              <p>Bootstrap</p>
            </div>
            <div className='ttt'>
              <p>JavaScript</p>
              <p>React.js</p>
              <p>Node.js</p>
            </div>
            <div className='ttt'>
              <p>WordPress</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
