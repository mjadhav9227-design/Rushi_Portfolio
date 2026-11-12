import React, { useState } from 'react';
import { Play, Sparkles, Clock, ArrowUpRight } from 'lucide-react';
import { PortfolioVideo } from './portfolioData';

interface VideoCardProps {
  video: PortfolioVideo;
  index: number;
  onPlay: (video: PortfolioVideo) => void;
}

export const VideoCard: React.FC<VideoCardProps> = ({ video, index, onPlay }) => {
  const [thumbError, setThumbError] = useState(false);
  const isPortrait = video.orientation === 'portrait';
  const isPending = video.status === 'coming-soon' || !video.youtubeId;

  // Primary YouTube thumbnail: hqdefault.jpg is guaranteed across standard uploads and shorts.
  const thumbnailUrl = video.youtubeId
    ? `https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`
    : '';

  const formattedIndex = String(index + 1).padStart(2, '0');

  const handleClick = () => {
    if (!isPending) {
      onPlay(video);
    }
  };

  return (
    <article
      className={`portfolio-card ${isPortrait ? 'is-portrait' : 'is-landscape'} ${isPending ? 'is-pending' : ''}`}
      onClick={handleClick}
      role={isPending ? 'article' : 'button'}
      tabIndex={isPending ? undefined : 0}
      onKeyDown={(e) => {
        if (!isPending && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault();
          handleClick();
        }
      }}
      aria-label={isPending ? `${video.title} (Coming Soon)` : `Play video: ${video.title}`}
    >
      <div className="portfolio-thumb-wrapper">
        {!thumbError && thumbnailUrl ? (
          <img
            src={thumbnailUrl}
            alt={video.title}
            className="portfolio-thumb-img"
            loading="lazy"
            onError={() => setThumbError(true)}
          />
        ) : (
          <div className="portfolio-thumb-fallback">
            <div className="fallback-glow" />
            <span className="fallback-badge mono">ASR MOTION STUDIO</span>
            <span className="fallback-title">{video.title}</span>
          </div>
        )}

        <div className="portfolio-thumb-overlay" />

        {/* Top Badges */}
        <div className="portfolio-card-top-badges">
          <span className="card-badge-category mono">{video.category}</span>
          <span className="card-badge-index mono">{formattedIndex}</span>
        </div>

        {/* Center Action Button */}
        <div className="portfolio-card-center-action">
          {isPending ? (
            <div className="pending-badge-pill">
              <Clock size={16} />
              <span className="mono">COMING SOON</span>
            </div>
          ) : (
            <div className="play-button-glow" aria-hidden="true">
              <div className="play-button-inner">
                <Play size={20} fill="currentColor" className="play-icon" />
              </div>
            </div>
          )}
        </div>

        {/* Bottom Tag / Aspect */}
        <div className="portfolio-card-bottom-bar">
          <span className="portfolio-orientation-tag mono">
            {isPortrait ? 'SHORTS / 9:16' : 'CINEMATIC / 16:9'}
          </span>
          {!isPending && (
            <span className="portfolio-play-cue mono">
              WATCH <ArrowUpRight size={13} />
            </span>
          )}
        </div>
      </div>

      <div className="portfolio-card-content">
        <h3 className="portfolio-card-title">{video.title}</h3>
        <p className="portfolio-card-desc">{video.description}</p>
        {video.tags && video.tags.length > 0 && (
          <div className="portfolio-card-tags">
            {video.tags.map((tag) => (
              <span key={tag} className="portfolio-tag mono">
                #{tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </article>
  );
};
