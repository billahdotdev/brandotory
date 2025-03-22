"use client"

import { Facebook, Instagram } from "react-feather"
import { TikTokIcon, PinterestIcon, XIcon } from "./CustomIcons"

const SocialBar = ({ onButtonHover }) => {
  const socialLinks = [
    { icon: <Facebook size={18} />, url: "https://facebook.com", name: "Facebook" },
    { icon: <Instagram size={18} />, url: "https://instagram.com", name: "Instagram" },
    { icon: <TikTokIcon size={18} />, url: "https://tiktok.com", name: "TikTok" },
    { icon: <PinterestIcon size={18} />, url: "https://pinterest.com", name: "Pinterest" },
    { icon: <XIcon size={18} />, url: "https://x.com", name: "X" },
  ]

  return (
    <div className="social-bar">
      {socialLinks.map((social, index) => (
        <a
          key={index}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
          onMouseEnter={() => onButtonHover(true, social.name)}
          onMouseLeave={() => onButtonHover(false, "")}
        >
          {social.icon}
        </a>
      ))}
    </div>
  )
}

export default SocialBar

