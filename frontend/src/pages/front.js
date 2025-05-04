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
            <p>Hello, I'm</p>
            <p className="hello-name">Manimozhiyan</p>
            <p className="hello-resume">And this is my resume</p>
            </div>
        </div>    
        </div>

       
      
      
      
      
      
      
      
      </div>
        </>
    );
}
export default Front;