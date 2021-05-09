import Head from 'next/head'
import Link from'next/link'
import styles from '../styles/Home.module.css'
import MovieCard from '../src/components/movieCard'

export default function Home({list}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Site legal do Petterson</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>
          Destaques
        </h1>
        <div className={styles.menu}>
          <Link href="/busca">Busca</Link>
          <Link href="/sobre">Sobre</Link>
        </div>
        <ul>
          {list.map(item=>(
            <MovieCard item={item}/>
          ))}
        </ul>
      </main>
    </div>
  )
}

export async function getServerSideProps(){
  const res = await fetch('http://localhost:3000/api/trending');
  const json = await res.json();
  return {
    props:{
      list: json.list
    }
  };
}