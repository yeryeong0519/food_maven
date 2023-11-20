<template>
  <div>
    <h1>로그인</h1>
    <form @submit.prevent="login">
      <label for="username">사용자 이름:</label>
      <input type="text" v-model="username" required>

      <label for="password">비밀번호:</label>
      <input type="password" v-model="password" required>

      <button type="submit">로그인</button>
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
    login() {
      // 여기에서 실제 로그인 로직을 작성합니다.
      console.log('로그인 로직을 구현하세요.');
    }
  }
};
</script>

<style>
/* 원하는 스타일링을 추가하세요. */
</style>
