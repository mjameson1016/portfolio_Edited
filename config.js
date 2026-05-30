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
    displayWeight: 300,              // 300 = light, 400 = regular, 700 = bold
    bodyWeight:    400,
  },

  // ----------------------------------------------------------
  //  COLORS
  // ----------------------------------------------------------
  colors: {
    background:  "#ffffff",
    text:        "#111111",
    textMuted:   "#777777",
    accent:      "#111111",          // Hover / active color
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
    { label: "hello@mattjameson.co", href: "mailto:hello@mattjameson.co" },
    { label: "Instagram",          href: "https://instagram.com/matthewdjameson" },
    { label: "Vimeo",              href: "https://vimeo.com/mattjameson" },
  ],

  // ----------------------------------------------------------
  //  ABOUT PAGE TEXT
  // ----------------------------------------------------------
  about: {
    heading: "About",
    bio: `Your bio goes here. Write a few sentences about yourself,
your background, the kind of work you do, and what drives you.
This can be as long or short as you like.`,
    photo: "",   // Optional: "images/about-photo.jpg"
  },

  // ----------------------------------------------------------
  //  CONTACT PAGE
  // ----------------------------------------------------------
  contact: {
    heading: "Get in touch",
    email:   "hello@yourname.com",
    message: "Available for freelance and commissions.",
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
      title:       "FrameRate - Brand Film",
      aspectRatio: "16 / 9",
      category:    "animation",
      thumbnail:   "images/FrameRate_Thumb.jpg",
      thumbColor:  "#b9c9b8",
      heroImage:   "",
      videoUrl:    "https://framerate.tv/watch/702ecccb-f78e-4b8f-b73e-d97fa4c2728c",
      description: `A brand film for the video and community platform, FrameRate
Replace this with your own description of the project — what it's about,
what inspired it, how it was made.`,
      details: [
        { label: "Role",   value: "Animator" },
        { label: "Year",   value: "2026" },
        { label: "Client", value: "FrameRate" },
        { label: "Tools",  value: "After Effects" },
      ],
    },

    {
      id:          "sent",
      title:       "Sent — Short Film",
      aspectRatio: "2.35 / 1",
      category:    "animation",
      thumbnail:   "images/Sent_Thumb.jpg",
      thumbColor:  "#c9c5be",
      heroImage:   "",
      videoUrl:    "https://player.vimeo.com/video/945966084",
      description: `A short animated film about connection and distance.
Replace this with your own description of the project — what it's about,
what inspired it, how it was made.`,
      details: [
        { label: "Role",   value: "Lead Animator" },
        { label: "Year",   value: "2024" },
        { label: "Client", value: "Personal" },
        { label: "Tools",  value: "After Effects, Illustrator" },
      ],
    },

    {
      id:          "microsoft-alt",
      title:       "Microsoft — ALT",
      aspectRatio: "16 / 9",
      category:    "animation",
      thumbnail:   "images/Microsoft_Thumb.jpg",
      thumbColor:  "#b5bfc9",
      heroImage:   "",
      videoUrl:    "https://player.vimeo.com/video/424395428",
      description: `An animation created for Microsoft's ALT campaign.
Replace this description with the real project story — client brief,
creative approach, production details.`,
      details: [
        { label: "Role",   value: "Animator" },
        { label: "Year",   value: "2023" },
        { label: "Client", value: "Microsoft" },
        { label: "Tools",  value: "After Effects" },
      ],
    },

    {
      id:          "google-pixel",
      title:       "Google Pixel 4",
      aspectRatio: "16 / 9",
      category:    "animation",
      thumbnail:   "images/Google_Thumb.jpg",
      thumbColor:  "#c2b8c9",
      heroImage:   "",
      videoUrl:    "https://player.vimeo.com/video/377357796",
      extraVideos: [
    "https://player.vimeo.com/video/377359118",
  ],
      description: `Motion work for the Google Pixel 4 launch campaign.`,
      details: [
        { label: "Role",   value: "Motion Designer" },
        { label: "Year",   value: "2023" },
        { label: "Client", value: "Google" },
        { label: "Tools",  value: "After Effects" },
      ],
    },

    {
      id:          "zelos",
      title:       "Welcome to Zelos",
      aspectRatio: "16 / 9",
      category:    "animation",
      thumbnail:   "images/Zelos_Thumb.jpg",
      thumbColor:  "#b9c9b8",
      heroImage:   "",
      videoUrl:    "https://player.vimeo.com/video/397480432",
      description: `An animated intro for the Zelos platform.`,
      details: [
        { label: "Role",   value: "Animator" },
        { label: "Year",   value: "2022" },
        { label: "Client", value: "Zelos" },
        { label: "Tools",  value: "After Effects" },
      ],
    },

{
  id:          "dell",
  title:       "Dell - Cyber Attack",
  aspectRatio: "16 / 9",
  category:    "animation",
  thumbnail:   "images/Dell_Thumb.jpg",
  thumbColor:  "#c9c5be",
  heroImage:   "",
  videoUrl:    "https://player.vimeo.com/video/377362133",
  extraVideos: [
    "https://player.vimeo.com/video/377362882",
    "https://player.vimeo.com/video/377363262",
  ],
  description: `A campaign of 3 films for Dell.`,
  details: [
    { label: "Role",   value: "Animator" },
    { label: "Year",   value: "2022" },
    { label: "Client", value: "Dell" },
    { label: "Tools",  value: "After Effects" },
  ],
},

    {
      id:          "illustration-01",
      title:       "Editorial Series",
      category:    "illustration",
      thumbnail:   "",
      thumbColor:  "#c9beb5",
      heroImage:   "",
      videoUrl:    "",
      description: `An editorial illustration series.
Replace with your real project description.`,
      details: [
        { label: "Role",   value: "Illustrator" },
        { label: "Year",   value: "2024" },
        { label: "Client", value: "Self-initiated" },
        { label: "Tools",  value: "Procreate, Photoshop" },
      ],
    },

    {
      id:          "illustration-02",
      title:       "Brand Identity",
      category:    "illustration",
      thumbnail:   "",
      thumbColor:  "#bec9c5",
      heroImage:   "",
      videoUrl:    "",
      description: `Illustration work for a brand identity project.`,
      details: [
        { label: "Role",   value: "Illustrator" },
        { label: "Year",   value: "2023" },
        { label: "Client", value: "Studio Name" },
        { label: "Tools",  value: "Illustrator" },
      ],
    },

  ], // end projects

}; // end CONFIG
