<template>
  <div>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="components/MainMap.vue">EcoDineNavigator</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link to="/login" class="nav-link">Login</router-link>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Sign Up</a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" aria-disabled="true">Disabled</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
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
