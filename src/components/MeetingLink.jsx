import { Link2 } from "lucide-react";

const MeetingLink = ({ url, className = "" }) => {
  const getMeetingService = (url) => {
    if (!url) return null;

    try {
      const parsedUrl = new URL(url);
      const hostname = parsedUrl.hostname.toLowerCase();
      const path = parsedUrl.pathname.toLowerCase();

      // Zoom (supports multiple domains and personal meeting links)
      if (
        hostname.includes("zoom.us") ||
        hostname.includes("zoom.com") ||
        hostname.endsWith(".zoom.us") ||
        path.includes("/j/")
      ) {
        // For personal meeting links like zoom.us/j/123456
        return "zoom";
      }

      // Google Meet
      if (
        hostname.includes("meet.google.com") ||
        (hostname.includes("google.com") && path.includes("/meet/"))
      ) {
        return "google-meet";
      }

      // Microsoft Teams
      if (
        hostname.includes("teams.microsoft.com") ||
        hostname.includes("teams.live.com")
      ) {
        return "teams";
      }

      // Webex
      if (hostname.includes("webex.com") || hostname.includes(".webex.com")) {
        return "webex";
      }

      // Jitsi
      if (hostname.includes("jitsi.") || hostname.includes("meet.jit.si")) {
        return "jitsi";
      }

      // Hopin (virtual event platform)
      if (hostname.includes("hopin.com") || hostname.includes("hopin.to")) {
        return "hopin";
      }

      // Airmeet (virtual event platform)
      if (
        hostname.includes("airmeet.com") ||
        hostname.includes("airmeet.events")
      ) {
        return "airmeet";
      }

      // Remo (virtual event platform)
      if (hostname.includes("remo.co")) {
        return "remo";
      }

      // BigMarker (webinar platform)
      if (hostname.includes("bigmarker.com")) {
        return "bigmarker";
      }

      // Livestorm (webinar platform)
      if (hostname.includes("livestorm.com")) {
        return "livestorm";
      }

      // YouTube Shorts
      if (
        (hostname.includes("youtube.com") && path.includes("/shorts/")) ||
        (hostname.includes("youtu.be") && path.includes("/shorts/"))
      ) {
        return "youtube-shorts";
      }

      // YouTube Live
      if (
        hostname.includes("youtube.com") &&
        (path.includes("/live/") || path.includes("/watch"))
      ) {
        // Check if it's a live stream or regular video
        if (path.includes("/live/")) {
          return "youtube-live";
        } else {
          return "youtube";
        }
      }

      // Twitch
      if (hostname.includes("twitch.tv")) {
        return "twitch";
      }

      // Vimeo Livestream
      if (hostname.includes("vimeo.com") && path.includes("/event/")) {
        return "vimeo-live";
      }

      return null;
    } catch {
      return null;
    }
  };

  const service = getMeetingService(url);

  if (!service) {
    return (
      <a
        href={url}
        target="_blank"
        className={`flex items-center gap-1 underline ${className}`}
      >
        <Link2 className="h-4 w-4" />
        {url}
      </a>
    );
  }

  return (
    <a
      href={url}
      target="_blank"
      className={`flex items-center gap-2 ${className}`}
    >
      {/* Zoom */}
      {service === "zoom" && (
        <>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/7b/Zoom_%28software%29_Logo.png"
            alt="Zoom"
            className="h-4 w-4 object-contain"
          />
          <span>Zoom</span>
        </>
      )}

      {/* Google Meet */}
      {service === "google-meet" && (
        <>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/9b/Google_Meet_icon_%282020%29.svg"
            alt="Google Meet"
            className="h-4 w-4 object-contain"
          />
          <span>Google Meet</span>
        </>
      )}

      {/* Microsoft Teams */}
      {service === "teams" && (
        <>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Microsoft_Office_Teams_%282018%E2%80%93present%29.svg/1200px-Microsoft_Office_Teams_%282018%E2%80%93present%29.svg.png"
            alt="Microsoft Teams"
            className="h-4 w-4 object-contain"
          />
          <span>Teams</span>
        </>
      )}

      {/* Webex */}
      {service === "webex" && (
        <>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Cisco_Webex_Logo.svg/1200px-Cisco_Webex_Logo.svg.png"
            alt="Webex"
            className="h-4 w-4 object-contain"
          />
          <span>Webex</span>
        </>
      )}

      {/* Jitsi */}
      {service === "jitsi" && (
        <>
          <img
            src="https://jitsi.org/wp-content/uploads/2019/10/logo2.png"
            alt="Jitsi"
            className="h-4 w-4 object-contain"
          />
          <span>Jitsi</span>
        </>
      )}

      {/* Hopin */}
      {service === "hopin" && (
        <>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Hopin_logo.svg/1200px-Hopin_logo.svg.png"
            alt="Hopin"
            className="h-4 w-4 object-contain"
          />
          <span>Hopin</span>
        </>
      )}

      {/* Airmeet */}
      {service === "airmeet" && (
        <>
          <img
            src="https://www.airmeet.com/hubfs/airmeet-logo-blue.svg"
            alt="Airmeet"
            className="h-4 w-4 object-contain"
          />
          <span>Airmeet</span>
        </>
      )}

      {/* Remo */}
      {service === "remo" && (
        <>
          <img
            src="https://remo.co/wp-content/uploads/2020/12/remo-logo.svg"
            alt="Remo"
            className="h-4 w-4 object-contain"
          />
          <span>Remo</span>
        </>
      )}

      {/* BigMarker */}
      {service === "bigmarker" && (
        <>
          <img
            src="https://www.bigmarker.com/assets/pages/home/bigmarker_logo-3c3a3a9d4e2a5c0d9c9d3e3b3c3a3a9d.png"
            alt="BigMarker"
            className="h-4 w-4 object-contain"
          />
          <span>BigMarker</span>
        </>
      )}

      {/* Livestorm */}
      {service === "livestorm" && (
        <>
          <img
            src="https://www.livestorm.co/wp-content/uploads/2021/01/livestorm-logo.svg"
            alt="Livestorm"
            className="h-4 w-4 object-contain"
          />
          <span>Livestorm</span>
        </>
      )}

      {/* YouTube Shorts */}
      {service === "youtube-shorts" && (
        <>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/1024px-YouTube_full-color_icon_%282017%29.svg.png"
            alt="YouTube Shorts"
            className="h-4 w-4 object-contain"
          />
          <span>YouTube Shorts</span>
        </>
      )}

      {/* YouTube Live */}
      {service === "youtube-live" && (
        <>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/1024px-YouTube_full-color_icon_%282017%29.svg.png"
            alt="YouTube Live"
            className="h-4 w-4 object-contain"
          />
          <span>YouTube</span>
        </>
      )}

      {/* Regular YouTube Video */}
      {service === "youtube" && (
        <>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/1024px-YouTube_full-color_icon_%282017%29.svg.png"
            alt="YouTube"
            className="h-4 w-4 object-contain"
          />
          <span>YouTube</span>
        </>
      )}

      {/* Twitch */}
      {service === "twitch" && (
        <>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Twitch_logo.svg/1200px-Twitch_logo.svg.png"
            alt="Twitch"
            className="h-4 w-4 object-contain"
          />
          <span>Twitch</span>
        </>
      )}

      {/* Vimeo Livestream */}
      {service === "vimeo-live" && (
        <>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Vimeo_Logo.svg/1200px-Vimeo_Logo.svg.png"
            alt="Vimeo Live"
            className="h-4 w-4 object-contain"
          />
          <span>Vimeo</span>
        </>
      )}
    </a>
  );
};

export default MeetingLink;
