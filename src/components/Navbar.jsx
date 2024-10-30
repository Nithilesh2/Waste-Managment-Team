import React, { useState } from "react"
import styles from "./css/Navbar.module.css"
import { MdClose, MdMenu } from "react-icons/md"
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [toggle, setToggle] = useState(true)
  const navigate = useNavigate()

  return (
    <>
      <div className={styles.hero}>
        <div className={styles.left}>
          <h4 className={styles.logo}>Logo</h4>
        </div>
        <div className={styles.right}>
          <ul className={toggle? styles.pages: styles.pagesToggled}>
            <li className={styles.home}>Home</li>
            <li className={styles.aboutUs}>About Us</li>
            <li className={styles.contactUs}>Contact Us</li>
            <li className={styles.login} onClick={()=>navigate("/login")}>Login/Register</li>
          </ul>
          <div className={styles.toggle}>
            {toggle ? (
              <MdMenu
                className={styles.menuToggle}
                onClick={() => setToggle(!toggle)}
              />
            ) : (
              <MdClose
                className={styles.closeToggle}
                onClick={() => setToggle(!toggle)}
              />
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
