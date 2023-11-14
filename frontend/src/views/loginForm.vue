<template>
  <div>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <!-- 네비게이션 바 코드 ... -->
    </nav>
    <div>
      <h2>로그인</h2>
      <div id="loginForm">
        <form @submit.prevent="fnLogin">
          <p>
            <input class="w3-input" name="uid" placeholder="ID를 입력해주세요" v-model="user_id"><br>
            <span v-if="user_id === ''" class="error-message">ID를 입력하세요.</span>
          </p>
          <p>
            <input name="password" class="w3-input" placeholder="PW를 입력해주세요" v-model="user_pw" type="password">
            <span v-if="user_pw === ''" class="error-message">비밀번호를 입력하세요.</span>
          </p>
          <p>
            <button type="submit" class="w3-button w3-green w3-round">Login</button>
          </p>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user_id: '',
      user_pw: ''
    };
  },
  methods: {
    fnLogin() {
      if (this.user_id === '' || this.user_pw === '') {
        return; // 아무것도 하지 않고 함수 종료
      }

      // 로그인 로직 ...

      alert('로그인 되었습니다.');
    }
  }
};
</script>

<style scoped>
.error-message {
  color: red;
  font-size: 14px;
}
</style>
