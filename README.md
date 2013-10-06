# For Sale By Owner

This project was born to solve one of my own problems.  I collect gadgets.  Periodically, I decide that it's time to clear some of them out.  This project helps with that effort by creating a simple, static website that shows off the items that I have for sale.  Think of it as a virtual garage sale or a virtual yard sale.

It's not all that sophisticated.  There is no fancy database backend, no bidding system, nothing like that.  It's a website that showcases the stuff you want to sell, and provides a simple button people can use to email you.

Because this generates a completly static set of html, css, javascript, and image files, you can host the final website on pretty much any web host you have access to.

## Demo Site

You can see a demo of this at http://forsalebyowner.azurewebsites.net

## Setup

This project uses [Docpad](http://docpad.org) to generate the static site.  And docpad is, itself, built on top of [Node.js](http://nodejs.org).  Setup is pretty easy, though.

1. Get [Node.js](http://nodejs.org) installed on your machine.  It's pretty easy to install on Windows, Linux, or OS X.
2. Get the source for this project and extract it somewhere.
3. Open a command prompt / terminal window and change to the folder where you extracted this project.
4. Use "npm" (Node Package Manager, it comes with Node.js) to install the other dependencies: type `npm install` in your terminal/command window.
5. Generate the site: type `docpad generate --env static`.  You'll now find a full, completely static copy of the website in the `out` folder.

Note, while you're working on your site, you can also run `docpad run` which will create a local web server that will serve up your site in real time without having to constantly regenerate it every time you make a change.  In fact, because the live reloading plugin has been included, your browser will automatically reload anytime you change anything.

## Configuration

Basic configuration that controls how the site is generated is found in docpad.coffee.  Look here for things like the name of your site, the URL for your site, your name, your email address, etc.

You create new items for sale by creating [Markdown](http://daringfireball.net/projects/markdown/) files in the `src/documents` folder.  Look a the examples there for more information.  When you sell an item , just change the `sold` property in that item's markdown file to be true, then regenerate the site and republish it to your host.

The look and feel for the application is controlled by the stylesheets in the `src/documents/styles` folder and the layouts in the `src/layouts` folder.  Note, this is version 1.0 of this tool, and a 2.0 version is in progress that will more cleanly separate content from look and feel and from the behind-the-scenes plumbing.

If you are new to Docpad, be aware that the `src/documents` folder is where you put files that need to be processed by the tool (markdown files, less files, coffeescript files, etc) and the `src/files` folder is for static files that you just want to be copied into the site (images, javascript, etc).

If you have questions, don't hesitate to email me at <erv@ewal.net>.


## License (MIT)

Copyright (c) 2013 Erv Walter and Aaron Cornelius

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.