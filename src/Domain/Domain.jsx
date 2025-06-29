
import PricingSection from '../components/AboutUs/PricingSection'
import DomainHero from '../components/Domain/DomainHero'
import FeaturedDomain from '../components/Domain/FeaturedDomain'
import Support from '../components/Domain/Support'
import TestimonialDomain from '../components/Domain/TestimonialDomain'
import { LoadingWrapper } from '../components/Shared/LoadingWrapper'

export default function Domain() {
  return (
    <LoadingWrapper>
        <div>
        <DomainHero/>
        <FeaturedDomain/>
        <Support/>
        <TestimonialDomain/>
        <PricingSection scrollToId="domain" />
    </div>
    </LoadingWrapper>
  
  )
}
