import React from 'react'

export default function Produto({params}: { params: { id: number } }) {
  return (
    <div>
        <h1>Produtos</h1>
        <div> 
          <p>Produtos : {params.id}</p>
        </div>
    </div>
  )
}
