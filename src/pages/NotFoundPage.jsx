import { Link } from 'react-router-dom'
import usePageSeo from '../hooks/usePageSeo.js'
import Eyebrow from '../components/Eyebrow.jsx'

export default function NotFoundPage() {
  usePageSeo({
    title: 'Page not found | Forge Studio',
    description: 'The page you are looking for could not be found. Explore Forge Studio services or get in touch.',
    schema: { '@context': 'https://schema.org', '@type': 'WebPage', name: 'Page not found | Forge Studio' },
  })
  return <main className="not-found"><div className="shell"><Eyebrow>404 / Not found</Eyebrow><h1>Looks like this<br /><em>idea went elsewhere.</em></h1><Link className="button button-dark" to="/">Back to the homepage <span>↗</span></Link></div></main>
}
