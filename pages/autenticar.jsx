import BarbaImage from '../imagens/auxiliar-administrativo.jpg'
import styles from '../styles/Menu.module.css'
import Image from 'next/image'
import Menu from '../components/Menu'
import { useState } from 'react'
export default function Autenticar(){
    function Verificara() {
        const mostraN = document.querySelector('#infoAqui')
        mostraN.innerHTML = 'Emitido com Sucesso'
        
    }
    const monstraVerifica = () => {
        var mostraN = document.querySelector('#infoAqui')
        const pegaV = document.querySelector('#pegaInput').value
        if(pegaV == 12345) {
            mostraN.innerHTML = 'Emitido com Sucesso - Senha correta'
            setMostraR(<><button onClick={limpaTela}>Apagar</button> <br /><Menu  />   </>)
            
        } else if(pegaV.length == 0) {
            mostraN.innerHTML = 'Digite uma Senha'
        } else { mostraN.innerHTML = 'Tente novamente'}
         
        
        
    }
    const limpaTela = () => {
        
        var mostraN = document.querySelector('#infoAqui')
        setMostraR (<><button onClick={monstraVerifica}>Verificar</button></>)
        mostraN.innerHTML = ''
    }

    const [mostraR, setMostraR] = useState (<><button onClick={monstraVerifica}>Verificar</button></>)


    return (
        <>
        <div className={styles.centralizaImage}>
            <h2>Autenticar</h2>
            Insira a Senha: <input type="password" name="" id="pegaInput" />
            {mostraR}
            
            <div id='infoAqui'>
            
           
            </div>
        </div>
        </>
    )
}