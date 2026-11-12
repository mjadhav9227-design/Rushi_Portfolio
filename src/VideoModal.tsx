import React, { useEffect } from 'react';
import { X, ExternalLink, Play } from 'lucide-react';
import { PortfolioVideo } from './portfolioData';

interface VideoModalProps {
  video: PortfolioVideo | null;
  onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ video, onClose }) => {
  useEffect(() => {
    if (!video) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [video, onClose]);

  if (!video || !video.youtubeId) return null;

  const isPortrait = video.orientation === 'portrait';
  // Use youtube-nocookie.com embed with autoplay=1, rel=0, modestbranding=1
  const embedUrl = `https://www.youtube-nocookie.com/embed/${video.youtubeId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`;

  return (
    <div
      className="video-modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-label={video.title}
      onClick={onClose}
    >
      <div
        className={`video-modal-dialog ${isPortrait ? 'is-portrait' : 'is-landscape'}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="video-modal-header">
          <div className="video-modal-meta">
            <span className="video-modal-tag mono">{video.category}</span>
            <span className="video-modal-badge mono">
              {isPortrait ? 'PORTRAIT 9:16' : 'WIDESCREEN 16:9'}
            </span>
          </div>
          <button
            type="button"
            className="video-modal-close"
            onClick={onClose}
            aria-label="Close video player"
            autoFocus
          >
            <X size={20} />
          </button>
        </div>

        <div className={`video-modal-player-wrap ${isPortrait ? 'aspect-portrait' : 'aspect-landscape'}`}>
          <iframe
            src={embedUrl}
            title={video.title}
            className="video-modal-iframe"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
            allowFullScreen
          />
        </div>

        <div className="video-modal-footer">
          <div className="video-modal-info">
            <h3 className="video-modal-title">{video.title}</h3>
            <p className="video-modal-desc">{video.description}</p>
          </div>
          {video.youtubeUrl && (
            <a
              href={video.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="video-modal-yt-link mono"
            >
              <span>Watch on YouTube</span>
              <ExternalLink size={14} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
