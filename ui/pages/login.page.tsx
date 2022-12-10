import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Header from '../components/layout/Header'
import AuthenticatedPage from '../components/auth/AuthenticatedPage'
import RankTiles from '../components/sections/RankTiles';


export default function Login() {

  return (
        <div>
          <Header navPosition="right" className="reveal-from-bottom" hideNav={false} hideSignin={true} bottomOuterDivider={false} bottomDivider={false}  />
          <main className="site-content">
            <div>
              <h1>Login</h1>
            </div>
          </main>
        </div>
    
  )

}
