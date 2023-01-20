# Twitter UI practice clone

The goal of this project is to learn about Next JS. My background is a Web Designer with experience in HTML and Tailwind CSS with some basic JavaScript knowledge. I ended up trying to recreate the homepage UI of the Twitter app. It's far from the original and I'm sure there are many flaws. Any suggestions or improvements, please let me know. The main thing is to have fun and learn something new, hopefully you can too.

## Getting Started

Get the server running
```bash
npm install
npm run dev
```

Checkout storybook to view components in isolation
```bash
npm run storybook
```

## Issues
The right side panel does not follow the same behavior as Twitter. As you scroll, it sticks but you should be able to see the footer links.

## Stack
- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Radix](https://www.radix-ui.com/)
- [Storybook](https://storybook.js.org/)
- [Vercel](https://vercel.com/)

## Resources

People I followed and checked out their repositories and videos to build the clone.

- [Tru Narla](https://github.com/tnarla)
- [Colby Fayock](https://github.com/colbyfayock)
- [Steven Tey](https://github.com/steven-tey)
- [Lee Rob](https://github.com/leerob)

### Misc
https://omkarkulkarni.vercel.app/snippets/reusable-button-component
https://omkarkulkarni.vercel.app/snippets/absolute-imports

## Text component

[Text component youtube video](https://www.youtube.com/watch?v=b1NEj8HG1yU)

## Absolute alias path to import components
in tsconfig.json on
``` 
"compilerOptions": {
  "paths": {
			"@ui/*": ["./src/components/ui/*"]
		}
}
```

## Storybook

https://storybook.js.org/addons/storybook-addon-next

Update yous tsconfig file for alias paths
```
		"baseUrl": ".",
		"paths": {
			"@/components/*": ["components/*"]
		}
```

## Author

[Roy Quilor](https://github.com/royquilor)

## Connect

- [🐦 Follow me on Twitter](https://twitter.com/RoyQuilor)
- [📺 Subscribe on YouTube](https://www.youtube.com/c/readydesignerone)

