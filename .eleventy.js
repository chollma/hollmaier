module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./src/style.css");
    return {
        pathPrefix: "/hollmaier/",
        dir: {
            input: "src",
            output: "public",
        },
    };
};