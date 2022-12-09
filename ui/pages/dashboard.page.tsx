import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Header from '../components/layout/Header'
import AuthenticatedPage from '../components/layout/AuthenticatedPage'
import RankTiles from '../components/sections/RankTiles';


export default function Home() {

  return (
    
      
      <AuthenticatedPage>
        <div>
          <Header navPosition="right" className="reveal-from-bottom" />
          <main className="site-content">
            <RankTiles />
          </main>
        </div>
      </AuthenticatedPage>
    
  )

}
