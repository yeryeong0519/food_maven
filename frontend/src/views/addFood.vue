<template>
  <div>
    <h1>식당 등록</h1>
    <p v-if="isUserRegistered">회원 가입이 완료되어 식당을 등록할 수 있습니다.</p>
    <p v-else>회원 가입 후 식당을 등록할 수 있습니다.</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isUserRegistered: false
    };
  },
  created() {
    // 실제로는 서버에서 사용자의 가입 여부를 확인하는 로직이 들어갑니다.
    // 가입한 사용자라면 isUserRegistered 값을 true로 설정합니다.
    // 예시: this.isUserRegistered = 서버에서 확인한 값;
  }
};
</script>

<style>
/* 원하는 스타일링을 추가하세요. */
</style>
