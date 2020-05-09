const GoogleFontsPlugin = require("google-fonts-webpack-plugin")

module.exports = {
    plugins: [
        new GoogleFontsPlugin({
            fonts: [{
                family: "Roboto",
                variants: ["300", "400", "500", ]
            }]
        })
    ]
}
