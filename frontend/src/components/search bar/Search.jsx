import React, { useState } from 'react'
import "./search.css"
import { Commands } from '../../commands'

export default function Search() {
    const [query, setQuery] = useState("");

    console.log(Commands.filter(command=>command.command.toLowerCase().includes("clo")));
  return (
    <div className='search-wrapper'>
        <div className="search-box">
            <input
                type='text'
                placeholder='Search...'
                className='search'
                onChange={e => setQuery(e.target.value)}
            />
            <ul className="list">
                {Commands.filter(command=>command.command.toLowerCase().includes(query)).map(command=>(
                    <li key={command.id} className="list-item">{command.command}</li>
                ))}
            </ul>
        </div>
    </div>
  )
}
