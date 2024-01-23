import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/ProductCard";

export default function Home() {
  return (
    <main>
      <h1 className="text-black">hello world</h1>
      <Link href="/users" className="text-black">user</Link>
      <ProductCard />
    </main>
  );
}
