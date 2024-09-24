
export default function Produto({params}:{params:{id:number}}){
    return (
    <div>
        <h1>PRODUTO</h1>
        <div>
            <h2>Produto {params.id}</h2>
        </div>
    </div>
    );
}