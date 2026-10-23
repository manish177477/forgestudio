import ServiceDetail from '../../components/ServiceDetail.jsx'
import { servicesBySlug } from '../../data/services.js'

export default function AiContentPage() {
  return <ServiceDetail service={servicesBySlug['ai-content']} />
}
