import { PROFILE_SOCIAL_LINKS } from './constants';
import { Button } from '../Button';

export const Menu = () => {
  return (
    <div className="flex flex-col gap-y-3">
      {PROFILE_SOCIAL_LINKS.map((item, index) => (
        <Button key={index} icon={item.icon} text={item.text} />
      ))}
    </div>
  );
};
