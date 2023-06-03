<template>
  <div class="custom-dropdown">
    <div class="dropdown-toggle" @click="toggleDropdown">{{ selectedLabel }}</div>
    <ul class="dropdown-menu" v-show="isDropdownOpen">
      <li v-for="option in options" :key="option.value" @click="selectOption(option.value)">{{ option.label }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
      required: true,
    },
    selected: {
      type: String,
      default: 'en', // Set English as the default language
    },
  },
  data() {
    return {
      isDropdownOpen: false,
    };
  },
  computed: {
    selectedLabel() {
      const selectedOption = this.options.find((option) => option.value === this.selected);
      return selectedOption ? selectedOption.label : '';
    },
  },
  methods: {
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
    selectOption(option) {
      this.$emit('select', option);
      this.isDropdownOpen = false;
    },
  },
};
</script>

<style scoped>
.custom-dropdown {
  position: relative;
}

.dropdown-toggle {
  cursor: pointer;
  padding: 5px;
  background-color: #f1f1f1;
  border: 1px solid #ccc;
  transition: 0.3s;

}

.dropdown-toggle:hover{
  opacity: 0.5;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  margin: 0;
  padding: 0;
  list-style: none;
  background-color: #fff;
  border: 1px solid #ccc;
}

.dropdown-menu li {
  padding: 5px;
  cursor: pointer;

  transition: 0.3s;
}

.dropdown-menu li:hover{
  opacity: 0.5;
}
</style>