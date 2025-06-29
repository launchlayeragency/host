import React from 'react'
import PricingSection from '../../components/AboutUs/PricingSection'
import PartnersSection from '../../components/Hosting/SharedHosting/PartnersSection'
import WhmcsHero from '../../components/WHMCS/WhmcsHero'
import HelpWHMCS from '../../components/WHMCS/HelpWHMCS'
import WhmcsNewsSection from '../../components/WHMCS/WhmcsNewsSection'

export default function WHMCS() {
  return (
    <div>
        <WhmcsHero/>
        <HelpWHMCS/>
        <WhmcsNewsSection/>
        <PartnersSection/>
          <PricingSection scrollToId="whmcs"/>
    </div>
  )
}
