<template>
  <div class="getLocation">
    <span class="material-icons">location_on</span>
    <button @click="getLocation">Get Location</button>
    <div
      ref="mapContainer"
      style="width: 500px; height: 500px; border: 1px solid; border-radius: 8px"
    ></div>
  </div>
</template>

<script>
import L from "leaflet";
import { onMounted, ref } from "vue";

export default {
  name: "GetLocation",
  setup() {
    const lat = ref(0);
    const long = ref(0);
    const map = ref(null);
    const mapContainer = ref(null);
    const marker = ref(null);

    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            lat.value = position.coords.latitude;
            long.value = position.coords.longitude;
            updateMap();
          },
          (error) => {
            console.error("Error obtaining location:", error);
            alert("Unable to retrieve your location.");
          }
        );
      } else {
        alert("Geolocation is not supported by this browser.");
      }
    };

    const updateMap = () => {
      if (map.value) {
        map.value.setView([lat.value, long.value], 13);

        // Check if marker exists; if not, create it
        if (!marker.value) {
          marker.value = L.marker([lat.value, long.value], {
            draggable: true,
          }).addTo(map.value);
        } else {
          // Update the marker's position if it already exists
          marker.value.setLatLng([lat.value, long.value]);
        }
      }
    };

    onMounted(() => {
      map.value = L.map(mapContainer.value).setView([51.505, -0.09], 13);
      L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }).addTo(map.value);
    });

    return {
      getLocation,
      mapContainer,
    };
  },
};
</script>

<style scoped>
.getLocation {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.material-icons {
  font-size: 24px;
  margin-bottom: 10px;
}

button {
  width: 200px;
  border: none;
  height: 40px;
  font-size: 18px;
  font-weight: 600;
  font-family: Quicksand, sans-serif;
  margin-bottom: 10px;
  border-radius: 8px;
  cursor: pointer;
  background-color: #04ff8a;
  color: #5f5555;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #3bb77e;
}
</style>
