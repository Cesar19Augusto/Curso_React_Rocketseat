import styles from './Post.module.css';

export function Post () {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className= {styles.avatar} src="https://avatars.githubusercontent.com/u/79229452?v=4"/>
                    <div className={styles.authorInfo}>
                        <strong>Augusto</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title='11 de maio às 08:13h' dateTime="2022-05-11 08:13:30">Publicado hà 1h</time>
            </header> 
            <div className={styles.content}>
                <p>Fala galeraa 👋</p>      
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p>👉{' '}<a href="#">jane.design/doctorcare</a></p>
                <p> 
                    <a href="#">#novoprojeto</a> {' '}
                    <a href="#">#nlw</a> {' '}
                    <a href="#">#rockets</a>
                </p>
            </div>
            <form className={styles.commetForm}>
                <strong>Deixe seu feedback</strong>
                <textarea placeholder="Deixe seu comentário"/>
                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
                
            </form>
            
        </article>
    )
}