module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./src/style.css");
    eleventyConfig.addPassthroughCopy("./src/_redirects");
    eleventyConfig.addPassthroughCopy("./src/img");
    eleventyConfig.addPassthroughCopy("./src/docs");
    return {
        dir: {
            input: "src",
            output: "public",
        },
    };
};