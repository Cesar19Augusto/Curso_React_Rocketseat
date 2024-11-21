import { useState } from 'react'
import { SideBar } from './components/Sidebar.jsx';
import { Header } from './components/Header.jsx';
import { Post } from './components/Post.jsx';
import styles from './app.module.css';

import './global.css';

// author: {avatar_url: "", name: "", role: ""}
// publisherAt: Date 
//content: String

const posts = [              // Um array chamado 'posts'
  {                         // Primeiro (e único) item do array é um objeto
    id: 1,                  // Cada post tem um 'id'
    author: {               // O 'author' é outro objeto, com informações sobre o autor
      avatarUrl: 'https://github.com/diegofernandez.png',
      name: 'Diego Fernandez',
      role:'CTO @Rocketseat'
    },
    content: [
      { type:  'paragraph', content: 'Fala galeraa 👋', },
      { type:  'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀', },
      { type:  'link', content: 'jane.design/doctorcare'},
      ],   // O conteúdo do post 
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
              author={post.author} 
              content={post.content} 
              publishedAt={post.publishedAt}
            />
          )
        })}
        </main>
      </div> 
    </div>
  )
}

