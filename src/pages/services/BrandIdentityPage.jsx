import ServiceDetail from '../../components/ServiceDetail.jsx'
import { servicesBySlug } from '../../data/services.js'

export default function BrandIdentityPage() {
  return <ServiceDetail service={servicesBySlug['brand-identity']} />
}
