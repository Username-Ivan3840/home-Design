import {Link} from "react-router-dom";
import style from "./menu.module.css"
import logo from "../../img/Logo.svg" 
import arrow from "../../img/arrow.png"
function Menu(){
    return(
<div className={ style.header}>
  <img src={logo} alt="" className={style.header_logo} />
  <div className={style.header_link}>
        <Link className={ style.header_href} to={"/"}>About</Link>
        <Link className={ style.header_href} to={"/"}>Services</Link>
        <Link  className={ style.header_href} to={"/"}>Our Work</Link>
        <Link className={style.header_button} to={"/"} >CONTACT US <img src={arrow} alt="" /></Link>
  </div>
        
      </div>
    )
}


export default Menu