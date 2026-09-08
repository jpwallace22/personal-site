import { defineProject, mdx } from "src/content/schema"

export default defineProject({
  slug: "spotify-widget",
  title: "Spotify Widget",
  subtitle: "Full stack electron app",
  heading: "Fullstack Electron App for the macOS",
  excerpt: mdx`
    A macOS utility bar application for quickly accessing my most needed Spotify actions. This was a full stack project using Electron, Vite, and SolidJS. I particularly enjoy this project because it's a piece of software I use every day.&#x20;
  `,
  body: mdx`
    **Problem**: I would be in the **ZONE** hammering out code and having a good time. I needed to save this song to a playlist! Sadly, finding my Spotify app and achieving this task would distract me and take me out of the zone.. womp, womp.&#x20;

    **Solution**: Create a widget that I can just keep in the menubar that does everything I need, quickly and efficiently. Switch songs (though I mainly use the keyboard for that), save songs to my library, add them to a playlist, or check out the album art in full size.&#x20;

    <div><BtnGroup><Btn variant="contained" label="Repository" url="https://github.com/jpwallace22/spotify-widget" startIcon="" endIcon="github" /><Btn variant="outlined" label="Full Writeup" url="https://www.justinwallace.dev/blog/building-a-spotify-widget-using-electron" startIcon="" endIcon="" /></BtnGroup></div>
  `,
  extraInformation: mdx`
    ### Key Points

    - Full stack Electron-based macOS application (Linux and Windows coming soon)

    - Uses Auth0 and persists token with automatic refreshing

    - Buttery smooth animation using a perfect blend of CSS and Typescript

    - Designed and built 100% by me. (Though the design is Spotify inspired)

    - Personal project to test out Electron & SolidJS and create something I wanted.
  `,
  bannerImage: {
    url: "https://www.datocms-assets.com/85391/1686280156-spotify-widget.png",
    alt: "The spotify logo and a super cool looking widget on top of it",
    width: 501,
    height: 275,
  },
  techStack: [
    {
      title: "Electron",
      thumbnail: {
        url: "https://www.datocms-assets.com/85391/1680129377-electron_software_framework_logo-svg-1.png",
        alt: "",
        width: 256,
        height: 256,
      },
    },
    {
      title: "Vite",
      thumbnail: {
        url: "https://www.datocms-assets.com/85391/1680129419-logo-with-shadow.png",
        alt: "",
        width: 640,
        height: 640,
      },
    },
    {
      title: "Typescript",
      thumbnail: {
        url: "https://www.datocms-assets.com/85391/1670115061-typescript.svg",
        alt: "",
        width: 2500,
        height: 2500,
      },
    },
    {
      title: "SolidJS",
      thumbnail: {
        url: "https://www.datocms-assets.com/85391/1680129474-logo.png",
        alt: "",
        width: 663,
        height: 647,
      },
    },
  ],
  switchbacks: [
    {
      heading: "Lives in the menu bar",
      headingAs: "h3",
      image: {
        url: "https://www.datocms-assets.com/85391/1687120942-ezgif-com-video-to-gif.gif",
        alt: "",
        width: 600,
        height: 379,
      },
      bgColor: "",
      body: mdx`
        Using Electron with Vite I created a custom window that opens at the current mouse location with an event listener on the menu icon. This made for a composable way to get an extremely customizable "menu" from the menu bar.&#x20;
      `,
    },
    {
      heading: "Buttery Smooth tooltips",
      headingAs: "h3",
      image: {
        url: "https://www.datocms-assets.com/85391/1687121426-tooltips.gif",
        alt: "",
        width: 600,
        height: 379,
      },
      bgColor: "",
      body: mdx`
        The Tooltip component wraps any element and adds a smoothly animated tooltip that slides down for improved UX. Though the icons are probably enough to get the point across, you can never be too careful when it comes to creating clean understandable UI's.
      `,
    },
    {
      heading: "What matters most (to me)",
      headingAs: "h3",
      image: {
        url: "https://www.datocms-assets.com/85391/1687121890-features.gif",
        alt: "",
        width: 600,
        height: 379,
      },
      bgColor: "",
      body: mdx`
        The main reason I build this app was for these two features right here. There is no quick and easy way to save a song to a playlist on Spotify. But now there is for me!&#x20;

        If the song already exists in the playlist, instead of the confusing menu asking if I want to add it anyway, my app does not duplicate songs in your playlist and informs you that it's added. It's exactly what I wanted.&#x20;
      `,
    },
    {
      heading: "Expanding Album Art",
      headingAs: "h3",
      image: {
        url: "https://www.datocms-assets.com/85391/1687122328-art.gif",
        alt: "",
        width: 600,
        height: 379,
      },
      bgColor: "",
      body: mdx`
        Using a bit of CSS and JS (but really TS) magic I created a feature to inspect the album art in greater detail. I am one of those people that REALLY enjoys good album art and love to quickly check out a new artist or album when I hear something I like.&#x20;
      `,
    },
  ],
  seo: {
    title: "Spotify Widget",
    description:
      "A macOS Spotify Widget to perform the most needed actions without having to open Spotify.",
    image: {
      url: "https://www.datocms-assets.com/85391/1679359054-electron-spotify.jpg",
      alt: "",
      width: 746,
      height: 420,
    },
  },
})
