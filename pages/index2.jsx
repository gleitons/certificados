import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Menu.module.css'

export default function Home() {
  return (
    <>
    <div className={styles.centralizaImage}>
      <h2>Inicío</h2>
      <p>Sistema de criação de certificado Online, Futuro Concultoria.</p>
    </div>
    </>
  )
}
