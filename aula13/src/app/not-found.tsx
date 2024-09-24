import Image from "next/image";

export default function NotFound() {
  return (
    <div>
        <h1>404 - Not Found</h1>
        <h2>This page could not be found.</h2>

        <Image src="/img/404-error.jpg" alt="" width={400} height={400} />
        <Image src="https://lojaintegrada.com.br/hub/wp-content/uploads/2023/05/erro-404-4.webp" alt="" width={400} height={400} />
    </div>
  )
}
