import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <aside className="w-64 bg-zinc-950 p-6">SIDEBAR</aside>
        <main className="flex-1 p-6">MAIN</main>
      </div>
      <footer className="bg-zinc-800 border-t border-zinc-700 p-6">FOOTER</footer>
    </div>
  )
}
