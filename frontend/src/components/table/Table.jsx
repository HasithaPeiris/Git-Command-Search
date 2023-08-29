import React from 'react'
import "./table.css"

export default function Table({data}) {

  return (
    <div className='table-wrapper'>
        <table>
            <thead>
                <tr>
                    <th>Command</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                {data.map(item=>(
                    <tr key={item.id}>
                        <td><code>{item.command}</code></td>
                        <td>{item.desc}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}
