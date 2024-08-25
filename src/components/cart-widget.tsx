'use client'

import { useCart } from '@/contexts/cart'
import { ShoppingBag } from 'lucide-react'

export function CartWidget() {
  const { items } = useCart()

  return (
    <div className="flex items-center gap-2">
      <ShoppingBag className="w-4 h-4" />
      <span className="text-sm">Cart {items.length}</span>
    </div>
  )
}
