
import { SideBar } from './components/Sidebar';
import { Header } from './components/Header';
import { Post, PostType } from './components/Post';
import styles from './app.module.css';

import './global.css';

// author: {avatar_url: "", name: "", role: ""}
// publisherAt: Date 
//content: String

const posts: PostType[] = [              
  {                         
    id: 1,                  
    author: {               // O 'author' é outro objeto, com informações sobre o auto
      avatarUrl: 'https://github.com/diegofernandez.png',
      name: 'Diego Fernandez',
      role:'CTO @Rocketseat'
    },
    content: [
      { type:  'paragraph', content: 'Fala galeraa 👋', },
      { type:  'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀', },
      { type:  'link', content: 'jane.design/doctorcare'},
      ],   
      publishedAt: new Date('2024-11-20 20:00:00'),
  },
  {                         
    id: 2,                  
    author: {               
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Mayk Brito',
      role:'Educator @Rocketseat'
    },
    content: [
      { type:  'paragraph', content: 'Fala galeraa 👋', },
      { type:  'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀', },
      { type:  'link', content: 'jane.design/doctorcare'} ,
      ],   // O conteúdo do post 
      publishedAt: new Date('2024-11-21 20:00:00'),
  },
];

// forEach: Percorre mas não retorna
// map: Percorre como o forEach porém ele retorna

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>  
        <SideBar />
        <main>
        {posts.map(post => {
          return (
            <Post
              key={post.id}
              post={post}
            />
          )
        })}
        </main>
      </div> 
    </div>
  )
}

