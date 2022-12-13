import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import Hero from '../components/sections/Hero';


export default function Home() {
  return (
    <>
      <Header hideExtraNav={true} navPosition="right" className="reveal-from-bottom" hideNav={false} hideSignin={false} bottomOuterDivider={false} bottomDivider={false} />
      <main className="site-content">
        <Hero className="illustration-section-01" topOuterDivider={null} bottomOuterDivider={false} topDivider={false} bottomDivider={false} hasBgColor={false} invertColor={false} />
      </main>
      <h1>ok</h1>
      <Footer className="footer-container" topOuterDivider="false" topDivider="false" />

    </>
  )
}
