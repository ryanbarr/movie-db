# movie-db: The Popular Movie List from 2016
This is a demo application to showcase React (via Next.js).

**Live Production Build:** https://movie-db.now.sh/

# Notes
1. Next.js was chosen over vanilla React to avoid the tedious configuration tasks you don't normally encounter in daily development.
1. Some custom configurations were added to showcase common React environment implementations--such as Bootstrap and dotenv.
1. TypeScript is used to help enforce typings and schemas. For efficiency and time, no particular "best practice" was utilized such as declaring interfaces or typings in separate files.
1. The Movie DB (TMDB) utilizes a [Popularity Metric](https://developers.themoviedb.org/3/getting-started/popularity) which is not respected in their own sort.
    * For example, visiting [their movie search](https://www.themoviedb.org/movie) and sorting by "Popularity Descending" and filtering to the date range of 01-01-2016 to 12-31-2016 yields identical results to those in this application, even though the "Popularity Score" is not used as the sorting base.
1. Project requirements only requested the use of TMDB's [Discover API](https://developers.themoviedb.org/3/discover/movie-discover). To recreate real world scenarios I've experienced, this project also utilizes the [Movie API](https://developers.themoviedb.org/3/movies/get-movie-details).
    * Utilizing both allows for better demonstration `getStaticProps` vs `getStaticPaths` and the value of Server-side Rendering (SSR).
    * An interesting side-effect from using both endpoints: it seems TMDB utilizes results caching to improve performance on their end. This can sometimes be demonstrated by influencing their Popularity Metric; visiting movie pages on their website repeatedly has a chance to change the Popularity Score.
1. As mentioned above, a production deployment of this project exists which is automatically built and deployed with changes to `master` (but can also be built and deployed manually). You can recreate this deployment process by following the steps below.

# Development Environment

## dotenv Configuration
In order to run the app, you'll first need to add a dotenv configuration. To do so, create a `.env` file at the root directory.

For the purposes of this demo, here is a working `.env` file for you to start from: https://gist.github.com/ryanbarr/2c254b90d143e94fde4a15eefd0f9b52

## Install Dependencies
You'll need **Node 10.20.1** or higher. Clone the repository and install the project dependencies:

```npm install```

## Run the application
Run the development environment which features Hot Module Replacement (HMR) and error output:

```npm run dev```

You may also choose to run the application without HMR and developer tools:

```npm run start```

# Production Build
To create an optimized production build, run:

```npm run build```

# ZEIT Deployment
This project works with ZEIT Now. If you'd like to test deploying to ZEIT, do so for free:

1. For this repository to your GitHub account.
1. Visit [zeit.co](https://zeit.co/) and login using GitHub.
1. Import a project and select the forked repository.
1. Add Environment Variables in the Project > Settings section which match the .env configuration.
1. Add custom Build and Development commands:
  * Build: `npm run build`
  * Development: `npm run dev --port $PORT`
1. Install `now` on your local environment using `npm i -g now`.
1. Run `now` to create a remote development environment and a preview build.
1. Run `now --prod` to deploy the preview build from the previous step to your production environment.