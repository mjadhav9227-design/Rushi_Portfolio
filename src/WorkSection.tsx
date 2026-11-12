import React, { useState, useMemo } from 'react';
import { Sparkles, Layers, Film } from 'lucide-react';
import {
  PORTFOLIO_VIDEOS,
  CATEGORIES,
  VideoCategory,
  PortfolioVideo,
} from './portfolioData';
import { VideoCard } from './VideoCard';
import { VideoModal } from './VideoModal';
import { FeaturedCreatorSlot } from './FeaturedCreatorSlot';

export const WorkSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<VideoCategory>('All Projects');
  const [activeVideo, setActiveVideo] = useState<PortfolioVideo | null>(null);

  // Separate featured intro video from grid list
  const featuredVideo = useMemo(
    () => PORTFOLIO_VIDEOS.find((v) => v.id === 'rushikesh-more-intro'),
    []
  );

  // All 10 existing portfolio videos (excluding the intro video)
  const regularVideos = useMemo(
    () => PORTFOLIO_VIDEOS.filter((v) => v.id !== 'rushikesh-more-intro' && v.id !== 'y-academy-promo'),
    []
  );

  const filteredVideos = useMemo(() => {
    if (selectedCategory === 'All Projects') {
      return regularVideos;
    }
    return regularVideos.filter((v) => v.category === selectedCategory);
  }, [selectedCategory, regularVideos]);

  const activeVideosCount = regularVideos.length;

  return (
    <section className="work-section" id="work" aria-labelledby="work-title">
      <div className="section-shell">
        {/* Section Heading matching original layout and typography */}
        <div className="work-heading">
          <div>
            <span className="eyebrow">
              <span className="section-number">03</span> / SELECTED WORK & REELS
            </span>
            <h2 id="work-title">
              Crafted in<br />
              <em className="serif">motion.</em>
            </h2>
          </div>
          <div className="work-intro">
            <span className="work-note-mark">↘</span>
            <p>
              From viral short-form hooks to cinematic AI explainers and commercial promos — explore our verified portfolio of works made to capture attention.
            </p>
          </div>
        </div>

        {/* Featured Creator Slot for Rushikesh More */}
        <FeaturedCreatorSlot
          video={featuredVideo}
          onPlay={(video) => setActiveVideo(video)}
        />

        {/* Category Filters */}
        <div className="portfolio-filter-container">
          <div className="portfolio-filter-bar" role="tablist" aria-label="Portfolio Categories">
            {CATEGORIES.map((category) => {
              const isSelected = selectedCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  className={`portfolio-filter-btn mono ${isSelected ? 'is-active' : ''}`}
                  onClick={() => setSelectedCategory(category)}
                >
                  <span className="filter-btn-label">{category}</span>
                  {category === 'All Projects' && (
                    <span className="filter-count-badge">{activeVideosCount}</span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Video Grid */}
        <div className="portfolio-grid">
          {filteredVideos.map((video, idx) => (
            <VideoCard
              key={video.id}
              video={video}
              index={idx}
              onPlay={(selected) => setActiveVideo(selected)}
            />
          ))}
        </div>

        {/* Footer note matching original aesthetic */}
        <div className="work-footer-meta">
          <p className="work-replace mono">
            NEW CAMPAIGNS, CLIENT DROPS & AI VISUAL STUDIES ADDED CONTINUOUSLY.
          </p>
        </div>
      </div>

      {/* Video Playback Modal */}
      <VideoModal
        video={activeVideo}
        onClose={() => setActiveVideo(null)}
      />
    </section>
  );
};
