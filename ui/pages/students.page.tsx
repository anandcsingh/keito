import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import AuthPage from '../components/auth/AuthPage'
import RankTiles from '../components/sections/RankTiles';


export default function Students() {

  return (
    
      
      <AuthPage>
        <h1>Students</h1>
        <Link href="lineage">Lineage</Link>
        <RankTiles />
      </AuthPage>
    
  )

}
