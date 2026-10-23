import ServiceDetail from '../../components/ServiceDetail.jsx'
import { servicesBySlug } from '../../data/services.js'

export default function ContentProductionPage() {
  return <ServiceDetail service={servicesBySlug['content-production']} />
}
