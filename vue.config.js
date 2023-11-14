module.exports = {
  server: {
    port: 3001,
  },
  outputDir: "dist",  // Vue.js 빌드 결과물을 Spring Boot 서버 쪽의
                                               //주소에 만들도록 설정한것.
  devServer: { //개발환경에서의 서버 설정
    proxy: {
      '/api': {
        // '/api' 로 들어오면 포트 8081(스프링 서버)로 보낸다
        target: 'http://localhost:8082',
        changeOrigin: true // cross origin 허용
      } // /api 라는 경로로 접근하면 target으로 요청을 넘긴다는것.
    }
  }
};