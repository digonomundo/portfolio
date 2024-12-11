'use client';

import Link from "next/link";
import { FaLinkedinIn, FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa";

type SocialItem = {
  icon: React.ReactNode;
  path: string;
};

type SociaisProps = {
  containerStyles?: string;
  iconSyles?: string;
};

const sociais: SocialItem[] = [
  { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/digonomundo" },
  { icon: <FaGithub />, path: "https://github.com/digonomundo" },
  { icon: <FaInstagram />, path: "https://www.instagram.com/digonomundo" },
  { icon: <FaWhatsapp />, path: "https://wa.me/5517992017318" },
];

const Sociais: React.FC<SociaisProps> = ({ containerStyles, iconSyles }) => {
  return (
    <div className={containerStyles}>
      {sociais.map((item, index) => (
        <Link
          key={index}
          href={item.path}
          className={iconSyles}
          target="_blank"
          rel="noopener noreferrer"
        >
          {item.icon}
        </Link>
      ))}
    </div>
  );
};

export default Sociais;
