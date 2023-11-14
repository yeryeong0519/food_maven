<!--Vue.js를 사용하여 브라우저의 Geolocation API를 활용하여 현재 위치 정보를 가져오고 표시하는 Vue 컴포넌트-->

<template>
  <div>
    <p v-if="locationError">Error: {{ locationError }}</p>
    <p v-else>
      Latitude: {{ location.latitude }}<br>
      Longitude: {{ location.longitude }}
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      location: null,
      locationError: null
    };
  },
  created() {
    this.getLocation();
  },
  methods: {
    getLocation() {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
            position => {
              this.location = {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
              };
              // 위치를 가져왔을 때 지도를 확대하여 가까이 나오도록 설정
              this.$emit("updateMapCenter", {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
                zoom: 18 // 원하는 확대 수준으로 조절
              });
            },
            error => {
              this.locationError = "Failed to get location: " + error.message;
            }
        );
      } else {
        this.locationError = "Geolocation is not available in this browser.";
      }
    }
  }
};
</script>
