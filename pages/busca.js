import Head from 'next/head'
import { useState} from 'react'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import MovieCard from '../src/components/movieCard'


export default function Home({list}) {
    const [searchText, setSearchText] = useState('');
    const [movieList, setMovieList] = useState([]);
    const handleSearch = async () => {
        if(searchText !== ''){
            const result = await fetch(`http://localhost:3000/api/search?q=${searchText}`);
            const json = await result.json();
            setMovieList(json.list);
        }
    }
    
    function handleKeyDown (e){
      if (e.key === 'Enter') {
        handleSearch();
      }
    }

  return (
    <div className={styles.container}>
      <Head>
        <title>Site legal do Petterson</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Busca
        </h1>
        <div className={styles.searchField}>
          <input className={styles.searchInput} type="text" value={searchText} onChange={e=>setSearchText(e.target.value)} onKeyDown={handleKeyDown} />
          <button className={styles.button} onClick={handleSearch} />
        </div>        
        <div className={styles.menu}>
          <Link href="/">Início</Link>
          <Link href="/sobre">Sobre</Link>
        </div>
        <ul>
          {movieList.map(item=>(
            <MovieCard item={item}/>
          ))}
        </ul>
      </main>
    </div>
  )
}