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
