import BarbaImage from '../imagens/curso-carpinteiro.jpg'
import styles from '../styles/Menu.module.css'
import Image from 'next/image'
export default function Carpinteiro(){
    return (
        <>
        <div className={styles.centralizaImage}>
            <h2>Barbeiro</h2>
            <Image src={BarbaImage} alt="Curso de Barbeiro" />
        </div>
        </>
    )
}