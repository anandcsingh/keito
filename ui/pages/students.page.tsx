import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import AuthPage from '../components/auth/AuthPage'
import RankTiles from '../components/sections/RankTiles';


export default function Students() {

  return (
    
      
      <AuthPage>
        <section className="section">
            <div className="container">
                <div className="section-inner">
                <div className="container-xs">
                  <h2 className="mt-0 mb-16">Martial Arts Students</h2>
                  </div>
                </div>
            </div>
        </section>
      </AuthPage>
    
  )

}
