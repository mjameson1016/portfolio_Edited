# Your Portfolio Site

A minimal, fast, fully customizable artist portfolio.
No frameworks, no build step — just open files and edit.

---

## Folder structure

```
portfolio/
├── config.js          ← ALL your editable content lives here
├── index.html         ← Home / grid page (don't need to edit)
├── work.html          ← Project detail page (don't need to edit)
├── css/
│   └── style.css      ← Visual styles (edit if you want to customize further)
├── js/
│   └── portfolio.js   ← Site engine (no need to edit)
└── images/            ← Put your images here
```

---

## How to edit content

**Open `config.js` in any text editor** (TextEdit, Notepad, VS Code, etc.)

Everything you'd want to change is in that one file:

### Change your name / logo
```js
logoText: "Jane Smith",
siteTitle: "Jane Smith",
```

### Change fonts
Go to https://fonts.google.com, pick any fonts you like, and paste the exact names:
```js
fonts: {
  display: "Playfair Display",   // serif / display font
  body:    "DM Sans",            // body / nav font
  displayWeight: 400,
},
```

### Change nav labels
```js
nav: [
  { label: "Work",    section: "animation"    },
  { label: "Prints",  section: "illustration" },
  { label: "About",   section: "about"        },
  { label: "Contact", section: "contact"      },
],
```

### Add a header / hero image
Put your image in the `images/` folder, then:
```js
headerImage: "images/hero.jpg",
```

### Add a project

Copy one of the existing project blocks in config.js and fill it in:
```js
{
  id:          "my-new-project",       // unique slug, no spaces
  title:       "Project Title",
  category:    "animation",            // must match a nav section
  thumbnail:   "images/thumb.jpg",     // or "" for a color block
  thumbColor:  "#b5bfc9",
  heroImage:   "images/hero.jpg",      // shown at top of project page
  videoUrl:    "https://player.vimeo.com/video/YOUR_VIDEO_ID",
  description: `Your project description here.`,
  details: [
    { label: "Role",   value: "Director" },
    { label: "Year",   value: "2024" },
    { label: "Client", value: "Client Name" },
  ],
},
```

**For Vimeo:** Go to your video → Share → Embed → copy just the numeric ID from the URL
`https://player.vimeo.com/video/XXXXXXXXX`

**For YouTube:** Go to your video → Share → Embed → copy the ID from:
`https://www.youtube.com/embed/XXXXXXXXXXX`

### Add images
- Put `.jpg` or `.png` files in the `images/` folder
- Reference them in config.js as `"images/filename.jpg"`

---

## Previewing locally

Option A — just double-click `index.html` to open in your browser.
(Videos may not load due to browser security — that's normal for local preview)

Option B — use a local server for full functionality:
1. Install VS Code
2. Install the "Live Server" extension
3. Right-click `index.html` → Open with Live Server

---

## Deploying to Netlify (free hosting)

### First time:
1. Go to https://netlify.com and create a free account
2. From your dashboard, click **"Add new site"** → **"Deploy manually"**
3. Drag your entire `portfolio` folder onto the upload area
4. Netlify gives you a live URL instantly (e.g. `your-name.netlify.app`)

### To update the site after changes:
1. Make your edits in `config.js` or swap out images
2. Go back to Netlify → your site → **Deploys** tab
3. Drag the updated folder again — it replaces the old version

### Custom domain (optional):
1. Buy a domain at https://namecheap.com (~$12/year)
2. In Netlify: Site settings → Domain management → Add custom domain
3. Follow Netlify's DNS instructions (takes ~10 minutes to go live)

---

## FAQ

**Q: Can I add more nav sections?**
Yes — add a new item to `nav` in config.js and use its `section` value as the
`category` on your projects. The site will filter automatically.

**Q: Can I embed video that's hosted on my own computer?**
Yes — put the `.mp4` file in the `images/` folder, then in the project use:
```js
heroImage: "images/myvideo.mp4",
```
(Use `heroImage` not `videoUrl` for self-hosted video files.)

**Q: How do I change colors?**
Edit the `colors` block in config.js.

**Q: How do I reorder projects?**
Just drag the project blocks up or down inside the `projects: [ ]` array in config.js.
