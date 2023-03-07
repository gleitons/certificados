import BarbaImage from '../imagens/curso-carpinteiro.jpg'
import styles from '../styles/Menu.module.css'
import Image from 'next/image'
export default function Index(){
    return (
        <>
       <div className={styles.centralizaImage}>
      <h2>Inicío</h2>
      <p>Sistema de criação de certificado Online, Futuro Concultoria.</p>
    </div>
        </>
    )
}