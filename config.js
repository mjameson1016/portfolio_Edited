// ============================================================
//  PORTFOLIO CONFIG — Edit everything here, nothing else needed
// ============================================================

const CONFIG = {

  // ----------------------------------------------------------
  //  SITE IDENTITY
  // ----------------------------------------------------------
  siteTitle: "Your Name",          // Browser tab title
  logoText:  "Your Name",          // Name shown in top-left
  logoImage: "images/Logo-Image.png",    // Brand image

  // ----------------------------------------------------------
  //  FONTS
  //  Pick any font from https://fonts.google.com
  //  Set the exact font name as it appears on Google Fonts
  // ----------------------------------------------------------
  fonts: {
    display: "Montserrat",   // Used for your logo/name
    body:    "Outfit",               // Used for nav, labels, body text
    displayWeight: 400,              // 300 = light, 400 = regular, 700 = bold
    bodyWeight:    400,
  },

  // ----------------------------------------------------------
  //  COLORS
  // ----------------------------------------------------------
  colors: {
    background:  "#ffffff",
    text:        "#FF5722",
    textMuted:   "#393E46",
    accent:      "#393E46",          // Hover / active color
    overlayBg:   "rgba(0,0,0,0.5)", // Hover overlay on project tiles
  },

  // ----------------------------------------------------------
  //  NAVIGATION LINKS
  //  Each item needs: label and section ("animation" | "illustration" | "about" | "contact" | custom)
  //  To add or remove items, just add/remove objects from this array
  // ----------------------------------------------------------
  nav: [
    { label: "Animation",     section: "animation"     },
    { label: "Illustration",  section: "illustration"  },
    { label: "About",         section: "about"         },
    { label: "Contact",       section: "contact"       },
    { label: "Doodles",       section: "doodles"       },
  ],

  // ----------------------------------------------------------
  //  HEADER / HERO IMAGE (optional)
  //  Set to "" to show no header image (logo-only header)
  //  Or set to a path like "images/hero.jpg" or a full URL
  // ----------------------------------------------------------
  headerImage: "",

  // ----------------------------------------------------------
  //  FOOTER LINKS
  // ----------------------------------------------------------
  footer: [
  { label: "Email",     href: "mailto:hello@mattjameson.co",            icon: "fa-solid fa-square-envelope" },
  { label: "Instagram", href: "https://instagram.com/matthewdjameson",  icon: "fa-brands fa-square-instagram" },
  { label: "Vimeo",     href: "https://vimeo.com/mattjameson",          icon: "fa-brands fa-vimeo" },
],

  // ----------------------------------------------------------
  //  ABOUT PAGE TEXT
  // ----------------------------------------------------------
  about: {
    heading: "About",
    bio: 

`Hi, I'm Matt Jameson.

I'm an animator, illustrator, and director living in Texas with my beautiful wife and daughters. To sum myself up, I am passionate about finding stories and telling them through moving illustrations. I also enjoy music, films, good friends, good food, and football. 

I would love to chat with you about working together: <a href="mailto:hello@mattjameson.co">hello@mattjameson.co`,

    photo: "images/About_Headshot.jpg",   // Optional: "images/about-photo.jpg"
  },

  // ----------------------------------------------------------
  //  CONTACT PAGE
  // ----------------------------------------------------------
  contact: {
    heading: "Get in touch",
    email:   "hello@mattjameson.co",
    message: "If you would like to discuss an idea or a project, or you just want to say hello, feel free to reach out.",
  },

  // ----------------------------------------------------------
  //  PROJECTS
  //
  //  Each project has:
  //    id          — unique slug, used in the URL (no spaces)
  //    title       — shown on hover and on the project page
  //    category    — matches a nav section ("animation" or "illustration")
  //    thumbnail   — image shown in the grid. Path or URL.
  //                  Use "" to show a color placeholder.
  //    thumbColor  — placeholder color if no thumbnail (e.g. "#b5bfc9")
  //
  //  On the project detail page:
  //    heroImage   — large image at top of page (path or URL), or ""
  //    videoUrl    — Vimeo or YouTube embed URL, or ""
  //                  Vimeo:   "https://player.vimeo.com/video/YOUR_VIDEO_ID"
  //                  YouTube: "https://www.youtube.com/embed/YOUR_VIDEO_ID"
  //    description — paragraph(s) of text about the project
  //    details     — key/value pairs shown in a sidebar (role, client, year…)
  //                  Add or remove any rows you like.
  // ----------------------------------------------------------
  projects: [

    {
      id:          "framerate",
      title:       "FrameRate — Brand Film",
      aspectRatio: "16 / 9",
      category:    "animation",
      thumbnail:   "images/animthumbs/FrameRate_Thumb.jpg",
      thumbColor:  "#b9c9b8",
      heroImage:   "",
      videoUrl:    "https://framerate.tv/watch/702ecccb-f78e-4b8f-b73e-d97fa4c2728c",
      description: `A brand film for the video and community platform, FrameRate.
      
      This platform is designed to give creatives a place to upload hi-quality work while helping to build the creative community.`,

      details: [
        { label: "Role",   value: "Animator" },
        { label: "Studio",   value: "The Furrow" },
        { label: "Client", value: "FrameRate" },
        { label: "Tools",  value: "After Effects" },
      ],
    },

    {
      id:          "sent",
      title:       "Sent — Short Film",
      aspectRatio: "2.35 / 1",
      category:    "animation",
      thumbnail:   "images/animthumbs/Sent_Thumb.jpg",
      thumbColor:  "#c9c5be",
      heroImage:   "",
      videoUrl:    "https://player.vimeo.com/video/945966084",
      extraVideos: ["https://player.vimeo.com/video/945966395",
      ],
      description: `This project began as a creative exploration of a story involving a scientist and a robot, and soon evolved into the opportunity to develop a short film.

It quickly gained momentum as the characters were developed through extensive creative collaboration within our team.

We chose to tell the story with only visuals and music, allowing viewers to experience and interpret the emotional journey themselves.

The score was chosen to highlight the beauty in sorrow, reflecting a sense of present sadness while still having hope.`,

      details: [
        { label: "Role",   value: "Lead Animator" },
        { label: "Studio",   value: "The Furrow" },
        { label: "Client", value: "The Furrow Studio Project" },
        { label: "Tools",  value: "After Effects, Adobe Animate" },
      ],
    },

    {
      id:          "microsoft-alt",
      title:       "Microsoft — ALT",
      aspectRatio: "16 / 9",
      category:    "animation",
      thumbnail:   "images/animthumbs/Microsoft_Thumb.jpg",
      thumbColor:  "#b5bfc9",
      heroImage:   "",
      videoUrl:    "https://player.vimeo.com/video/424395428",
      description: `An animation created for Microsoft's ALT campaign.

Reece Parker and Trifilm teamed up to direct this animated film for Microsoft. 

The story follows our main character Luis as he tries to clearly explain the complexities and nuances of ‘language’, and the challenges of teaching AI to thoroughly understand it.`,

      details: [
        { label: "Role",   value: "Animator" },
        { label: "Studio",   value: "Reece Parker / TriFilm" },
        { label: "Client", value: "Microsoft" },
        { label: "Tools",  value: "After Effects" },
      ],
    },

    {
      id:          "google-pixel",
      title:       "Google Pixel 4",
      aspectRatio: "16 / 9",
      category:    "animation",
      thumbnail:   "images/animthumbs/Google_Thumb.jpg",
      thumbColor:  "#c2b8c9",
      heroImage:   "",
      videoUrl:    "https://player.vimeo.com/video/377357796",
      extraVideos: [
    "https://player.vimeo.com/video/377359118",
  ],
      description: `Motion work for the Google Pixel 4 launch campaign.
      
      I had the pleasure of working with the talented team at Buck to create a series of commercials to promote the new Google Pixel 4. 
      Above is a 00:60 version as well as a 00:30 version (different visuals in each one).`,

      details: [
        { label: "Role",   value: "Motion Designer" },
        { label: "Studio",   value: "Buck" },
        { label: "Client", value: "Google" },
        { label: "Tools",  value: "After Effects" },
      ],
    },

    {
      id:          "zelos",
      title:       "Welcome to Zelos",
      aspectRatio: "16 / 9",
      category:    "animation",
      thumbnail:   "images/animthumbs/Zelos_Thumb.jpg",
      thumbColor:  "#b9c9b8",
      heroImage:   "",
      videoUrl:    "https://player.vimeo.com/video/397480432",
      description: `Eido was asked to create an explainer video for Zelos, a new online gaming platform in which you can earn Zelos points that are redeemable between different games.`,

      details: [
        { label: "Role",   value: "Animator" },
        { label: "Studio",   value: "Eido" },
        { label: "Client", value: "Zelos" },
        { label: "Tools",  value: "After Effects" },
      ],
    },

{
  id:          "dell",
  title:       "Dell (Multiple Film Campaign)",
  aspectRatio: "16 / 9",
  category:    "animation",
  thumbnail:   "images/animthumbs/Dell_Thumb.jpg",
  thumbColor:  "#c9c5be",
  heroImage:   "",
  videoUrl:    "https://player.vimeo.com/video/377362133",
  extraVideos: [
    "https://player.vimeo.com/video/377362882",
    "https://player.vimeo.com/video/377363262",
  ],
  description: `A campaign of Multiple films for Dell.
  
  Partizan and Colin Hesterly directed a few spots for DELL Technologies, in which I had the pleasure to animate on. Each one needed to tell a quick story about how technology can improve your life, while keeping you safe online. 
  
  They also needed to have visual consistency through the design and animation.`,
  
  details: [
    { label: "Role",   value: "Animator" },
    { label: "Studio",   value: "Colin Hesterly / Partizan" },
    { label: "Client", value: "Dell" },
    { label: "Tools",  value: "After Effects, Adobe Animate, Cinema 4D" },
  ],
},

  // ----------------------------------------------------------
  //  ILLUSTRATIONS
  //
  //  Each project has:
  //    id          — unique slug, used in the URL (no spaces)
  //    title       — shown on hover and on the project page
  //    category    — matches a nav section ("animation" or "illustration")
  //    thumbnail   — image shown in the grid. Path or URL.
  //                  Use "" to show a color placeholder.
  //    thumbColor  — placeholder color if no thumbnail (e.g. "#b5bfc9")
  // ----------------------------------------------------------

    {
      id:          "train-cars",
      title:       "Train Cars",
      category:    "illustration",
      thumbnail:   "images/illustrations/260109_Train_iLLo_v16.jpg",
      thumbColor:  "#c9beb5",
      heroImage:   "images/illustrations/260109_Train_iLLo_v16.jpg",
    },

    {
      id:          "indiana-jones",
      title:       "Indiana Jones",
      category:    "illustration",
      thumbnail:   "images/illustrations/250207_IndianaJones_iLLo_16.jpg",
      thumbColor:  "#c9beb5",
      heroImage:   "images/illustrations/250207_IndianaJones_iLLo_16.jpg",
    },

    {
      id:          "christmas-town",
      title:       "Christmas Town",
      category:    "illustration",
      thumbnail:   "images/illustrations/251201_TheFurrow_Christmas_22_Car.jpg",
      thumbColor:  "#c9beb5",
      heroImage:   "images/illustrations/251201_TheFurrow_Christmas_22_Car.jpg",
    },

    {
      id:          "runningback",
      title:       "Runningback",
      category:    "illustration",
      thumbnail:   "images/illustrations/250121_Football_RunningBack_iLLo_11_Eagles_ExtraCurves_02.jpg",
      thumbPosition: "80% center",
      thumbColor:  "#c9beb5",
      heroImage:   "images/illustrations/250121_Football_RunningBack_iLLo_11_Eagles_ExtraCurves_02.jpg",
    },

    {
      id:          "pumpjack",
      title:       "Pumpjack",
      category:    "illustration",
      thumbnail:   "images/illustrations/250110_OilPumpJack_06_Noise.jpg",
      thumbPosition: "center 30%",
      thumbColor:  "#c9beb5",
      heroImage:   "images/illustrations/250110_OilPumpJack_06_Noise.jpg",
    },

    {
      id:          "desert-tree",
      title:       "Desert Tree",
      category:    "illustration",
      thumbnail:   "images/illustrations/MJ_PS_DesertScene_07.jpg",
      thumbColor:  "#c9beb5",
      heroImage:   "images/illustrations/MJ_PS_DesertScene_07.jpg",
    },

    {
      id:          "forest",
      title:       "Forest",
      category:    "illustration",
      thumbnail:   "images/illustrations/241125_Forest_illo_03.jpg",
      thumbColor:  "#c9beb5",
      heroImage:   "images/illustrations/241125_Forest_illo_03.jpg",
    },

    {
      id:          "football-flyover",
      title:       "Football Flyover",
      category:    "illustration",
      thumbnail:   "images/illustrations/FootballFlyover_illo_08_Color-02.jpg",
      thumbColor:  "#c9beb5",
      heroImage:   "images/illustrations/FootballFlyover_illo_08_Color-02.jpg",
    },

    {
      id:          "sent-rocket",
      title:       "Sent - Rocket",
      category:    "illustration",
      thumbnail:   "images/illustrations/Sent_Rocket+Parachute_MJ_04.jpg",
      thumbColor:  "#bec9c5",
      heroImage:   "images/illustrations/Sent_Rocket+Parachute_MJ_04.jpg",
    },

   {
      id:          "sailboat",
      title:       "Sailboat",
      category:    "illustration",
      thumbnail:   "images/illustrations/Sailboat_illo_07_Main.jpg",
      thumbColor:  "#c9beb5",
      heroImage:   "images/illustrations/Sailboat_illo_07_Main.jpg",
    },

  // ----------------------------------------------------------
  //  DOODLES
  //
  //  Each doodle has:
  //    id          — unique slug, used in the URL (no spaces)
  //    title       — shown on hover and on the project page
  //    thumbnail   — image shown in the grid. Path or URL.
  //    hoverGif    - Gif shown on hover
  // ----------------------------------------------------------

{
  id: "falling-man",
  title: "Falling Man",
  category: "doodles",
  thumbnail: "images/doodles/FallingMan.gif",
  hoverGif: "images/doodles/FallingMan.gif"
},

{
  id: "shake-it-up",
  title: "Shake It Up",
  category: "doodles",
  thumbnail: "images/doodles/TF_Christmas_SnowGlobe.gif",
  hoverGif: "images/doodles/TF_Christmas_SnowGlobe.gif"
},

  {
  id: "mechanic",
  title: "Mechanic",
  category: "doodles",
  thumbnail: "images/doodles/FB_Organic_MJ_v014.gif",
  hoverGif: "images/doodles/FB_Organic_MJ_v014.gif",
  thumbPosition: "25% center"
},

{
  id: "boxer",
  title: "Boxer",
  category: "doodles",
  thumbnail: "images/doodles/200206_Boxer_v14.gif",
  hoverGif: "images/doodles/200206_Boxer_v14.gif"
},

{
  id: "bomb-drop",
  title: "Bomb Drop",
  category: "doodles",
  thumbnail: "images/doodles/200310_Bomb+Drop-Blast_v04.gif",
  hoverGif: "images/doodles/200310_Bomb+Drop-Blast_v04.gif"
}
   

  ], // end projects


}; // end CONFIG
