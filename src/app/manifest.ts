import { type MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'ACTITUD-63',
    short_name: 'ACTITUD-63',
    description: 'ACTITUD-63',
    start_url: '/',
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#fff'
  }
}
