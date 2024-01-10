'use client'

import Image from 'next/image'
import styles from './page.module.css'
import { useState } from 'react'

export default function Home() {
  const [text, setText] = useState('teste-SCP')
  return (
    <main className={styles.main}>
      <div>
        <h1>{text}</h1>
        <button onClick={() => {
          if(text == 'teste-SCP'){
            setText('teste-SCP-Changed')
          } else {
            setText('teste-SCP')
          }
        }}>Change H1</button>
      </div>
    </main>
  )
}
