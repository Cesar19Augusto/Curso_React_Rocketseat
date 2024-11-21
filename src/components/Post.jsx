import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';
import { useState } from 'react';


export function Post ({ author, publishedAt, content }) {
//Nescessario usar o estado do ract para atualizar com o novo comentario
//Estado = Variáveis que eu quero que o componente monitore
//Já que o useState retorno também um aray e uma função foi usado o conceito de desestruturação 
    const [comments, setComments] = useState ([
        'Post muito bacana, hein?!'
    ])

    const [newCommentText, setNewCommentText] = useState ('')

    const publishedDateFromatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR,
    })

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR, 
        addSuffix: true,
    })

    function handleCreateNewComment(){
        event.preventDefault()
//Foi passado agora pra dentro dessa função qual é o novo valor do estado de comentarios ou sejá eu não passo só oque eu quero
//eu passo um novo valor, isso é imutabilidade         
        setComments([...comments, newCommentText]);
        setNewCommentText('');
    }

    function handleNewCommentChange() {
        setNewCommentText(event.target.value);
    }

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl}/>
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>
                <time title={publishedDateFromatted} dateTime={publishedAt.toISOString()}> {publishedDateRelativeToNow} </time>
            </header> 

            <div className={styles.content}>
                {content.map(line => {
                    if (line.type === 'paragraph') {
                        return <p key={line.content}>{line.content}</p>;
                    } else if (line.type === 'link') {
                        return <p key={line.content}><a href="#">{line.content}</a></p>;
                    }
                })}
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commetForm}>

                <strong>Deixe seu feedback</strong>

                <textarea 
                    name="comment" 
                    placeholder="Deixe seu comentário" 
                    value={newCommentText}
                    onChange={handleNewCommentChange}

                />

                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>
            <div className={styles.commentList}>
                {comments.map(comment => {
                    return <Comment key={comment} content={comment}/>
                })}
            </div>
        </article>
    )
}