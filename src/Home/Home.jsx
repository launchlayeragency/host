import React from 'react';
import Hero from './Hero';
import HeroCards from './HeroCards';
import AllHosting from './AllHosting';
import SearchDomain from './SearchDomain';
import HostingPlans from './HostingPlans';
import FeaturesForYou from './FeaturesForYou';
import WhyChooseSection from '../components/AboutUs/WhyChooseSection';
import TestimonialSlider from '../components/AboutUs/TestimonialSlider';
import ImageSlider from '../components/AboutUs/ImageSlider';
import PricingSection from '../components/AboutUs/PricingSection';
import Serverworldwide from './Serverworldwide';
import FAQ from './FAQ';

const Home = () => {
    return (
        <div>
            {/* hero section */}
            <Hero/>
            <HeroCards/>
            <AllHosting/>
            <SearchDomain/>
            <HostingPlans/>
            <FeaturesForYou/>
           <TestimonialSlider/>
            <ImageSlider/>
            <Serverworldwide/>
            <FAQ/>
            {/* pricing section */}
            <PricingSection/>
        </div>
    );
};

export default Home;