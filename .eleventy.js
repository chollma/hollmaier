module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./src/style.css");
    eleventyConfig.addPassthroughCopy("./src/_redirects");
    return {
        dir: {
            input: "src",
            output: "public",
        },
    };
};