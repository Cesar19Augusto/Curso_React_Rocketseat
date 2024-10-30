import { useState } from 'react'
import { SideBar } from './components/Sidebar.jsx';
import { Header } from './components/Header.jsx';
import { Post } from './components/Post.jsx';

import styles from './app.module.css';

import './global.css';

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>  
        <SideBar />
        <main>
          <Post />
          <Post />
        </main>
      </div> 
    </div>
  )
}

