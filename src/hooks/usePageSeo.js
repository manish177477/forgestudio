import { useEffect } from 'react'
import { assetUrl } from '../utils/assetUrl.js'

export default function usePageSeo({ title, description, schema }) {
  const schemaJson = JSON.stringify(schema)

  useEffect(() => {
    document.title = title
    setMeta('name', 'description', description)
    setMeta('property', 'og:title', title)
    setMeta('property', 'og:description', description)
    setMeta('property', 'og:type', 'website')
    setMeta('property', 'og:image', `${window.location.origin}${assetUrl('/assets/forge-creative-workspace-B2yH-tU9.jpg')}`)
    setMeta('name', 'twitter:card', 'summary_large_image')
    setMeta('name', 'twitter:title', title)
    setMeta('name', 'twitter:description', description)
    setMeta('name', 'twitter:image', `${window.location.origin}${assetUrl('/assets/forge-creative-workspace-B2yH-tU9.jpg')}`)

    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      document.head.appendChild(canonical)
    }
    canonical.href = `${window.location.origin}${window.location.pathname}`

    let structuredData = document.getElementById('page-structured-data')
    if (!structuredData) {
      structuredData = document.createElement('script')
      structuredData.id = 'page-structured-data'
      structuredData.type = 'application/ld+json'
      document.head.appendChild(structuredData)
    }
    structuredData.textContent = schemaJson
  }, [title, description, schemaJson])
}

function setMeta(attribute, key, value) {
  let element = document.head.querySelector(`meta[${attribute}="${key}"]`)
  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attribute, key)
    document.head.appendChild(element)
  }
  element.content = value
}
