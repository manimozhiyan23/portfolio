import "../styles/front.css";
import profil from "../images/profil.png"
import edu from "../images/edu.png";
function Front(){
    return(
        <>
        <div>
        <div className="whole">
          <div className="nav">
            <p>Home</p>
            <p>About</p>
            <p>Education</p>
            <p>Projects</p>
            <p>Contact</p>
          </div>

          <div className="home-profil">
            <div className="profil-image">
                <img src={profil}/>
            </div>
            <div className="hello">
            <p className="home-hello">Hello, I'm</p>
            <p className="hello-name">Manimozhiyan</p>
            <p className="hello-resume">And this is my resume</p>
            </div>
        </div>

        {/*    about    */}


        <div className="about">
          <div className="about-me-name">
            <p>About Me !</p>
          </div>
          <div className="about-second">
          <div className="about-left">
          <p className="about-hello">Hello!</p>
          <p className="about-name">I'M Manimozhiyan</p>
          <p className="about-me">
          I am a passionate web developer specializing
           in building modern, responsive, and user-friendly
            web applications using React. With a strong
             foundation in front-end development, I enjoy
              turning ideas into functional and visually 
              appealing digital experiences. I am skilled 
              in designing and developing portfolio websites,
               ensuring seamless performance, clean code, and
                interactive UI components. I am always eager
                 to learn new technologies and continuously
                  improve my skills to deliver high-quality
                  web solutions.
          </p>
          <div>
          <button className="about-cv-download">cv download</button>
        </div>
        </div>
        
        <div className="about-image">
                <img src={profil}/>
            </div>
          </div>
       
        </div>


{/* education and experience */}

        <div className="edu">
          <div className="edu-name">
            <p>Education</p>
          </div>

          <div className="school-college-left-photo">
          <div>
          <img src={edu}/>
          </div>
          <div className="edu-school-college-names">
          <div>
            <p>Nehru vidhyasalai Hr Sec School</p>
            <p className="edu-year">2019-2020</p>
            <p>Percentage : 70% </p>
          </div>
          <div>
            <p>Nehru vidhyasalai Hr Sec School</p>
            <p className="edu-year">2021-2022</p>
            <p>Percentage : 84%</p>
          </div>
          <div>
            <p>Ramco Institute of Technology</p>
            <p className="edu-year">2022-2026</p>
            <p>CGPA : 7.93</p>
          </div>
          </div>
          </div>
          
        </div>

        {/* hire me  */}

        <div className="freelancer-hire">
        <div className="hire-first">
          <div className="hire-freelancer">
            <p className="first-text-hire">I Am Available For Freelancer Project.</p>
          </div>
          <div>
            <p className="second-text-hire">I build modern, responsive websites that bring your ideas to life.
            With expertise in React, I create fast, user-friendly, and visually 
            appealing web solutions to help you stand out online. 
            Let's work together to make your vision a reality!</p>
          </div>
        </div>
        <div className="hire-me">
          <button>Get Hire Me!</button>
        </div>
        </div>




          

        
         
        </div>

       
      
      
      
      
      
      
      
      </div>
        </>
    );
}
export default Front;