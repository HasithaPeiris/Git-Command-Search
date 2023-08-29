import React, { useState } from 'react'
import "./search.css"
import { Commands } from '../../commands'
import Table from '../table/Table';

export default function Search() {
    const [query, setQuery] = useState("");

    const keys = ["command", "desc"]

    const search = (data) => {
        return data.filter(
            (item)=>keys.some(key=>item[key].toLowerCase().includes(query))
        );
    }
  return (
    <div className='search-wrapper'>
        <div className="search-box">
            <input
                type='text'
                placeholder='Search...'
                className='search'
                onChange={e => setQuery(e.target.value)}
            />
            
            <Table data={search(Commands)}/>
        </div>
    </div>
  )
}
