import ServiceDetail from '../../components/ServiceDetail.jsx'
import { servicesBySlug } from '../../data/services.js'

export default function WebsiteDevelopmentPage() {
  return <ServiceDetail service={servicesBySlug['website-development']} />
}
