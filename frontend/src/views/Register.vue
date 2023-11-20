<template>
  <div>
    <h1>회원 가입</h1>
    <form @submit.prevent="register">
      <label for="username">사용자 이름:</label>
      <input type="text" v-model="username" required>

      <label for="password">비밀번호:</label>
      <input type="password" v-model="password" required>

      <button type="submit">가입하기</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    register() {
      // 여기에서 실제 회원 가입 로직을 작성합니다.
      console.log('회원 가입 로직을 구현하세요.');
    }
  }
};
</script>

<style>
/* 원하는 스타일링을 추가하세요. */
</style>
