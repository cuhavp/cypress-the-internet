const { defineConfig } = require("cypress");
const { rmdir } = require("fs");
module.exports = defineConfig({
    e2e: {
        baseUrl: "https://the-internet.herokuapp.com",
        setupNodeEvents(on, config) {
            // implement node event listeners here
            on("task", {
                deleteDownloadFiles() {
                    return new Promise((resolve) => {
                        rmdir("cypress/downloads", () => resolve(null));
                    });
                },
            });
        },
    },
});
