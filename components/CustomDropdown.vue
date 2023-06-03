<template>
  <div ref="dropdown" class="custom-dropdown">
    <div class="dropdown-toggle" @click="toggleDropdown">{{ selectedLabel }}</div>
    <ul v-show="isDropdownOpen" class="dropdown-menu">
      <li v-for="option in filteredOptions" :key="option.value" @click="selectOption(option.value)">
        {{ option.label }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
      required: true
    },
    selected: {
      type: String,
      default: "en" // Set English as the default language
    }
  },
  data() {
    return {
      isDropdownOpen: false
    };
  },
  computed: {
    selectedLabel() {
      const selectedOption = this.options.find((option) => option.value === this.selected);
      return selectedOption ? selectedOption.label : "";
    },
    filteredOptions() {
      return this.options.filter((option) => option.value !== this.selected);
    }
  },
  mounted() {
    document.addEventListener("click", this.handleClickOutside);
    document.addEventListener("keydown", this.handleKeyDown);
  },
  beforeDestroy() {
    document.removeEventListener("click", this.handleClickOutside);
    document.removeEventListener("keydown", this.handleKeyDown);
  },
  methods: {
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
    selectOption(option) {
      this.$emit("select", option);
      this.isDropdownOpen = false;
    },
    handleClickOutside(event) {
      if (!this.$refs.dropdown.contains(event.target)) {
        this.isDropdownOpen = false;
      }
    },
    handleKeyDown(event) {
      if (event.key === "Escape") {
        this.isDropdownOpen = false;
      }
    }
  }
};
</script>

<style scoped>
.custom-dropdown {
  position: relative;
}

.dropdown-toggle {
  width: 25px;
  cursor: pointer;
  transition: 0.3s;
}

.dropdown-toggle:hover {
  opacity: 0.5;
}

.dropdown-menu {

  text-align: center;
  text-align-last: center;
  position: absolute;
  top: 100%;
  left: 0;
  margin: 0;
  padding: 0;
  list-style: none;
  width: 100%;
}

.dropdown-menu li {

  cursor: pointer;
  transition: 0.3s;
}

.dropdown-menu li:hover {
  opacity: 0.5;
}
</style>
