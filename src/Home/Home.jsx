import React from 'react';
import Hero from './Hero';
import HeroCards from './HeroCards';
import AllHosting from './AllHosting';
import SearchDomain from './SearchDomain';

const Home = () => {
    return (
        <div>
            {/* hero section */}
            <Hero/>
            <HeroCards/>
            <AllHosting/>
            <SearchDomain/>
        </div>
    );
};

export default Home;