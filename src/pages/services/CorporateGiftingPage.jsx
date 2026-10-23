import ServiceDetail from '../../components/ServiceDetail.jsx'
import { servicesBySlug } from '../../data/services.js'

export default function CorporateGiftingPage() {
  return <ServiceDetail service={servicesBySlug['corporate-gifting']} />
}
