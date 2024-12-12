import style from'./Header.module.css'
import ignitelogo from '../assets/ignite-logo.svg';

export function Header() {
    return (
        //{style.header} - Pois é uma variavel JS dentro do HTML
        <header className={style.header}>
            <img src={ignitelogo} alt='Logotipo do Ignite'/>
            <strong>Ignite Feed</strong>
        </header>
     );   
}

