# gatsby-theme-image-bug

Reproduction repo for a bug with Gatsby Image when used in a Gatsby Theme

- [Gatsby issue](https://github.com/gatsbyjs/gatsby/issues/22635)
- [Demo deployed to Netlify](https://nervous-poincare-8922d0.netlify.com/) (check the console)

## How to reproduce locally

1. Clone the repo, install dependencies and start the dev server:

```
git clone https://github.com/robinmetral/gatsby-theme-image-bug.git && cd gatsby-theme-image-bug && yarn && yarn develop
```

2. Open [http:localhost:8000](http:localhost:8000)

## What should happen?

In a nutshell:

1. ✅ the image is sourced from the demo site's filesystem using `gatsby-source-filesystem` (cf. [theme/gatsby-config.js](https://github.com/robinmetral/gatsby-theme-image-bug/blob/0ab7591073d24a4c1db69bff4bd96f17d0973dc9/theme/gatsby-config.js#L7-L13))
2. ✅ it's processed with Sharp using `gatsby-plugin-sharp` and `gatsby-transformer-sharp`
3. ✅ it's queried on the theme's index page (cf. [theme/src/index.js](https://github.com/robinmetral/gatsby-theme-image-bug/blob/0ab7591073d24a4c1db69bff4bd96f17d0973dc9/theme/src/pages/index.js#L23-L29))
4. 🐛 it's rendered using `gatsby-image` on the theme's index page (cf [theme/src/index.js](https://github.com/robinmetral/gatsby-theme-image-bug/blob/0ab7591073d24a4c1db69bff4bd96f17d0973dc9/theme/src/pages/index.js#L9))

## What happens?

In step 4 above, `gatsby-image` throws an error:

```
TypeError: currentData is undefined
```

The stack trace points to the `gatsby-image` package, `getCurrentSrcData` method. It seems like the image has been detected to be in cache (via the `inImageCache` method), but the actual source can't be found afterwards.
