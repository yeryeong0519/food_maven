const bootstrapSassAbstractsImports = require('vue-cli-plugin-bootstrap-vue/sassAbstractsImports.js');

module.exports = {
    transpileDependencies: [
        'vue-geolocation-api', // 해당 모듈이 포함되어야 하는 경우 추가
        'other-dependency',   // 다른 모듈이 포함되어야 하는 경우 추가
    ],
    outputDir: "../src/main/resources/static",
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:8090',
                changeOrigin: true,
            },
        },
    },
    css: {
        loaderOptions: {
            sass: {
                additionalData: `@import "bootstrap/scss/functions"; @import "@/assets/scss/vendors/bootstrap-vue/_custom"; @import "bootstrap/scss/variables"; @import "bootstrap/scss/mixins"; @import "bootstrap-vue/src/_variables";`,
            },
        },
    },
    pluginOptions: {
        // SCSS 프리프로세서 설정을 추가합니다.
        'style-resources-loader': {
            preProcessor: 'scss',
            patterns: [
                // SCSS 파일 경로를 추가합니다.
                // 예: path.resolve(__dirname, 'path/to/your/file.scss')
            ],
        },
    },
};
