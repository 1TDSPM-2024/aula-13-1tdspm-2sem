import Image from "next/image";

export default function NotFound(){
    return(
        <div>
            <h1>404 - NotFound</h1>
            <h2>This page could not be found.</h2>
            <Image src="/img/2153483.jpg" alt="Pagian de erro" width={400} height={400}/>
        </div>
    )
}