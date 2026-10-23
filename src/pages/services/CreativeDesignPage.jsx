import ServiceDetail from '../../components/ServiceDetail.jsx'
import { servicesBySlug } from '../../data/services.js'

export default function CreativeDesignPage() {
  return <ServiceDetail service={servicesBySlug['creative-design']} />
}
