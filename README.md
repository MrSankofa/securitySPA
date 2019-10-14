# Security SPA

#### A landing page for J&J Security Brothers, styled with Material-UI

## To build:
### For development:
```
npm run build
```

### For production:
```
npm run build:prod
```
## To start:
```
npm start
```
## To view:
Go to **localhost:3008**, Or you can open the HTML file if the bundle file has already by transpiled into the dist folder.

## Header

* The Header section has two different styles depending on the resolution of the screen. @ 960px and less the nav bar will change to a mobile view style. @ 960 px and above, the nav bar will disappear on scroll and reappear after a few seconds.

http://g.recordit.co/HpWS6rx81f.gif

## Sections

* @ 960 px and above the images will be styled on the left and the right. @ 960 px and below the styles will be stack more on top of each other.

http://g.recordit.co/joRoCWNlF3.gif

## Packages

* Users can click on the different package types (4,6,8 cameras). Material-UI handles the grid. In App.jsx getDataRows will parse the number of packages into array rows of three. 
* @ 960px and below the styles break into a 2x2 instead of a 3x3. 
* @ 600 px all of the packages are stacked on top of each other. 

http://g.recordit.co/zu1ZgntPj8.gif

## Reviews
* Reviews will only display on screens with resolution 1280px and above. At the time of creation, this company had no reviews so developers will need to update the get requests from the App.jsx componentDidMount function. 

<br/>

http://g.recordit.co/Fc2YlVuxwj.gif

## Contact Us

* Basic form that sends a post request to this url: 'https://webhook.site/121d06e3-90f0-4d87-9440-0850da8fe8c6/contact'

http://g.recordit.co/oEcLdSYWdi.gif
