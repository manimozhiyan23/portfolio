import "../styles/front.css";
import profil from "../images/profil.png"
function Front(){
    return(
        <>
        <div>
        <div className="whole">
          <div className="nav">
            <p>Home</p>
            <p>About</p>
            <p>Edu & Exp</p>
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
        <div className="about">
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

       
      
      
      
      
      
      
      
      </div>
        </>
    );
}
export default Front;