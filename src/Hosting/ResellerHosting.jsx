import React from 'react'
import HeroReseller from '../components/Hosting/ResellerHosting/HeroReseller'
import PricingSection from '../components/AboutUs/PricingSection'
import TestimonialDomain from '../components/Domain/TestimonialDomain'
import Installation from '../components/Hosting/ResellerHosting/Installation'
import FeatureReseller from '../components/Hosting/ResellerHosting/FeatureReseller'
import ResellerPlan from '../components/Hosting/ResellerHosting/ResellerPlan'
import { LoadingWrapper } from '../components/Shared/LoadingWrapper'


export default function ResellerHosting() {
  return (
    <LoadingWrapper>
      <div>
        <HeroReseller />
        <ResellerPlan />
        <FeatureReseller />
        <Installation />
        <TestimonialDomain />
        <PricingSection scrollToId="resellerHosting" />
      </div>
    </LoadingWrapper>

  )
}
