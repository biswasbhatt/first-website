import React, { useState } from 'react';
import { PasswordGate } from './components/PasswordGate';
import { FirstReveal } from './components/FirstReveal';
import { HeroSection } from './components/HeroSection';
import { DistanceSection } from './components/DistanceSection';
import { PhotoStory } from './components/PhotoStory';
import { FiveThings } from './components/FiveThings';
import { FlowerSection } from './components/FlowerSection';
import { MemoriesSection } from './components/MemoriesSection';
import { VideoSection } from './components/VideoSection';
import { LoveLetter } from './components/LoveLetter';
import { DistanceMemory } from './components/DistanceMemory';
import { SurpriseSection } from './components/SurpriseSection';
import { FinalSection } from './components/FinalSection';
import { FallingPetals } from './components/FallingPetals';
import { MusicPlayer } from './components/MusicPlayer';
import { CustomCursor } from './components/CustomCursor';
import './assets/styles/globals.css';

export default function App() {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [isRevealed, setIsRevealed] = useState(false);

  const handleUnlock = () => {
    setIsUnlocked(true);
  };

  const handleRevealComplete = () => {
    setIsRevealed(true);
  };

  return (
    <div style={{ position: 'relative', width: '100%', minHeight: '100vh', backgroundColor: '#120307' }}>
      {/* Film Grain Texture */}
      <div className="film-grain" />

      {/* Desktop Custom Glowing Cursor */}
      <CustomCursor />

      {/* Step 1: Cinematic Password Gate */}
      {!isUnlocked && (
        <PasswordGate onUnlock={handleUnlock} />
      )}

      {/* Step 2: Post-Unlock Film Opening Scene */}
      {isUnlocked && !isRevealed && (
        <FirstReveal onComplete={handleRevealComplete} />
      )}

      {/* Step 3: Main Cinematic Experience */}
      {isUnlocked && isRevealed && (
        <main>
          <FallingPetals density={20} intensity="normal" />
          <HeroSection />
          <DistanceSection />
          <PhotoStory />
          <FiveThings />
          <FlowerSection />
          <MemoriesSection />
          <VideoSection />
          <LoveLetter />
          <DistanceMemory />
          <SurpriseSection />
          <FinalSection />
          <MusicPlayer isUnlocked={isUnlocked} />
        </main>
      )}
    </div>
  );
}
