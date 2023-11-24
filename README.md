# landing page svelte

Small landing page example, focused around page loading performance and Web Vitals.


## Developing

Once you've cloned the project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to change an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
> Currently using vercel adapter -  [live here](https://landing-page-svelte-sepia.vercel.app/) if you want to check


## Why Svelte, Sveltkit and TailwindCSS?

- I choose Svelte because it has a smaller final package size than React or Vue, it has a pretty straightfoward simplified syntax for building components and does not require a runtime library, making it a fast and lightweight option.
- Sveltekit is the respective Next.js alternative, choose to be easier to deploy at Vercel, and all its awesome out-of-the-box optimizations, and possibly expanding the use to SSR, SSG or ISG.
- Tailwind CSS and WindUI for CSS and UI fast and easy solutions.

## Media assets on page load optimizations

Firstly, unless otherwise necessary, I change image formats to .webp, it has good compatibility between browsers (except IE) and provides superior lossless and lossy compression for most images on the web.

Secondly, mainly to really big images, eg: which can fit the whole screen, like hero images, provide multiple resolution images to different screen sizes, so the page doesn't load unnecessary big images, one of the ways this can be achieved is through the picture tag. For responsiveness I woul also consider croping the image or proving other with better context at different ratios (16:9, 4:3, etc), so it is better displayed on mobile devices. Although a little counterintuitive, we should also provide @2x original images (double res) to serve HiDPI devices. Image processing can size images down to save bandwidth when serving smaller screens, but it would be a waste of bandwidth to invent pixels to size images up, this ensures we have crispy high res images.

Sveltekit `enhanced:img` nails this very well, even though still being an experimental feature. I upscaled the first Hero image to around 3960x1000 to provide it as @2x and changed formats for all images to use .webp.

## Web Vitals optimizations

CLS: Give the image a container or styling so that it is constrained and does not jump around to help the browser reserve space while the image is still loading so we don't suffer from cumulative layout shifts (CLS)*.

LCP: Recommended to lazy load images. There is a few ways to lazy load images/scripts, for images the most direct we have is the loading attribute that can be assigned to lazy. This will make it so the images are loaded only after they enter the viewport. But, if we have some kind of hero image in the main content of the page, this would affect Largest Contentful Pain (LCP)*, so for these is recommended to prioritize it instead.

These are the main I detected for this project. I also tried to implement some other performance improvements like lazy loading js libraries, Glide.js is only imported 100ms after the page loads or if the user interacts with the Navbar on the Slider,
