export default function (eleventyConfig) {
    // Output directory: _site

    eleventyConfig.addPassthroughCopy("src/assets");
    eleventyConfig.addPassthroughCopy("src/index.css");
    eleventyConfig.addPassthroughCopy("src/bundle.js");
    return {
        dir: {
            input: "src"
        }
    }
};