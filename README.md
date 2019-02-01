[![Netlify Status](https://api.netlify.com/api/v1/badges/17b4bfb7-3319-4904-b663-67d5667657d4/deploy-status)](https://app.netlify.com/sites/akutehealth/deploys)
https://www.akutehealth.com

# Akute Health Marketing Website

A marketing website using Gatsby, Contentful, and Netlify

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

You need to create a .env file with the following keys.

```
CONTENTFUL_SPACE_ID=*
CONTENTFUL_ACCESS_TOKEN=*
CONTENTFUL_HOST=[preview|cnd].contentful.com
GOOGLE_ANALYTICS_ID=*
SITE_URL=[https://www.example.com]
```

### Installing

Clone the repo. Then install the packages from package.json.

```
npm install
```

Then make sure the app works by running npm start and opening to localhost:8000.

## Deployment

Deploy by linking your Github repo to netlify and adding a Netlify webhook to your Contentful space.

## Built With

* [Contentful](http://www.contentful.com) - The headless CMS
* [GatsbyJS](https://www.gatsbyjs.org/) - Static Site Generator
* [Netlify](https://www.netlify.com/) - Deployment

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/akute-health-inc/gatsby-marketing-website/tags). 

## Authors

* **Akute Health** - *Initial work* - [Akute Health](https://github.com/akute-health-inc)

See also the list of [contributors](https://github.com/akute-health-inc/gatsby-marketing-website/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
