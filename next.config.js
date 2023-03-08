const withNextra = require("nextra")({
    theme: "nextra-theme-docs",
    themeConfig: "./theme.config.js",
    staticImage: true,
    flexsearch: {
        codeblocks: false,
    },
    defaultShowCopyCode: true,
});

/** @type {import('next').NextConfig} */
const nextConfig = {
    // any configs you need
};

module.exports = withNextra(nextConfig);
