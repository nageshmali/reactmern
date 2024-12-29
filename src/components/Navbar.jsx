import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

const Navbar = () => {

    const [navButton, setNavBtn] = useState('Light');

    // console.log("Navbar rendered");

    useEffect(()=>{
      // console.log("useEffect called");
    },[navButton])

    const changeBtn = () => {
      if(navButton == 'Light'){
        setNavBtn('Dark');
      }
      else{
        setNavBtn('Light');
      }
    }

    return (
      <>
        <div className="navbar">
          <h1 className="headlogo">LOGO</h1>
          <ul>
            <li><Link className="mainLinks" to='/'>Home</Link></li>
            <li><Link className="mainLinks" to='/mens'>Mens</Link></li>
            <li><Link className="mainLinks" to='/kids'>Kids</Link></li>
            <li><Link className="mainLinks" to='/services'>Services</Link></li>
          </ul>
          <button className="navBtn" onClick={changeBtn}>{navButton}</button>
        </div>
      </>
    )
  }

export default Navbar