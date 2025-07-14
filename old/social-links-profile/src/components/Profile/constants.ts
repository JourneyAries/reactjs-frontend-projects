import type { SocialLink } from './types';

import {
  AiOutlineGithub,
  AiFillLinkedin,
  AiFillInstagram,
  AiFillTwitterCircle,
} from 'react-icons/ai';

export const PROFILE_SOCIAL_LINKS: SocialLink[] = [
  { icon: AiOutlineGithub, text: 'Github' },
  { icon: AiFillLinkedin, text: 'Linkedin' },
  { icon: AiFillTwitterCircle, text: 'Twitter' },
  { icon: AiFillInstagram, text: 'Instagram' },
];
