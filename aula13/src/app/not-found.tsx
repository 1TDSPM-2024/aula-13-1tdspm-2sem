import Image from 'next/image'
import React from 'react'

export default function notFound() {
  return (
    <div>
        <h1>404</h1>
        <h2>A página não foi encontrada</h2>
        <Image src="/img/erroimg.jpg" alt='Pagina erro' width={400} height={400}/>
    </div>
  )
}
