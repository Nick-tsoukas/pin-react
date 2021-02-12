import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import React, { useState, useEffect } from 'react';
import Post from '../components/Post'
import Moment from 'react-moment';

Moment.globalFormat = 'D MMM YYYY';

const client = require('contentful').createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
})


// taks fix footer add icons 
//  Make sure moblie resposive
//  Add one thing about them
// add Netily css now
export default function Home() {

  async function fetchEntries() {
    const entries = await client.getEntries()
    if (entries.items) return entries.items
    console.log(`Error getting Entries for ${contentType.name}.`)
  }

  useEffect(() => {
    async function getPosts() {
      const allPosts = await fetchEntries();
      console.log(allPosts)
      setPosts([...allPosts[0].fields.itemName]);
      setPrice([allPosts[0].fields.price]);
      setDate([allPosts[0].fields.date])
    }
    getPosts()
  }, [])

  const [posts, setPosts] = useState([])
  const [price, setPrice ] = useState('');
  const [date, setDate ] = useState('');
 
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
    {/* pop up box */}

      <div className={`${isHidden ? styles.hidden : styles.box }`} >
        <div className={styles.intro_pop}>
          <div className={styles.logo_cont_pop}>
          <h2 id="home_top" onClick={tog} className={[styles.logo_mine, styles.pink].join(' ')}>Piñatta</h2>
          <h2 onClick={tog} className={styles.white}>X</h2>
          </div>
       
         
        <div className={styles.intro_pop_container}>
        <p>Whould you like to order our prefix menu. It's ${price} dollars and we will accept cash or venmo</p>
        </div>
       
        </div>
        <div className={styles.pop_menu}>
          <h2 className={styles.menu_pop_text}>MENU</h2>
          <h2 className={styles.date}>  <Moment style={{color: 'white'}}>{date}</Moment></h2>
          
          <div style={{marginTop: '2em'}} className={styles.pop_items}>
          {posts.length > 0
           ? posts.map((p) => (
             <p>{p}</p>
            ))
          : null}
          </div>
          <h2 className={styles.price_pop}>${price}</h2>
        </div>
        <div>
          <a href="https://instagram.com" target="_blank">
          <img className={styles.icon_image} src="./instagram.png" alt=""/>
          </a>
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
              <div className={styles.img_4}></div>
              <div className={styles.img_3}></div>
              <div className={styles.img_4}></div>
              <div className={styles.img_1}></div>
              <div className={styles.img_3}></div>

              </div>
              
            </div>
            {/* menu on full screen */}
            <section className={styles.main_second}>
              <div className={styles.menu}>
                <h1 className={styles.menu_heading}>MENU</h1>
                <div className={styles.event}>
                  <div className={styles.inner_event}>
                  <h2 className={styles.date}>  <Moment>{date}</Moment></h2>
                  <div className={styles.border_date}></div>
                  <div className={styles.pop_items}>
                  {posts.length > 0
                    ? posts.map((p) => (
                    <p>{p}</p>
                    ))
                   : null}
                  </div>
                  <div className={styles.price}>
                    <p>${price}</p>
                  </div>
                  </div>
                </div>
                <div className={styles.order_btn_container }>
                <button onClick={tog}  className={styles.order_btn}>Order Now</button>
                <div className={styles.contact_box}>
                    <div className={styles.flex_container}>
                    <img style={{height: '15px', paddingRight: '.5em'}}  src="./phone-call.png" alt="phone icon" />
                    <p>777-888-8888</p>
                    </div>
                    <div className={styles.flex_container}>
                    <img style={{height: '15px', paddingRight: '.5em'}} src="./map.png" alt="map icon" />
                    <p>Chicago, IL</p>
                    </div>
                    <div className={styles.flex_container}>
                    <img style={{height: '15px', paddingRight: '.5em'}}  src="./instagram.png" alt="instagram icon" />
                    <p>Instagram</p>
                    </div>
                </div>
                
                </div>
                
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
        <a href="https://instagram.com">
        <img  className={styles.point} src="./instagram.png" alt=""/>
        </a>
        </footer>
      </main>

    </div>
  )
}
