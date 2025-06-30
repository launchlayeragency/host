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

                <div className="news-details-container" style={{ maxWidth: '1200px', margin: '40px auto', padding: '0 20px' }}>
                    <div className="search-bar-container" style={{ marginBottom: '40px', display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                        <input type="text" placeholder="Search" style={{ padding: '8px 12px', border: '1px solid #ddd', borderRadius: '4px', marginRight: '10px' }} />
                        <button style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '18px', color: '#555' }}>&#128269;</button> {/* Search icon */}
                    </div>

                    <div className="news-content-layout" style={{ display: 'flex', gap: '40px', flexDirection: 'column', '@media (min-width: 768px)': { flexDirection: 'row' } }}>
                        {/* Main News Article Section */}
                        <div className="main-article-section" style={{ flex: '2', background: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
                            <img src="https://i.ibb.co/9385yMgx/in-b01.jpg" alt="Main News" style={{ width: '100%', height: 'auto', borderRadius: '8px', marginBottom: '20px' }} />
                            <div className="article-meta" style={{ fontSize: '14px', color: '#777', marginBottom: '15px' }}>
                                <span style={{ marginRight: '15px' }}>By Admin</span>
                                <span style={{ marginRight: '15px' }}>21 Jan 2019</span>
                                <span>Comments (3)</span>
                            </div>
                            <h2 style={{ fontSize: '28px', color: '#333', marginBottom: '20px', lineHeight: '1.3' }}>Monthly Web Development Update The Hurricane Web End-To-End-Integrity</h2>
                            <p style={{ lineHeight: '1.8', color: '#555', marginBottom: '20px' }}>
                                But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain.
                            </p>
                            <p style={{ lineHeight: '1.8', color: '#555', marginBottom: '30px' }}>
                                But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure? On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain.
                            </p>

                            <div className="quote-section" style={{ background: '#f8f8f8', padding: '30px', borderLeft: '5px solid #007bff', fontStyle: 'italic', color: '#444', marginBottom: '30px', borderRadius: '0 8px 8px 0' }}>
                                <p style={{ fontSize: '20px', lineHeight: '1.6', marginBottom: '10px' }}>
                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa quae.
                                </p>
                                <p style={{ fontSize: '16px', fontWeight: 'bold', color: '#333' }}>Alexzender Alex</p>
                            </div>

                            {/* Article Footer Content: Tags and Share */}
                            <div className="article-footer" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', marginTop: '30px', borderTop: '1px solid #eee', paddingTop: '20px' }}>
                                <div className="tags" style={{ fontSize: '15px', color: '#555', marginBottom: '10px' }}>
                                    <span style={{ fontWeight: 'bold', marginRight: '5px' }}>Tag :</span> App Landing, Apps, Corporate
                                </div>
                                <div className="share" style={{ fontSize: '15px', color: '#555', marginBottom: '10px' }}>
                                    <span style={{ fontWeight: 'bold', marginRight: '5px' }}>Share :</span> Facebook, Twitter, Google
                                </div>
                            </div>
                        </div>

                        {/* Sidebar Section */}
                        <div className="sidebar-section" style={{ flex: '1', display: 'flex', flexDirection: 'column', gap: '30px' }}>
                         

                            {/* Do You Love Our Template Ad */}
                            <div className="template-ad-widget" style={{ background: 'linear-gradient(135deg, #007bff, #0056b3)', color: '#fff', padding: '40px 20px', borderRadius: '8px', textAlign: 'center', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
                                <h3 style={{ fontSize: '24px', marginBottom: '20px', lineHeight: '1.3' }}>Do You Love Our Template</h3>
                                <button style={{ background: '#28a745', color: '#fff', border: 'none', padding: '12px 25px', borderRadius: '5px', fontSize: '16px', cursor: 'pointer', transition: 'background-color 0.3s' }}>
                                    Purchase Now
                                </button>
                            </div>

                            {/* Recent Post (from previous image, adjusted for two columns below) */}
                            <div className="recent-post-widget" style={{ background: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
                                <h3 style={{ fontSize: '20px', color: '#333', marginBottom: '20px', borderBottom: '1px solid #eee', paddingBottom: '10px' }}>Recent Post</h3>
                                <div className="recent-post-item" style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
                                    <img src="https://i.ibb.co/9385yMgx/in-b01.jpg" alt="Recent Post" style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: '8px', marginRight: '15px' }} />
                                    <div>
                                        <h4 style={{ fontSize: '16px', color: '#333', marginBottom: '5px', lineHeight: '1.4' }}>Using Visual Composer Website Builder To Create WordPress Websites</h4>
                                        <div className="post-meta" style={{ fontSize: '12px', color: '#777' }}>
                                            <span style={{ marginRight: '10px' }}>By Admin</span>
                                            <span style={{ marginRight: '10px' }}>02 Jan 2019</span>
                                            <span>Comments (3)</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Archives (from previous image) */}
                            <div className="archives-widget" style={{ background: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
                                <h3 style={{ fontSize: '20px', color: '#333', marginBottom: '20px', borderBottom: '1px solid #eee', paddingBottom: '10px' }}>Archives</h3>
                                <ul style={{ listStyle: 'none', padding: 0 }}>
                                    <li style={{ marginBottom: '8px' }}><a href="#" style={{ textDecoration: 'none', color: '#555', display: 'flex', justifyContent: 'space-between' }}>January 2019 <span>(2)</span></a></li>
                                    <li style={{ marginBottom: '8px' }}><a href="#" style={{ textDecoration: 'none', color: '#555', display: 'flex', justifyContent: 'space-between' }}>February 2018 <span>(2)</span></a></li>
                                    <li style={{ marginBottom: '8px' }}><a href="#" style={{ textDecoration: 'none', color: '#555', display: 'flex', justifyContent: 'space-between' }}>April 2018 <span>(3)</span></a></li>
                                    <li style={{ marginBottom: '8px' }}><a href="#" style={{ textDecoration: 'none', color: '#555', display: 'flex', justifyContent: 'space-between' }}>August 2018 <span>(4)</span></a></li>
                                    <li style={{ marginBottom: '8px' }}><a href="#" style={{ textDecoration: 'none', color: '#555', display: 'flex', justifyContent: 'space-between' }}>September 2018 <span>(4)</span></a></li>
                                    <li style={{ marginBottom: '8px' }}><a href="#" style={{ textDecoration: 'none', color: '#555', display: 'flex', justifyContent: 'space-between' }}>December 2017 <span>(5)</span></a></li>
                                </ul>
                            </div>

                            {/* Popular Tag (from previous image) */}
                            <div className="popular-tag-widget" style={{ background: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
                                <h3 style={{ fontSize: '20px', color: '#333', marginBottom: '20px', borderBottom: '1px solid #eee', paddingBottom: '10px' }}>Popular Tag</h3>
                                <div className="tags-container" style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                                    {['HTML', 'CSS', 'PSD', 'BOOT', 'WORDPRESS', 'JOOMLA', 'JQUERY'].map(tag => (
                                        <span key={tag} style={{ background: '#007bff', color: '#fff', padding: '8px 15px', borderRadius: '5px', fontSize: '14px', cursor: 'pointer', transition: 'background-color 0.3s', '&:hover': { backgroundColor: '#0056b3' } }}>
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Horizontal Recent Post Section (below main content area) */}
                    <div className="recent-posts-horizontal" style={{ marginTop: '60px', marginBottom: '60px' }}>
                        <h3 style={{ fontSize: '24px', color: '#333', marginBottom: '30px', borderBottom: '1px solid #eee', paddingBottom: '15px' }}>Recent Post</h3>
                        <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap', justifyContent: 'center' }}>
                            <div className="post-card" style={{ flex: '1 1 45%', minWidth: '300px', background: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)', textAlign: 'center' }}>
                                <img src="https://i.ibb.co/gFF8wQ4D/14.jpg" alt="Post 1" style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px', marginBottom: '15px' }} />
                                <h4 style={{ fontSize: '18px', color: '#333', marginBottom: '10px', lineHeight: '1.4' }}>Using Visual Composer Website Builder To Create WordPress Websites</h4>
                                <div className="post-meta" style={{ fontSize: '13px', color: '#777' }}>
                                    <span style={{ marginRight: '10px' }}>By Michel</span>
                                    <span style={{ marginRight: '10px' }}>Comments (5)</span>
                                    <span>20 Jan 2019</span>
                                </div>
                            </div>
                            <div className="post-card" style={{ flex: '1 1 45%', minWidth: '300px', background: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)', textAlign: 'center' }}>
                                <img src="https://i.ibb.co/k2sYgzhY/05.jpg" alt="Post 2" style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px', marginBottom: '15px' }} />
                                <h4 style={{ fontSize: '18px', color: '#333', marginBottom: '10px', lineHeight: '1.4' }}>Using Visual Composer Website Builder To Create WordPress Websites</h4>
                                <div className="post-meta" style={{ fontSize: '13px', color: '#777' }}>
                                    <span style={{ marginRight: '10px' }}>By Tanvir</span>
                                    <span style={{ marginRight: '10px' }}>Comments (2)</span>
                                    <span>20 Jan 2019</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Comments Section */}
                    <div className="comments-section" style={{ background: '#fff', padding: '30px', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)', marginTop: '40px' }}>
                        <h3 style={{ fontSize: '24px', color: '#333', marginBottom: '30px', borderBottom: '1px solid #eee', paddingBottom: '15px' }}>Comments</h3>

                        {/* Comment 1 */}
                        <div className="comment-item" style={{ display: 'flex', marginBottom: '30px', paddingBottom: '20px', borderBottom: '1px solid #eee' }}>
                            <img src="https://i.ibb.co/gMkzRtY4/blog-widget.jpg" alt="User Avatar" style={{ width: '60px', height: '60px', borderRadius: '50%', objectFit: 'cover', marginRight: '20px' }} />
                            <div className="comment-content">
                                <h4 style={{ fontSize: '18px', color: '#333', marginBottom: '5px' }}>Fernando Hinkle</h4>
                                <p style={{ fontSize: '14px', color: '#777', marginBottom: '10px' }}>CEO & Founder</p>
                                <p style={{ lineHeight: '1.7', color: '#555', marginBottom: '10px' }}>But I must explain to you how all this mistaken idea of denouncingure and praising pain was born and i will give you a complete.</p>
                                <a href="#" style={{ color: '#007bff', textDecoration: 'none', fontSize: '14px' }}>Reply</a>
                            </div>
                        </div>

                        {/* Comment 2 (Nested/Reply) */}
                        <div className="comment-item" style={{ display: 'flex', marginBottom: '30px', paddingBottom: '20px', borderBottom: '1px solid #eee', marginLeft: '80px' }}> {/* Added left margin for reply */}
                            <img src="https://i.ibb.co/gFF8wQ4D/14.jpg" alt="User Avatar" style={{ width: '60px', height: '60px', borderRadius: '50%', objectFit: 'cover', marginRight: '20px' }} />
                            <div className="comment-content">
                                <h4 style={{ fontSize: '18px', color: '#333', marginBottom: '5px' }}>Nancy Bellantoni</h4>
                                <p style={{ fontSize: '14px', color: '#777', marginBottom: '10px' }}>CEO & Founder</p>
                                <p style={{ lineHeight: '1.7', color: '#555', marginBottom: '10px' }}>But i must explain to you how all this mistaken idea of denouncingure and praising pain was born and i will give you a complete.</p>
                                <a href="#" style={{ color: '#007bff', textDecoration: 'none', fontSize: '14px' }}>Reply</a>
                            </div>
                        </div>

                        {/* Add a form for leaving comments here if needed */}
                    </div>
                </div>
            </div>
        </LoadingWrapper>
    );
}