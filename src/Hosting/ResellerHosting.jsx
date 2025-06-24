import React from 'react'
import HeroReseller from '../components/Hosting/ResellerHosting/HeroReseller'
import PricingSection from '../components/AboutUs/PricingSection'
import TestimonialDomain from '../components/Domain/TestimonialDomain'
import Installation from '../components/Hosting/ResellerHosting/Installation'
import FeatureReseller from '../components/Hosting/ResellerHosting/FeatureReseller'


export default function ResellerHosting() {
  return (
    <div>
        <HeroReseller/>
        <FeatureReseller/>
        <Installation/>
      <TestimonialDomain/>
      <PricingSection scrollToId="resellerHosting"/>
    </div>
  )
}
