import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import styles from './styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Attendance</title>
        <meta name="description" content="Attendance FBLA Project" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="">Attendance Tracker</a>
        </h1>

        <p className={styles.description}>
          Get started!
        </p>

        <div className={styles.grid}>
          <a href="/student" className={styles.card}>
            <h2>Student Login &rarr;</h2>
            <p>Certify your presence at school</p>
          </a>

          <a href="/teacher.js" className={styles.card}>
            <h2>Teacher Login &rarr;</h2>
            <p>Easily view and manage student attendance </p>
          </a>

          <a
            href="/admin"
            className={styles.card}
          >
            <h2>School Admin &rarr;</h2>
            <p>Manage your entire school's attendance</p>
          </a>

          <a
            href="/help"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
          >
            <h2>Guide &rarr;</h2>
            <p>
              Learn how to use our all in one attendance solution
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
