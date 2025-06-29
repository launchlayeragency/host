import React from 'react'
import PricingSection from '../../components/AboutUs/PricingSection'
import SupportHero from '../../components/Support/SupportHero'
import SupportFeatures from '../../components/Support/SupportFeatures'
import SupportCards from '../../components/Support/SupportCards'
import { LoadingWrapper } from '../../components/Shared/LoadingWrapper'

export default function SupportPage() {
  return (
    <LoadingWrapper>
        <div>
        <SupportHero/>
        <SupportCards/>
        <SupportFeatures/>
          <PricingSection scrollToId="support"/>
    </div>
    </LoadingWrapper>
    
  )
}
