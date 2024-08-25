import { getProduct, ProductPageProps } from '@/app/(store)/product/[slug]/page'
import { env } from '@/env'
import { ImageResponse } from 'next/og'
import colors from 'tailwindcss/colors'

export const runtime = 'edge'

export const alt = 'product image'
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export default async function OgImage({ params }: ProductPageProps) {
  const product = await getProduct(params.slug)

  const productImageURL = new URL(product.image, env.APP_URL).toString()

  return new ImageResponse(
    (
      <div
        style={{
          background: colors.zinc[950],
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <img src={productImageURL} alt={alt} style={{ width: '100%' }} />
      </div>
    ),
    {
      ...size,
    },
  )
}
