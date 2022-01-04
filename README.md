# [**Campus Maps**](https://campusmaps.herokuapp.com/) &middot; [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/chriscerie/campus-maps/blob/main/LICENSE) [![ci](https://github.com/chriscerie/campus-maps/workflows/ci/badge.svg)](https://github.com/chriscerie/campus-maps/actions/workflows/ci.yml) [![cd](https://github.com/chriscerie/campus-maps/workflows/cd/badge.svg)](https://github.com/chriscerie/campus-maps/actions/workflows/cd.yml) [![Coveralls Coverage](https://coveralls.io/repos/github/chriscerie/campus-maps/badge.svg)](https://coveralls.io/github/chriscerie/campus-maps?branch=main)

Campus Maps is a crowd-sourced platform that offers detailed locations of individual classrooms of university campuses. Users can share written directions and tips to individual classroom via comments as well as upload images to guide other users to their destinations.

## Features
* Interactive map from MapboxGL
* Comment sections and image uploads
* Data submission system
* Google OAuth 2.0 login
* Moderator panels for moderators

## About the Tech

Campus Maps is written in TypeScript using React.js, Redux, Node.js, Express.js, and MongoDB. Its interactive map is powered by MapboxGL.

To store additional location data beyond those provided by MapboxGL, we maintain MongoDB documents that live in parallel to Mapbox's data. This handles any future changes to Mapbox's locations data (e.g., construction of new buildings). To minimize server strain, all parallel data is lazy initialized in an event-driven manner when users first load a location page.

With the exception to the map page, Campus Maps is a single page application to improve loading speed for users. In addition, we've adopted the mobile-first design strategy for the UI to improve UX.

## Contributing

Contributions should follow our [contribution guide](./CONTRIBUTING.md).

## License

Campus Maps is distributed under the MIT license. See [LICENSE](./LICENSE) for details.