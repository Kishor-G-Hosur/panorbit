

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import '../Style/comp2.css'

function Comp2({ }) {
  let [user, setUser] = useState({});
  let [chat, setchat] = useState([])
  let [com, setCom] = useState({});
  let [add, setAdd] = useState({});
  let [menu1, setMenu1] = useState({})
  let [menu, setMenu] = useState({})
  let { id } = useParams()

  console.log(id);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://panorbit.in/api/users.json`
      );
      const data = await response.json();
      const selectedUser = data.users.find((u) => u.id == id);
      setUser(selectedUser);
      setAdd(selectedUser.address)
      setCom(selectedUser.company)
      console.log(selectedUser)
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData1 = async () => {
      const response1 = await fetch(
        `https://panorbit.in/api/users.json`
      );
      let data1 = await response1.json()
      setchat(data1.users)

    }
    fetchData1()
  }, [])

  return (
    <div className="b1">
      <div className="b11">
        <div className="b3">
          <Link to="/">Profile</Link>
          <hr />
          <Link to="/users/coming-soon">Posts</Link>
          <hr />
          <Link to="/users/coming-soon">Gallery</Link>
          <hr />

          <Link to="/users/coming-soon">ToDo</Link>
        </div>
      </div>
      <div className="b12">
        <div className="b32">
          <h3>profile</h3>
          <hr />
        </div>

      </div>
      <div className="b2">

        <img height={200} width={200} src={user.profilepicture} alt="" />
        <p><b>{user.name}</b></p>
        <p>Username: <b>{user.username}</b></p>
        <p>Email: <b>{user.email}</b></p>
        <p>Phone: <b>{user.phone}</b></p>
        <p>Website: <b>{user.website}</b></p>
        <hr />
       
        <p>Company:{com.company}</p>
        <p>Name: <b>{com.name}</b></p>
        <p>catchphase: : <b>{com.catchPhrase}</b></p>
        <p>bs: <b>{add.zipcode}</b></p>
        
      </div>
      <hr />
      <div className="b41" onClick={() => { setMenu1(!menu1) }}>
      <div className="a41">
        <img height={50} width={50} src={user.profilepicture} alt="" />
        <h5>{user.name}</h5>
        
          {menu1 && <div  className="menu1">
            <p>name: <b>{user.name}</b></p>
            <p>Phone: <b>{user.phone}</b></p>
            <p>City  : <b>{add.city}</b></p>
            
          </div>}
        </div>


        <div className="b5">
          <p>Address:</p>
          <p> Street: <b>{add.street}</b></p>
          <p>Suite : <b>{add.suite}</b></p>
          <p>City  : <b>{add.city}</b></p>
          <p>Zipcode : <b>{add.zipcode}</b></p>
        </div>
        <div className="c90">

          <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d31108.7526229716!2d77.54455554153922!3d12.933790820444433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1smap!5e0!3m2!1sen!2sin!4v1680198399526!5m2!1sen!2sin" width="400" height="250" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>


        <div className="chat" onClick={() => { setMenu(!menu) }}>
          <div className="div">
            <i class='bx bx-menu'></i>
            <img src="https://cdn-icons-png.flaticon.com/128/1246/1246332.png" alt="" height="20px" width="20px" />
            <h> <b>Chats </b> </h>
          </div>^
          {menu && <div className="bbb" style={{ overflow: "scroll" }}>
            {chat.map((data) => (
              <div className="a09">
                <img height={20} width={20} style={{}} src={data.profilepicture} alt="" />
                <p>{data.name}</p>
                <hr />
              </div>
            ))}
          </div>}


        </div>



      </div>


    </div>
  );
}

export default Comp2;
