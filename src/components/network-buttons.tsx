import InstagramIcon from "@/components/network-icons/instagram-icon";
import TiktokClipsIcon from "@/components/network-icons/tiktok-clips-icon";
import TiktokIcon from "@/components/network-icons/tiktok-icon";
import TwitchIcon from "@/components/network-icons/twitch-icon";
import XIcon from "@/components/network-icons/x-icon";
import YoutubeIcon from "@/components/network-icons/youtube-icon";
import YoutubeVodIcon from "@/components/network-icons/youtube-vod-icon";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const socialNetworks = [
  {
    name: "Twitch",
    href: "https://www.twitch.tv/choke7",
    icon: <TwitchIcon />,
  },
  {
    name: "X - Twitter",
    href: "https://x.com/choke7_",
    icon: <XIcon />,
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@choke7_",
    icon: <TiktokIcon />,
  },
  {
    name: "Youtube",
    href: "https://www.youtube.com/@Choke7",
    icon: <YoutubeIcon />,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/choke7_",
    icon: <InstagramIcon />,
  },
  {
    name: "TikTok Clips",
    href: "https://www.tiktok.com/@choke7.clipes",
    icon: <TiktokClipsIcon />,
  },
  {
    name: "Youtube Vods",
    href: "https://www.youtube.com/@choke7vods",
    icon: <YoutubeVodIcon />,
  },
];

export function NetworkButtons() {
  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-row items-center justify-center gap-3">
        {socialNetworks.map((socialNetwork) => (
          <Tooltip key={socialNetwork.name}>
            <TooltipTrigger>
              <Button
                aria-label={socialNetwork.name}
                variant={"link"}
                size={"icon"}
                className="transition-transform duration-300 hover:scale-110"
                asChild
              >
                <a
                  href={socialNetwork.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={socialNetwork.name}
                >
                  <span className="fill-white p-2 text-white">
                    {socialNetwork.icon}
                  </span>
                </a>
              </Button>
            </TooltipTrigger>
            <TooltipContent>{socialNetwork.name}</TooltipContent>
          </Tooltip>
        ))}
      </div>
    </div>
  );
}
