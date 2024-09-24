import Image from "next/image";

export default function NotFound(){
    return(
        <div>
            <h1>404 - NotFound</h1>
            <h2>this page could not be found.</h2>
            <Image src="/img/error404.jpg" alt="Img de erro" width={400} height={400}/>
            <Image src="https>//lojaintegrada.com.br/hub/wp-content/uploads/2023/05/erro-404-4.webp" alt="Img de erro" width={400} height={400}/>
            
        </div>
    );
}