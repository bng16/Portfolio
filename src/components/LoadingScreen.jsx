import React, { useEffect } from 'react';
import gsap from 'gsap';

const LoadingScreen = ({ setIsLoading }) => {
  useEffect(() => {
    const handleWindowLoad = () => {
      // All assets are loaded, proceed to remove loading screen with animation
      const tl = gsap.timeline({
        onComplete: () => setTimeout(() => setIsLoading(false), 1000), // Delay after the animation
      });

      // Animation for loading screen fade-out and slide-up
      tl.to('.loading-text', { opacity: 1, duration: 1 })
        .to('.loading-text', { opacity: 0, duration: 1 })
        .to('.loading-screen', {
          y: '-100%',
          duration: 1.5,
          ease: 'power2.inOut',
        });
    };

    // Listen for the window load event (this ensures all images are loaded)
    window.addEventListener('load', handleWindowLoad);

    return () => {
      window.removeEventListener('load', handleWindowLoad);
    };
  }, [setIsLoading]);

  return (
    <div className="loading-screen fixed inset-0 bg-primary z-[9999] flex items-center justify-center">
      <h1 className="loading-text text-4xl text-secondary opacity-0">Loading...</h1>
    </div>
  );
};

export default LoadingScreen;
