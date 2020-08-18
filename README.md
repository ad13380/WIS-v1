# Who's in Space?
[![Build Status](https://travis-ci.org/ad13380/WIS-v1.svg?branch=master)](https://travis-ci.org/ad13380/WIS-v1)
[![Maintainability](https://api.codeclimate.com/v1/badges/ab64036b8392cbd0d959/maintainability)](https://codeclimate.com/github/ad13380/WIS-v1/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/ab64036b8392cbd0d959/test_coverage)](https://codeclimate.com/github/ad13380/WIS-v1/test_coverage)

*This project is still a work in progress, more features are being added*

As a long time space enthusiast, I've been engrossed in the recent [SpaceX Demo Crew launches](https://www.spacex.com/updates/crew-demo-2-mission-update-5-30-2020/). After curiously browsing


I found a lot of the online resources were either sparse of information or involved clicking through lots of different sites (half of them being in Russian). There didn't seem to be a concise single page summary, so I thought I'd try to make one.

The purpose of this project is to create a simple one page application that uses APIs to pull data about 
and present it in a way that looks clean and is easy to read.

## Visit the Site
This app is deployed on Heroku, you can visit it [here](https://whosinspace.herokuapp.com/)

## Screen Previews
### Site Overview
<img src="./public/images/overview.gif"/>

### Responsive Layout
<img src="./public/images/responsive.gif"/>

### Viewing on a Mobile Device
<img src="./public/images/mobile.gif" height="400"/>

## Features
### Implemented
Provides an up to date list of:
- The name of all astronauts in space
- Their title (rank or position)
- Their photo
- Their nationality (as a flag thumbnail)
- A brief description about them (displayed after clicking on their card)

### Roadmap
- Displaying their social  media feed (if they have one)
- Displaying a news feed of articles that mention them
- Displaying the current spacecraft they are on
- Displaying their launch date and total number of days in space
- Better animations for site loading and cards appearing
- Placeholder images and descriptions in case data is not available for a given astronaut
- A presentable 404 page

## Challenges and Known Issues
- CORS error
  - I was initially unable to use the [How Many People are In Space API](https://www.howmanypeopleareinspacerightnow.com/peopleinspace.json) as every GET request resulted in a CORS error. After a lot of research I reasoned the easiest way to overcome the issue was to use a proxy server that would take the API data and add a ```Access-Control-Allow-Origin: *``` header to the response
  - I implemented an [open source proxy server](https://github.com/Rob--W/cors-anywhere) that seemed to solve the issue, but was quickly blocked by an API rate limit error
  - I then decided to deploy my own [dedicated proxy server](https://github.com/ad13380/cors-proxy-server). This seems to have solved the problem
- Slow load time
  - When first visiting the site, it can take a few seconds for the content to be loaded. This may be partly down to the time it takes for Heroku to spin up a server, but in large part it will be down to the time it takes to receive API data via a proxy
  - I'm unsure of how to speed this up, but a useful feature to include will be some type of loading animation to show that the page is still in fact loading and has not crashed
