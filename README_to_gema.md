# Build luckysheet for GEMA

To build the plugin with usage in Gema there are a few steps necessary to be taken first:

### Remove JQuery from luckysheet-build
Building of the plugin is done via Gulp ([see here for information](https://gulpjs.com/docs/en/getting-started/quick-start)), and to make the plugin 
fully working we will need to fix the build-setup to not include a custom jquery version as that would lead to multiple conflicts 
when using the plugin later within Gema, as Gema ships its own jquery plugin via Primefaces.

To exclude jquery simply go to the file `gulpfile.js` responsible for the build of the plugin and
change or comment out any dependencies related to jquery. 

After this simply follow the steps inside the `README.md` to build the plugin. 