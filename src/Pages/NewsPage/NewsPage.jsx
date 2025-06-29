import React from 'react'

import HeroSection from '../../components/Shared/HeroSection'
import { LoadingWrapper } from '../../components/Shared/LoadingWrapper'

export default function NewsPage() {
    return (
        <LoadingWrapper>
            <div>
                {/* hero... */}
                <HeroSection
                    title="News Page"
                    description="The story of how Hostgem came to be."
                    id="news"
                />

                
            </div>
        </LoadingWrapper>

    )
}
