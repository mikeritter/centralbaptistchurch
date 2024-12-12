module.exports = async function(eleventyConfig) { 

    return {
        pathPrefix: "/",
        dir: {
            input: 'src',
            output: 'dist'
        }
    };
};
