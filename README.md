# gatsby-theme-image

Reproduction repo for a bug with Gatsby Image when used in a Gatsby Theme.

```
TypeError: currentData is undefined
```

The stack trace points to the `gatsby-image` package, `getCurrentSrcData` method. It seems like the image has been detected to be in cache (via the `inImageCache` method), but the actual source can't be found afterwards.

## Scripts

- `develop`: start a development server for the demo
- `build`: build the demo
