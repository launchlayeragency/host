
import GlobalProvider from '../components/AboutUs/GlobalProvider';
import FeaturesSection from '../components/AboutUs/FeaturesSection';
import WhyChooseSection from '../components/AboutUs/WhyChooseSection';
import TestimonialSlider from '../components/AboutUs/TestimonialSlider';
import ImageSlider from '../components/AboutUs/ImageSlider';
import PricingSection from '../components/AboutUs/PricingSection';
import HeroSection from '../components/Shared/HeroSection';

const AboutUs = () => {
    return (
        <div>
            <HeroSection
                title="About Hostgem"
                description="The story of how Hostgem came to be."
                id="about"
            />
            <GlobalProvider />
            <FeaturesSection />
            <WhyChooseSection />
            <TestimonialSlider />
            <ImageSlider />
            <PricingSection scrollToId="about" />
        </div>
    );
};

export default AboutUs;