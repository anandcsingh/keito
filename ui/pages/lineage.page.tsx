import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import AuthPage from '../components/auth/AuthPage'
import RankTiles from '../components/sections/RankTiles';

export default function Lineage() {

  return (
    
      
      <AuthPage>
        <h1>Lineage</h1>
        <Link href="students">Students</Link>
        <RankTiles />
      </AuthPage>
    
  )

}
