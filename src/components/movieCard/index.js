import React from 'react'
import styles from '../../../styles/Home.module.css'


export default function MovieCard (props){
    const {item} = props 
    return(
    <li>
        <a href={`/movie/${item.id}`}>
        <img src={`https://image.tmdb.org/t/p/original${item.poster_path}`} width="200"/> <br/>
        <div className={styles.movieTitle}>
            {item.title}
        </div>
        </a>
    </li>
    )
}