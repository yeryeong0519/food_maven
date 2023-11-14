<!-- PinOverlay.vue -->

<template>
  <div ref="pinOverlay" class="pin-overlay"></div>
</template>

<script>
import { ref, onMounted, watch } from 'vue';
import { Overlay } from 'ol/overlay';
import { fromLonLat } from 'ol/proj';

export default {
  name: 'PinOverlay',
  props: ['latitude', 'longitude'],
  setup(props) {
    const pinOverlay = ref(null);

    onMounted(() => {
      // Pin을 포함한 Overlay 생성
      const overlay = new Overlay({
        element: pinOverlay.value,
        positioning: 'center-center',
        stopEvent: false,
        offset: [0, -15], // 필요에 따라 오프셋 조절
      });

      // 경도와 위도 props의 변경을 감시
      watch([() => props.latitude, () => props.longitude], () => {
        const [lon, lat] = fromLonLat([props.longitude, props.latitude]);
        overlay.setPosition([lon, lat]);
      });

      // Overlay 클릭 이벤트 발생 시의 로직 추가
      pinOverlay.value.addEventListener('click', () => {
        // 여기에 원하는 로직 추가 가능
        console.log('Pin이 클릭되었습니다!');
      });

      // Overlay를 컴포넌트의 ref로 설정
      pinOverlay.value.overlay = overlay;
    });

    return { pinOverlay };
  },
};
</script>

<style scoped>
/* 필요한 경우 스타일 추가 */
</style>
