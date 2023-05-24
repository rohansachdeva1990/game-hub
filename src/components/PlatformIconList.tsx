import { FaWindows, FaPlaystation, FaApple, FaXbox, FaLinux, FaAndroid } from 'react-icons/fa';
import { MdPhoneIphone } from 'react-icons/md';
import { SiNintendo } from 'react-icons/si';
import { BsGlobe } from 'react-icons/bs';
import { HStack, Icon, Tooltip } from '@chakra-ui/react';
import { IconType } from 'react-icons';
import { Platform } from '../hooks/usePlatforms';

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    ios: MdPhoneIphone,
    android: FaAndroid,
    web: BsGlobe,
  };

  return (
    <HStack marginY={1}>
      {platforms.map((platform) => (
        <Tooltip shouldWrapChildren key={platform.id} label={platform.name} placement='top'>
          <Icon as={iconMap[platform.slug]} color='gray.500' />
        </Tooltip>
      ))}
    </HStack>
  );
};

export default PlatformIconList;
