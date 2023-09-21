import { type MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'src/app/layout.tsx',
    short_name: 'src/app/layout.tsx',
    description: 'src/app/layout.tsx',
    start_url: '/',
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#fff',
    icons: [
      {
        src: '/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png'
      },
      {
        src: '/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png'
      },
      {
        src: '/safari-pinned-tab.svg',
        sizes: '180x180',
        type: 'image/svg+xml'
      }
    ]
  }
}
