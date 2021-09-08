const withOptimizedImages = require('next-optimized-images');

module.exports = withOptimizedImages({
    // Image Config

    optimizeImagesInDev: true,

    // Other Config

    target: 'serverless',
    sassOptions: {
        includePaths: ['./src/styles'],
    },
});
