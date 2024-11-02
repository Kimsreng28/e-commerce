<template>
  <div class="menuItem">
    <ul class="menu-list">
      <li
        v-for="group in groupItems"
        :key="group.name"
        :class="{ selected: selectedItem === group.name }"
        @click="handleClick(group.name)"
      >
        <font-awesome-icon
          :icon="group.icon"
          class="menu-icon"
          :style="{ color: group.iconColor || '#000' }"
        />
        <span :style="{ fontWeight: group.fontWeight }">{{ group.name }}</span>
        <font-awesome-icon
          :icon="group.icon1"
          class="menu-icon"
          :style="{ color: group.iconColor || '#000' }"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  name: "MenuItemComponent",
  props: {
    groupItems: {
      type: Array,
      required: true,
    },
  },
  components: {
    FontAwesomeIcon,
  },
  data() {
    return {
      selectedItem: "Browse All Categories",
    };
  },
  methods: {
    handleClick(name) {
      this.selectedItem = name;
    },
  },
};
</script>

<style scoped>
.menuItem {
  font-family: Quicksand, serif;
  font-size: 16px;
  display: flex;
  align-items: center;
}

.menu-list {
  display: flex;
  list-style-type: none;
  gap: 15px;
  padding: 0;
  margin: 0;
}

.menu-list li {
  display: flex;
  align-items: center;
  color: #253d4e;
  font-size: 16px;
  cursor: pointer;
  padding: 5px 10px;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}

.menu-list li:hover {
  background-color: #f1f1f1;
}

.menu-list li.selected {
  background-color: #3bb77e;
  color: white;
}

.bold {
  font-weight: bold;
  color: #ff5722;
}

.menu-icon {
  margin-right: 8px;
  margin-left: 8px;
}
</style>
