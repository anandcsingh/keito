import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Header from '../components/layout/Header'
import Hero from '../components/sections/Hero';


export default function Home() {
  return (
    <>
      <Header navPosition="right" className="reveal-from-bottom" />
      <main className="site-content">
        <Hero className="illustration-section-01" />
      </main>

    </>
  )
}
