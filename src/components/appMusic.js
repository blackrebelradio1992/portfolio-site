import React, { useEffect, useState } from 'react';
import useSound from 'use-sound';
import BlueDevils from '../assets/sounds/BlueDevilsTrapDickey-INSTRUMENTAL-BEAT.mp3';

const PlaySound = () => {
  const [playCount, setPlayCount] = useState(0);
  const [play, { stop }] = useSound(BlueDevils, { 
    loop: true,
    onend: () => {
      if (playCount < 2) { // Since count starts from 0, 2 means 3 plays
        setPlayCount(playCount + 1);
      } else {
        stop(); // Stop after playing 3 times
      }
    },
  });

  useEffect(() => {
    play(); // Start playing automatically on component mount
  }, [play]);

  // Removed the button. The music will play automatically and stop after 3 loops
  return <div />;
};

export default PlaySound;
   
 