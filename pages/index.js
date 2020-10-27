import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { makeStyles } from '@material-ui/core/styles';
var QRCode = require('qrcode.react');
import TextField from '@material-ui/core/TextField';

import { useState } from 'react'
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function Home() {
  const classes = useStyles();

  const [url, setUrl] = useState('');

  const [urlQrCode, seturlQrCode] = useState('');

  function buttonClick() {
    seturlQrCode(url);
  }

  function setarUrl(valor) {
    setUrl(valor);
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Qrcode new generator </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Qrcode Generator</h1>
        <p>Gere seu QR Code rápido, fácil e de forma gratuita. 😉</p>
        <form className={classes.root} noValidate autoComplete="off" >
          <TextField id="standard-basic" label="Digite a url" value={url} onChange={e => setarUrl(e.target.value)} />
        </form>
        <QRCode value={url} />
        <p>{url}</p>
      </main>

      <footer className={styles.footer}>
      By: <a href="https://instagram.com/ariribeiro.foto" target="_blank">Ari Ribeiro</a>
      </footer>
    </div>
  )
}
