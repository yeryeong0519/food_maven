<template>
  <div>
    <gmap-map
        :center="center"
        :zoom="zoom"
        style="width: 100%; height: 400px"
    >
      <!-- 현재 위치를 핀으로 표시합니다 -->
      <gmap-marker
          :position="center"
          :clickable="true"
          :draggable="false"
          :animation="2"
      ></gmap-marker>
    </gmap-map>
  </div>
</template>

<script>
export default {
  data() {
    return {
      center: { lat: 0, lng: 0 }, // 초기값 설정, 실제 위치 정보로 업데이트됩니다.
      zoom: 14, // 지도 확대 수준
    };
  },
  mounted() {
    // 위치 정보 가져오기
    navigator.geolocation.getCurrentPosition(position => {
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
    });
  },
};
</script>

<style>
/* 스타일 추가 */
</style>
