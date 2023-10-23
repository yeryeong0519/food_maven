<template>
  <div>
    <gmap-map
        :center="center"
        :zoom="zoom"
        style="width: 100%; height: 400px"
    >
      <!-- Google Maps 기능 및 "MainMap" 컴포넌트 추가 가능 -->
    </gmap-map>
  </div>
</template>

<script>


export default {
  name: 'MapView',
  data() {
    return {
      center: { lat: 37.7749, lng: -122.4194 }, // 초기 중심 좌표
      zoom: 12, // 초기 줌 레벨
    }
  },
  mounted() {
    this.$geolocation
        .getCurrentPosition()
        .then(position => {
          // 위치 정보를 처리하세요
          console.log(position.coords.latitude, position.coords.longitude)
        })
        .catch(error => {
          // 오류 처리를 추가하세요
          console.error(error)
        })
  }
}
</script>
