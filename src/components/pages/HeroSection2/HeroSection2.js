import React, { useState, useRef, useEffect } from 'react';
import './HeroSection2.css';

const HeroSection2 = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const videoRef = useRef(null);

  useEffect(() => {
    const handleVideoEnd = () => {
      // Automatically switch to the next step when the video ends
      setCurrentStep(currentStep => currentStep < 4 ? currentStep + 1 : 1);
      // Play the next video
      switch (currentStep) {
        case 1:
          videoRef.current.src = '/videos/Clip1.mp4';
          break;
        case 2:
          videoRef.current.src = '/videos/Clip2.mp4';
          break;
        case 3:
          videoRef.current.src = '/videos/Clip3.mp4';
          break;
        case 4:
          videoRef.current.src = '/videos/Clip4.mp4';
          break;
        default:
          break;
      }
      // Play the next video
      videoRef.current.play();
    };

    // Add event listener to the video to handle end event
    videoRef.current.addEventListener('ended', handleVideoEnd);

    // Clean up event listener on component unmount
    return () => {
      videoRef.current.removeEventListener('ended', handleVideoEnd);
    };
  }, [currentStep]);

  const handleStepChange = (step) => {
    setCurrentStep(step);
    // Play the corresponding video when changing step
    switch (step) {
      case 1:
        videoRef.current.src = '/videos/Clip1.mp4';
        break;
      case 2:
        videoRef.current.src = '/videos/Clip2.mp4';
        break;
      case 3:
        videoRef.current.src = '/videos/Clip3.mp4';
        break;
      case 4:
        videoRef.current.src = '/videos/Clip4.mp4';
        break;
      default:
        break;
    }
    // Play the video when step changes
    videoRef.current.play();
  };

  return (
    <div className="hero-section-two-wrapper">
      <div className='hero-section-sub-wrapper'>
      <div className="tab-buttons">
        <a className={`remote-button ${currentStep === 1 ? 'current' : ''}`}  onClick={() => handleStepChange(1)}>Tab 1</a>
        <a className={`remote-button ${currentStep === 2 ? 'current' : ''}`}  onClick={() => handleStepChange(2)}>Tab 2</a>
        <a className={`remote-button ${currentStep === 3 ? 'current' : ''}`}  onClick={() => handleStepChange(3)}>Tab 3 </a>
        <a className={`remote-button ${currentStep === 4 ? 'current' : ''}`}  onClick={() => handleStepChange(4)}>Tab 4</a>
      </div>

      <div className="video-container-tabs">
        <video ref={videoRef} autoPlay muted className='heroSection-two-video'>
          <source src="/videos/Clip1.mp4" type="video/mp4" />
        </video>
        <button className='get-started'>Get Started</button>
      </div>
      </div>
    </div>
  );
};

export default HeroSection2;
