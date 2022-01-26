const { getStoriesPaths } = require("slice-machine-ui/helpers/storybook");

module.exports = {
    stories: [
        "../stories/**/*.stories.mdx",
        "../stories/**/*.stories.@(js|jsx|ts|tsx)",
        ...getStoriesPaths(),
        "../styles/globals.css",
        "../styles/banner.css",
        "../styles/aboutMe.css",
        "../styles/ServicesAndBenefits.css",
        "../styles/contact.css",
        "../styles/testimonials.css",
    ],
    addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
    framework: "@storybook/react",
};
