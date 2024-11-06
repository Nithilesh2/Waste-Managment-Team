import React, { useState } from "react"
import styles from "./css/Navbar.module.css"
import { MdClose, MdMenu } from "react-icons/md"

const Navbar = () => {
  const [toggle, setToggle] = useState(true)

  return (
    <>
      <div className={styles.hero}>
        <div className={styles.left}>
          <div className={styles.logo}>Logo</div>
            <ul className={toggle? styles.pagesUL: styles.pagesULShow}>
              <li className={styles.pagesLi}>Home</li>
              <li className={styles.pagesLi}>About Us</li>
              <li className={styles.pagesLi}>Services</li>
              <li className={styles.pagesLi}>FAQ'S</li>
              <li className={styles.pagesLi}>Contact</li>
            </ul>
        </div>
        <div className={styles.right}>
          <div className={styles.signup}>
            <button type="button" className={styles.signupBtn}>
              Sign Up
            </button>
          </div>
          <div className={styles.login}>
            <button type="button" className={styles.loginBtn}>
              Login
            </button>
          </div>
        </div>
        <div className={styles.toggle}>
          {toggle ? (
            <MdMenu
              className={styles.toggleMenu}
              onClick={() => setToggle(!toggle)}
            />
          ) : (
            <MdClose
              className={styles.toggleClose}
              onClick={() => setToggle(!toggle)}
            />
          )}
        </div>
      </div>
    </>
  )
}

export default Navbar
