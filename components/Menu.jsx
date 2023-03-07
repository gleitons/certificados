import Image from "next/image"
import { children } from 'react'
import styles from '../styles/Menu.module.css'
import Link from "next/link"
import {GiFingernail} from 'react-icons/gi'
import {HiComputerDesktop} from 'react-icons/hi2'
import {GiBeard} from 'react-icons/gi'
import {FaHome} from 'react-icons/fa'
import {GiWoodBeam} from 'react-icons/gi'
import {AiFillSecurityScan} from 'react-icons/ai'
import iconCertificado from '../public/img/icon-certificado.png'
export default function Menu({children}) {
    return (
        <>
        <div className={styles.PrincipalM}>
            <div className={styles.cadaNome}>
                <div className={styles.infoName}>
                    <h2>OPÇÕES</h2>
                </div>
                <div className={styles.blocoImage} >
                    <div className={styles.blocoInterno}>
                        
                            <Link href="./barbeiro">
                            <GiBeard className={styles.iconSlide} />
                                <h2>BARBEIRO</h2>
                            </Link>
                        
                    </div>
                    <div className={styles.blocoInterno}>
                        <Link href="./administrativo">
                        <HiComputerDesktop className={styles.iconSlide} />
                            <h2>ADMINISTRATIVO</h2>
                        </Link>
                    </div>
                    <div className={styles.blocoInterno}>
                        <Link href="./manicure-pedicure">
                            {/* < Image src={iconCertificado} alt="ícone Certificado"/> */}
                            <GiFingernail className={styles.iconSlide} />
                            <h2>MANICURE E PEDICURE</h2>
                        </Link>
                    </div>
                </div>
            </div>
            <div className={styles.cadaNome}>
            <div className={styles.infoName}>
                    <h2>EMPRESA</h2>
                </div>
            <h2>SISTEMA DE CERTIFICADO <br /> FUTURO CONSULTORIA</h2>
            </div>
            <div className={styles.cadaNome}>
            <div className={styles.infoName}>
                    <h2>CONFIGURAÇÕES</h2>
                </div>      
                <div className={styles.blocoImage} >
                    <div className={styles.blocoInterno}>
                        <Link href="./">
                            <FaHome className={styles.iconSlide} />
                            <h2>INICIO</h2>
                        </Link>
                    </div>
                    <div className={styles.blocoInterno}>
                        <Link href="./carpinteiro">
                            <GiWoodBeam className={styles.iconSlide} />
                            <h2>CARPINTEIRO</h2>
                        </Link>
                    </div>
                    <div className={styles.blocoInterno}>
                        <Link href="/autenticar">
                            <AiFillSecurityScan className={styles.iconSlide} />
                            <h2>AUTENTICAR</h2>
                        </Link>
                    </div>
                </div>          
            </div>
           
        </div>
        <div>{children}</div>
        
        
        
        </>
    )

}
