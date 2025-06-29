import React from 'react'
import PricingSection from '../../components/AboutUs/PricingSection'
import PartnersSection from '../../components/Hosting/SharedHosting/PartnersSection'
import WhmcsHero from '../../components/WHMCS/WhmcsHero'

export default function WHMCS() {
  return (
    <div>
        <WhmcsHero/>
        <PartnersSection/>
          <PricingSection scrollToId="whmcs"/>
    </div>
  )
}
