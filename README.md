# jump-start `2.2.0`
Get started quick with Next.js and Contentful.

## Setup
* Clone project
* `npm install`
* Create `.env.local` file with config options from your Contentful space: SPACE_ID, ENV_ID, ACCESS_TOKEN
* Dev Mode: `npm run dev`
* Build for production: `npm run build`

### Commands

dev - Runs next dev which starts Next.js in development mode
build - Runs next build which builds the application for production usage
start - Runs next start which starts a Next.js production server

## Directory structure should look as follows:
This of course can be modified, but the gulpfile.js will need to be updated as well if you do so that all assets get placed in the location you are expecting.

```
  /project
    |-/components
    |-/pages
    |-/utilites
    |-/out
```