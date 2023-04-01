



import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import '../Style/comp1.css'

function Comp1() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://panorbit.in/api/users.json"
      );
      const data = await response.json();
      setUsers(data.users);
    };

    fetchData();
  }, []);

  return (
    <div className="a1" >
      <div className="a11" style={{ overflow: "scroll" }}>
        <div className="a32">
        <h1>Select an account</h1>
        </div>
        <hr />
      
      <div className="a22">
        {users.map((user) => (
          <Link to={`/users/${user.id}`}>
            <div className="a2">

              <div className="a4">
                <img height={50} width={50} src={user.profilepicture} alt="" />                     
              </div>
              <div className="a3">                    
                        <h5>{user.name}</h5>
              </div>
             
            
            </div>
            {/* <hr /> */}


          </Link>
        ))}
      </div>
      </div>

    </div>
  );
}
export default Comp1;