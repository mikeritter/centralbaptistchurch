module.exports = async function(eleventyConfig) { 
    eleventyConfig.addGlobalData("layout", "layouts/page.liquid");
    return {
        pathPrefix: "/",
        dir: {
            input: 'src',
            output: 'dist'
        }
    };
};
