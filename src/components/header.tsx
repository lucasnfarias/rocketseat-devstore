import { CartWidget } from '@/components/cart-widget'
import { SearchForm } from '@/components/search-form'
import Image from 'next/image'
import Link from 'next/link'

export function Header() {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-5">
        <Link href="/" className="text-2xl font-extrabold text-white">
          devstore
        </Link>

        <SearchForm />
      </div>
      <div className="flex items-center gap-4">
        <CartWidget />

        <div className="w-px h-4 bg-zinc-700"></div>

        <Link href="/" className="flex items-center gap-2 hover:underline">
          <span className="text-sm">Account</span>
          <Image
            src="https://github.com/lucasnfarias.png"
            width={24}
            height={24}
            className="h-6 w-6 rounded-full"
            alt=""
          />
        </Link>
      </div>
    </div>
  )
}
