import { Link } from "react-router-dom";
import '../Style/comp3.css'

const Comp3 = () => {
   

    return (  
        <div className="c1">
            <div className="b11">
        <div className="b31">
          <Link to="/">Profile</Link>
          <hr />
          <Link to="/users/coming-soon">Posts</Link>
          <hr />
          <Link to="/users/coming-soon">Gallery</Link>
          <hr />
          
          <Link to="/users/coming-soon">ToDo</Link>
          </div>
        </div>
        <div className="c33">
            <h1 id="c43">coming soon</h1>
        </div>
        

        </div>
    );
}
 
export default Comp3;