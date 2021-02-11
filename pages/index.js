import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pinatta</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <section className={styles.side_bar}>
            <h2 className={styles.logo_mine}>Piñatta</h2>
            <div className={styles.nav_bar}>
              <p className={styles.link}>Order</p>
            </div>

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
                  <div class="items_col">
                    <p>Item One</p>
                    <p>Item Two</p>
                    <p>Item Three</p>
                    <p>Item One</p>
                    <p>Item Two</p>
                    <p>Item Three</p>
                  </div>
                  <div className={styles.price}>
                    <p>$120.00</p>
                  </div>
                  </div>
                </div>
              </div>
            </section>
        </section>
      </main>

    </div>
  )
}
