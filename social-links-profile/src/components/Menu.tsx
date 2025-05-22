import {
  AiOutlineGithub,
  AiFillLinkedin,
  AiFillInstagram,
  AiFillTwitterCircle,
} from 'react-icons/ai';
import { Button } from './Button';
import type { ReactElement } from 'react';

type IconWithClassName = ReactElement<{ className?: string }>;
type ButtonItem = {
  icon: IconWithClassName;
  text: string;
};

export const Menu = () => {
  const buttonItems: ButtonItem[] = [
    { icon: <AiOutlineGithub />, text: 'Github' },
    { icon: <AiFillLinkedin />, text: 'Linkedin' },
    { icon: <AiFillTwitterCircle />, text: 'Twitter' },
    { icon: <AiFillInstagram />, text: 'Instagram' },
  ];

  return (
    <div className="flex flex-col gap-y-3">
      {buttonItems.map((item, index) => (
        <Button key={index} icon={item.icon} text={item.text} />
      ))}
    </div>
  );
};
