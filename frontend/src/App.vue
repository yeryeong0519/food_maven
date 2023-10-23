<template>
  <div>
    <gmap-map
        :center="center"
        :zoom="zoom"
        style="width: 100%; height: 400px"
    >
      <!-- 여기에 다양한 Google Maps 기능을 추가할 수 있습니다 -->
    </gmap-map>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      center: { lat: 37.7749, lng: -122.4194 }, // 초기 중심 위치 설정
      zoom: 10, // 초기 줌 레벨 설정
    }
  },
  mounted() {
    this.getCurrentLocation(); // 컴포넌트가 마운트될 때 현재 위치를 가져오도록 호출
  },
  methods: {
    getCurrentLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
              this.center = {
                lat: position.coords.latitude,
                lng: position.coords.longitude,
              };
            },
            (error) => {
              console.error(error);
            }
        );
      } else {
        console.error("Geolocation is not supported by this browser.");
      }
    },
  },
}
</script>

<style lang="scss">
@import "~@/assets/scss/vendors/bootstrap-vue/index";
@import "~@/assets/scss/vendors/bootstrap-vue/index";
@import "~@/assets/scss/vendors/bootstrap-vue/index";
@import "~@/assets/scss/vendors/bootstrap-vue/index";
@import "~@/assets/scss/vendors/bootstrap-vue/index";
@import "~@/assets/scss/vendors/bootstrap-vue/index";
@import "~@/assets/scss/vendors/bootstrap-vue/index";
@import "~@/assets/scss/vendors/bootstrap-vue/index";
@import "~@/assets/scss/vendors/bootstrap-vue/index";
@import "~@/assets/scss/vendors/bootstrap-vue/index";
@import "~@/assets/scss/vendors/bootstrap-vue/index";
@import "~@/assets/scss/vendors/bootstrap-vue/index";
@import "~@/assets/scss/vendors/bootstrap-vue/index";
@import "~@/assets/scss/vendors/bootstrap-vue/index";
@import "~@/assets/scss/vendors/bootstrap-vue/index";
@import "~@/assets/scss/vendors/bootstrap-vue/index";
@import "~@/assets/scss/vendors/bootstrap-vue/index";
@import "~@/assets/scss/vendors/bootstrap-vue/index";
/* 스타일 추가 */
</style>
