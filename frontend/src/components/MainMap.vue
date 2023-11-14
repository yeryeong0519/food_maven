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
              <a class="nav-link" href="components/login.vue">Login</a>
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


    <div class="main-map" ref="map"></div>

    <!-- 내 위치 정보 표시 컴포넌트 추가 -->
    <LocationInfo @updateMapCenter="updateMapCenter" />
    <PinOverlay :latitude="currentLocation.latitude" :longitude="currentLocation.longitude" />
  </div>
</template>

<script>
import OlLayerTile from 'ol/layer/Tile.js';
import OlView from 'ol/View.js';
import OlMap from 'ol/Map.js';
import OSM from 'ol/source/OSM';
import { fromLonLat } from 'ol/proj.js';

import LocationInfo from '@/components/LocationMap.vue';
import currentLocation from "@/components/CurrentLocation.vue";

export default {
  name: 'MainMap',
  computed: {
    currentLocation() {
      return currentLocation
    }
  },
  data() {
    return {
      olMap: undefined,
    };
  },
  methods: {
    updateMapCenter({ latitude, longitude, zoom }) {
      if (this.olMap) {
        this.olMap.getView().setCenter(fromLonLat([longitude, latitude]));
        this.olMap.getView().setZoom(zoom);
      }
    },
  },
  mounted() {
    // 지도 초기화 코드 ...
    this.olMap = new OlMap({
      target: this.$refs.map,
      layers: [
        new OlLayerTile({
          source: new OSM(),
        }),
      ],
      view: new OlView({
        center: fromLonLat([127.1388684, 37.4449168]), // 초기 중앙 위치 (경기도 성남)
        zoom: 10,
      }),
    });

    // 내 위치 가져와 지도 확대 및 중앙 위치 설정
    navigator.geolocation.getCurrentPosition(
        (position) => {
          const coordinates = [position.coords.longitude, position.coords.latitude];
          this.olMap.getView().setCenter(fromLonLat(coordinates));
          this.olMap.getView().setZoom(15); // 내 위치를 보여주는 확대 수준
        },
        (error) => {
          console.error('Error getting location:', error.message);
        }
    );
  },
  components: {
    LocationInfo,
  },
};
</script>

<style scoped>
.main-map {
  width: 100%;
  height: calc(100vh - 56px); /* 네브바 높이만큼 빼줌 */
  margin-top: 56px; /* 네브바 높이 */
}
</style>
