import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import React, { useState } from 'react';
import { attributes, react as HomeContent } from '../content/home.md';

// taks fix footer add icons 
//  Make sure moblie resposive
//  Add one thing about them
// add Netily css now
export default function Home() {
  let { title, cats } = attributes;
  const [isHidden, setIsHidden ] = useState(true);
  const scrollTop = () =>{
    window.scrollTo({top: 0, behavior: 'smooth'});
 };
  const tog = () => {
    if(isHidden === true) {
      console.log('was true')
      return setIsHidden(false);
      
    }
   
    else {
      console.log('was fale ')
      setIsHidden(true);
    } 

  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Pinatta</title>
        <link rel="icon" href="/favicon.ico" />
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>

      </Head>

        <article>
          <h1>{title}</h1>
          <HomeContent />
          <ul>
            <li>Hello wold </li>
            {cats.map((cat, k) => (
              <li key={k}>
                <h2>{cat.name}</h2>
                <p>{cat.description}</p>
              </li>
            ))}
          </ul>
        </article>
    {/* pop up box */}
      <div className={`${isHidden ? styles.hidden : styles.box }`} >
        <div className={styles.intro_pop}>
          <div className={styles.logo_cont_pop}>
          <h2 id="home_top" onClick={tog} className={[styles.logo_mine, styles.pink].join(' ')}>Piñatta</h2>
          <h2 onClick={tog} className={styles.white}>X</h2>
          </div>
       
         
        <div className={styles.intro_pop_container}>
        <p>Whould you like to order our prefix menu. It's 50 dollars and we will accept cash or venmo</p>
        </div>
       
        </div>
        <div className={styles.pop_menu}>
          <h2 className={styles.menu_pop_text}>MENU</h2>
          <div className={styles.pop_items}>
            <div>
            <p>Waffled Hash Brown Breakfast Sandwich</p>
            <p className={styles.price_item}>$10.00</p>
            </div>
            <div>
            <p>Hickory Pulled Pork Fries</p>
            <p className={styles.price_item}>$10.00</p>
            </div>
            <div>
            <p>Mexi-Cheese Lava Fry Tower</p>
            <p className={styles.price_item}>$10.00</p>
            </div>
            <div>
            <p>Roasted Garlic Spinach Artichoke Dip</p>
            <p className={styles.price_item}>$10.00</p>
            </div>
            <div>
            <p>Southwest Queso</p>
            <p className={styles.price_item}>$10.00</p>
            </div>
            <div>
            <p>Mexi-Cheese Lava Fry Tower</p>
            <p className={styles.price_item}>$10.00</p>
            </div>
          </div>
          <h2 className={styles.price_pop}>$10.00</h2>
        </div>
        <div>
          <img className={styles.icon_image} src="./instagram.png" alt=""/>
        </div>
        <div className={styles.call_pop}>
         
          <p>Click Below to call and place an order</p>
          <button className={styles.phone_pop}><a href="tel:1-562-867-5309">777-888-8888</a></button>

          <div className={styles.pop_footer}>
          <h2 className={`${!isHidden ? styles.hidden : [styles.logo_mine, styles.pink].join(' ') }`}>Piñatta</h2>
          </div>
        </div>
    
      </div>
      
      {/* end of pop box  */}
     
      <main className={`${!isHidden ? styles.hidden : styles.main }`}>
        <section className={styles.side_bar}>
            <h2 className={styles.logo_mine}>Piñatta</h2>
            <div className={styles.nav_bar}>
            <p onClick={tog} className={styles.link}>Order</p>
            </div>

        </section>
        <section className={styles.hero}>
          <h1 className={styles.hero_text}>Pop Up In Chcicago</h1>
          <p onClick={tog}>Order Now</p>
        </section>
        <section className={styles.main_content}>
            <div className={styles.image_grid}>
              {/* put images */}
              <div className={styles.img_2}></div>
              <div className={styles.grid_four}>

              <div className={styles.img_1}></div>
              <div className={styles.img_1}></div>
              <div className={styles.img_1}></div>
              <div className={styles.img_1}></div>
              <div className={styles.img_1}></div>
              <div className={styles.img_1}></div>

              </div>
              
            </div>
            <section className={styles.main_second}>
              <div className={styles.menu}>
                <h1 className={styles.menu_heading}>MENU</h1>
                <div className={styles.event}>
                  <div className={styles.inner_event}>
                  <h2 className={styles.date}>Febuary 8th</h2>
                  <div className={styles.border_date}></div>
                  <div className={styles.pop_items}>
            <div>
            <p>Waffled Hash Brown Breakfast Sandwich</p>
            <p className={styles.price_item}>$10.00</p>
            </div>
            <div>
            <p>Hickory Pulled Pork Fries</p>
            <p className={styles.price_item}>$10.00</p>
            </div>
            <div>
            <p>Mexi-Cheese Lava Fry Tower</p>
            <p className={styles.price_item}>$10.00</p>
            </div>
            <div>
            <p>Roasted Garlic Spinach Artichoke Dip</p>
            <p className={styles.price_item}>$10.00</p>
            </div>
            <div>
            <p>Southwest Queso</p>
            <p className={styles.price_item}>$10.00</p>
            </div>
            <div>
            <p>Mexi-Cheese Lava Fry Tower</p>
            <p className={styles.price_item}>$10.00</p>
            </div>
          </div>
                  <div className={styles.price}>
                    <p>$120.00</p>
                  </div>
                  </div>
                </div>
                <button onClick={tog}  className={styles.order_btn}>Order Now</button>
              </div>
            </section>
        </section>
        <section className={styles.mobile_image_grid}>
            <img src="food_1.jpg" alt=""/>
            <img src="food_1.jpg" alt=""/>
            <img src="food_1.jpg" alt=""/>
            <img src="food_1.jpg" alt=""/>
            <img src="food_1.jpg" alt=""/>
            <img src="food_1.jpg" alt=""/>
        </section>
        <footer className={styles.footer}>
        <Link href="https://google.com">
        <img  className={styles.point} src="./instagram.png" alt=""/>
        </Link>
        </footer>
      </main>

    </div>
  )
}
