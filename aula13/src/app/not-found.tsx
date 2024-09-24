import Image from "next/image";

export default function NotFound() {
    return (
        <div>
            <h1 style={{fontSize:'100px'}}>NotFound</h1>
            {/* <img src="/img/404.jpg" alt="" /> */}
            <Image layout="responsive" src="https://conteudo.imguol.com.br/4f/2024/09/20/katy-perry-come-coxinha-no-mais-voce-1726843296173_v2_750x421.jpg" alt="Página de erro." width={480} height={300}/>
        </div>
    )
}