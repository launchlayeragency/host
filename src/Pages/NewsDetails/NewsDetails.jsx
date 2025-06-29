import HeroSection from "../../components/Shared/HeroSection";
import { LoadingWrapper } from "../../components/Shared/LoadingWrapper";


export default function NewsDetails() {
    return (
        <LoadingWrapper>
            <div>
                {/* hero ... */}
                <HeroSection
                    title="News Details"
                    description="The story of how Hostgem came to be."
                    id="news-details"
                />
                
            </div>
        </LoadingWrapper>

    )
}
