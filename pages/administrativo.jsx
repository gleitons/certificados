import BarbaImage from '../imagens/auxiliar-administrativo.jpg'
import styles from '../styles/Menu.module.css'
import Image from 'next/image'
export default function Administrativo(){
    return (
        <>
        <div className={styles.centralizaImage}>
            <h2>Barbeiro</h2>
            <Image src={BarbaImage} alt="Curso de Auxiliar Administrativo" />
        </div>
        </>
    )
}