# Comic Viewer

So, you are wondering, why this? what are you doing?

TLDR: I want to read a web comic from the start, however I want to be able to tap to go to the next page and have that page fill the screen completely. So that it is readable on my phone. Yeah I know :P. 

## Architecture

Odds are I will forget this:

The aim here was to be a small app deployed and running completely in browser and online. 

### cors-anywhere 

https://github.com/Rob--W/cors-anywhere

Due to cors issues there is a cors proxy so that it will add cors when calling the fetch of the gg page. 

```
git clone https://github.com/Rob--W/cors-anywhere.git
cd cors-anywhere/
npm install
heroku create
git push heroku master
```