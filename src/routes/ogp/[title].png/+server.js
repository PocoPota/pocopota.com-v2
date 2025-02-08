import { generateOgpImage } from '$lib/ogpImage'

export const prerender = true

export const GET = async ({ params }) => {
  const { title } = params
  const png = await generateOgpImage(title)

  return new Response(png, {
    headers: {
      'Content-Type': 'image/png',
    },
  })
}