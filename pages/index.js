import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Qrcode new generator </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Qrcode Generatore</h1>
        <p>Gere seu QR COde rápido fácil e de forma gratuita</p>
      </main>

      <footer className={styles.footer}>
        
      </footer>
    </div>
  )
}
