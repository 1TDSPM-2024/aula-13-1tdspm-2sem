export default function Produto({params}:{params:{id:number}}) {
    return (
      <div>
          <h1>Produto</h1>
          <div>
            <h2>Biscoito {params.id}</h2>
          </div>
      </div>
    )
  }
   