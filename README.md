# gatsby-theme-image-bug

Reproduction repo for a bug with Gatsby Image when used in a Gatsby Theme.

Live demo deployed to Netlify: https://nervous-poincare-8922d0.netlify.com/

The console shows the minified React error. In development, the error message is:

```
TypeError: currentData is undefined
```

The stack trace points to the `gatsby-image` package, `getCurrentSrcData` method. It seems like the image has been detected to be in cache (via the `inImageCache` method), but the actual source can't be found afterwards.

## Reproducing

- clone this repo
- `yarn install`
- `yarn develop`

## Scripts

- `develop`: start a development server for the demo
- `build`: build the demo
