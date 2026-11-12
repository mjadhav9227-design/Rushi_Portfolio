import React, { useState } from 'react';
import { Play, Sparkles, ArrowUpRight } from 'lucide-react';
import { PortfolioVideo } from './portfolioData';

interface FeaturedSlotProps {
  video: PortfolioVideo | undefined;
  onPlay: (video: PortfolioVideo) => void;
}

export const FeaturedCreatorSlot: React.FC<FeaturedSlotProps> = ({ video, onPlay }) => {
  const [thumbError, setThumbError] = useState(false);

  if (!video) return null;

  // Use hqdefault.jpg thumbnail for the YouTube shorts video ID k2B2e4RKJNw
  const thumbnailUrl = video.youtubeId
    ? `https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`
    : '';

  return (
    <div className="creator-showcase-container">
      <div className="creator-showcase-card">
        {/* Top Header Pill & Status */}
        <div className="creator-showcase-header">
          <div className="creator-badge-pill mono">
            <span className="creator-badge-dot" />
            <Sparkles size={13} />
            <span>CREATOR SHOWCASE</span>
          </div>
          <span className="creator-studio-tag mono">ASR MOTION STUDIO</span>
        </div>

        {/* Two-Column Grid: LEFT Portrait | RIGHT Introduction Video */}
        <div className="creator-showcase-grid">
          {/* LEFT: Creator Portrait */}
          <div className="creator-portrait-col">
            <div className="creator-portrait-frame">
              <img
                src={`${import.meta.env.BASE_URL}rushikesh-creator-portrait.png`}
                alt="Rushikesh More — Founder of ASR Motion Studio"
                className="creator-portrait-img"
              />
              <div className="creator-portrait-glow" />
              <div className="creator-portrait-overlay" />
              <div className="creator-portrait-label">
                <span className="creator-name-tag mono">RUSHIKESH MORE</span>
                <span className="creator-role-tag mono">FOUNDER & DIRECTOR</span>
              </div>
            </div>
          </div>

          {/* RIGHT: Special Introduction Video & Info */}
          <div className="creator-details-col">
            <div className="creator-eyebrow mono">MEET THE CREATOR</div>
            <h3 className="creator-title">
              Meet the Creator — Rushikesh More
            </h3>
            <p className="creator-subtitle">
              Founder of ASR Motion Studio | Video Editor | Motion Graphics Artist | AI Content Creator
            </p>

            <p className="creator-intro-text">
              "I'm Rushikesh More, founder of ASR Motion Studio. I create engaging videos, motion graphics, AI-powered content and creative digital experiences for brands and businesses."
            </p>

            {/* Video Player Card / Preview */}
            <div className="creator-video-box">
              <div
                className="creator-video-preview"
                onClick={() => onPlay(video)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onPlay(video);
                  }
                }}
                aria-label={`Play introduction video: ${video.title}`}
              >
                {!thumbError && thumbnailUrl ? (
                  <img
                    src={thumbnailUrl}
                    alt={video.title}
                    className="creator-video-thumb"
                    loading="lazy"
                    onError={() => setThumbError(true)}
                  />
                ) : (
                  <div className="creator-video-fallback">
                    <span className="mono">WATCH INTRODUCTION</span>
                  </div>
                )}
                <div className="creator-video-overlay" />

                <div className="creator-play-action">
                  <div className="creator-play-glow" aria-hidden="true">
                    <div className="creator-play-btn">
                      <Play size={22} fill="currentColor" className="creator-play-icon" />
                    </div>
                  </div>
                  <span className="creator-play-text mono">
                    PLAY INTRODUCTION <ArrowUpRight size={14} />
                  </span>
                </div>

                <div className="creator-video-badge mono">
                  <span>SPECIAL INTRO / SHORTS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
