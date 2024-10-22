import { useState } from 'react'
import { SideBar } from './components/Sidebar.jsx';
import { Header } from './components/Header.jsx';
import { Post } from './Post.jsx';

import styles from './app.module.css';

import './global.css';

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>  
        <SideBar />
        <main>
          <Post 
          author='Diego Fernandez'
          content='Lorem ipsum dolor sit amet consectetur adipisicing elit. In unde animi architecto enim laboriosam nulla illo quam aperiam, neque ad minus quas necessitatibus veritatis quisquam? Veniam ratione ducimus magnam nisi?'
          />
          <Post
          author='Gabriel Buzzi'
          content='Um novo post'
           />
        </main>
      </div> 
    </div>
  )
}

