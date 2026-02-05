import React from 'react'
import { Link } from 'react-router-dom'

export const NetflixShows = () => {
  return (
    <div style={{textAlign:"center"}}>
        <h1>NetflixShows</h1>
        <ul>
          <li>
            <Link to="/watch/Dhurandhar">Dhurandhar</Link>
          </li>
          <li>
            <Link to="/watch/Border 2">Border 2</Link>
          </li>
          <li>
            <Link to="/watch/Laalo">Laalo</Link>
          </li>
          
        </ul>
    </div>
  )
}