import title_img from "../../img/hero-image.jpg"
import getintouch from "../../img/getintouch.png"
import style from "./Header.module.css"
function Header(){
    return(
    <div className={style.header}>
        <h1 className={style.header_title}>Make your home an ode to joy</h1>
        <p className={style.header_text}>We turn your empty house to a lovely home, making the compact spaces  with sapce saving furnitures. Making the unique tastes of yours into reality! </p>
        <div className={style.header_img}>
            <img src={title_img} alt="" className={style.title_img} />
            <img src={getintouch} alt="" className={style.getintouch} />
        </div>
    </div>
    )
}
export default Header