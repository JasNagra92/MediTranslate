import SoundPlayer from 'react-native-sound-player';

export const useSound = () => {
  const play = (name: string) => {
    SoundPlayer.playSoundFile(name, 'mp3');
  };
  return {play};
};
