### How to use Gulp
#### Installing:

	npm install -g gulp

Next you have to install the plugins to run gulp
The basic ones you need are:
>1. uglify
2.	minifyCss
3.	htmlmin
4.	imagemin 
5.	pngquant

To install these go to [Gulp Plugins](http://gulpjs.com/plugins/)
and search for these plugins then follow instructions to install
#### Using Gulp
After installing everything the command to run gulpfile.js is: *gulp*
Before running remember if you didn't add any images don't waste your time running the image compression to remove this from the task list go to gulpfile.js and scroll to the bottom where you'll see this snip of code.
	
	gulp.task('default', ['compress', 'minify-css', 'minify', 'imgmin']);
Remove 'imgmin' and the comma to skip this task next run gulp and then you can push to repo and be done