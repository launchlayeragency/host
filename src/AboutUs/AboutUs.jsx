import React from 'react';
import Hero from '../components/AboutUs/Hero';
import GlobalProvider from '../components/AboutUs/GlobalProvider';
import FeaturesSection from '../components/AboutUs/FeaturesSection';
import WhyChooseSection from '../components/AboutUs/WhyChooseSection';
import TestimonialSlider from '../components/AboutUs/TestimonialSlider';
import ImageSlider from '../components/AboutUs/ImageSlider';
import PricingSection from '../components/AboutUs/PricingSection';

const AboutUs = () => {
    return (
        <div>
            <Hero/>
            <GlobalProvider/>
            <FeaturesSection/>
            <WhyChooseSection/>
            <TestimonialSlider/>
            <ImageSlider/>
            <PricingSection/>
        </div>
    );
};

export default AboutUs;