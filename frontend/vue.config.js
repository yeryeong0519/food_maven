const bootstrapSassAbstractsImports = require('vue-cli-plugin-bootstrap-vue/sassAbstractsImports.js')
const bootstrapSassAbstractsImports = require('vue-cli-plugin-bootstrap-vue/sassAbstractsImports.js');
const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
    transpileDependencies: true,
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
            scss: {
                additionalData: `@import "bootstrap/scss/functions"; @import "@/assets/scss/vendors/bootstrap-vue/_custom"; @import "bootstrap/scss/variables"; @import "bootstrap/scss/mixins"; @import "bootstrap-vue/src/_variables";`,
            },
        },
    },
});
	css: {
		loaderOptions: {
			sass: {
				additionalData: bootstrapSassAbstractsImports.join('\n')
			},
			scss: {
				additionalData: [...bootstrapSassAbstractsImports, ''].join(';\n')
			}
		}
	}
