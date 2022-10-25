import SoundPlayer from 'react-native-sound-player';

export const useSound = () => {
  const play = (name: string, filetype: string) => {
    SoundPlayer.playSoundFile(name, filetype);
  };
  return {play};
};
