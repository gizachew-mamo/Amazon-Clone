import React from 'react'
import classes from './Header.module.css'
import { BsSearch } from "react-icons/bs";
import { SlLocationPin } from "react-icons/sl";
import { BiCart } from "react-icons/bi";
import LowerHeader from './LowerHeader';
function Header() {
  return (
    <section className={classes.fixed}>
      <section>
        <div className={classes.header_container}>
          <div className={classes.logo_container}>
            {/* logo */}
            <a href="/">
              <img
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt="amazon logo"
              />
            </a>

            <div className={classes.delivery}>
              {/* delivery */}
              <span>
                {/* icon */}
                <SlLocationPin />
              </span>
              <div>
                <p>Deliver to</p>
                <span>Ethiopia</span>
              </div>
            </div>
          </div>

          <div className={classes.search}>
            {/* search bar */}
            <select name="" id="">
              <option value="">All</option>
            </select>
            <input type="text" />
            <BsSearch size={35} />
          </div>
          {/* right side link */}
          <div className={classes.order_container}>
            <a href="" className={classes.language}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Flag_of_the_United_States_%28fixed%29.svg/640px-Flag_of_the_United_States_%28fixed%29.svg.png"
                alt=""
              />

              <select>
                <option value="">EN</option>
              </select>
            </a>

            <a href="">
              <div>
                <>
                  <p>Hello</p>
                  <span>Sign Out</span>
                </>

                {/* <>
                            <span>Account & Lists</span>
                            <p>Hello, Sign In</p>
                            </> */}
              </div>
            </a>
            {/* orders */}
            <a href="/orders">
              <p>returns</p>
              <span>& Orders</span>
            </a>

            {/* Cart */}
            <a href="/cart" className={classes.cart}>
              <BiCart size={35} />
              <span>0</span>
            </a>
          </div>
        </div>
      </section>
      <LowerHeader/>
    </section>
  );


}

export default Header