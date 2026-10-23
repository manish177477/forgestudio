import ServiceDetail from '../../components/ServiceDetail.jsx'
import { servicesBySlug } from '../../data/services.js'

export default function MarketingPage() {
  return <ServiceDetail service={servicesBySlug.marketing} />
}
