import React from 'react'


function Lista(Props) {
  return (
    <a href={Props.url} target="_blank" rel="noreferrer">
    <li>
        <div className='nomeSocial'>
        {Props.nome}
        </div>
    </li>
    </a>
  )
}

export default Lista