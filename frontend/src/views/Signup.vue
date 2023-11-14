<template>
  <div>
    <form @submit.prevent="submitForm">
      <label for="name">이름:</label>
      <input type="text" id="name" v-model="userData.name" required>

      <label for="email">이메일:</label>
      <input type="email" id="email" v-model="userData.email" required>

      <label for="password">비밀번호:</label>
      <input type="password" id="password" v-model="userData.password" required>

      <button type="submit">회원가입</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userData: {
        name: '',
        email: '',
        password: ''
      }
    };
  },
  methods: {
    submitForm() {
      // 간단한 유효성 검사 (실제 프로젝트에서는 더 강력한 검사 필요)
      if (!this.userData.name || !this.userData.email || !this.userData.password) {
        alert('모든 필드를 입력하세요.');
        return;
      }

      // 서버에 회원가입 요청을 보내는 로직을 추가해야 합니다.
      // axios 등을 사용하여 비동기적으로 서버에 데이터를 전송할 수 있습니다.
      // 실제로는 서버 응답에 대한 처리도 고려해야 합니다.

      alert('회원가입이 완료되었습니다.');
    }
  }
};
</script>

<style scoped>
/* 필요한 CSS 스타일 추가 */
</style>
