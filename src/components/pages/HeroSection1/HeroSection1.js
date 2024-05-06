import React, { useState, useRef, useEffect } from 'react';
import './HeroSection1.css';

const HeroSection1 = () => {
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
    <div className='hero-section-wrapper'>
      <div className='hero-text'>
        <h1>Here's how it works</h1>
        <a href='https://www.google.com'><p>Start A Free Trail  <i class="icon ion-arrow-right-c"></i></p></a>
      </div>

      <div className="hero-section1">
        <div className="left-buttons">
          <button className={`step-button ${currentStep === 1 ? 'active' : ''}`} onClick={() => handleStepChange(1)}>Step 1: Who we are</button>
          <button className={`step-button ${currentStep === 2 ? 'active' : ''}`} onClick={() => handleStepChange(2)}>Step 2: What we do</button>
        </div>
        <div className="video-container">
          <video ref={videoRef} autoPlay muted className='heroSection-video'>
            <source src="/videos/Clip1.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="right-buttons">
          <button className={`step-button ${currentStep === 3 ? 'active' : ''}`} onClick={() => handleStepChange(3)}>Step 3: Our Strategy</button>
          <button className={`step-button ${currentStep === 4 ? 'active' : ''}`} onClick={() => handleStepChange(4)}>Step 4: Our Goals</button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection1;
