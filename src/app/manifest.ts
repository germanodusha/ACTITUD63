import { type MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'ACTITUD-63',
    short_name: 'ACTITUD-63',
    description: 'ACTITUD-63',
    start_url: '/',
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#fff',
    icons: [
      {
        src: '/manifest/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png'
      },
      {
        src: '/manifest/android-chrome-16x16.png',
        sizes: '16x16',
        type: 'image/png'
      },
      {
        src: '/manifest/android-chrome-32x32.png',
        sizes: '32x32',
        type: 'image/png'
      },
      {
        src: '/manifest/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png'
      },
      {
        src: '/manifest/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png'
      }
    ]
  }
}
