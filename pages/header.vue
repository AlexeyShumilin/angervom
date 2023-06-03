<template>
  <header>

    <nav class="headerTitleWrap">

    </nav>

    <div class="languages">
      <CustomDropdown
        :options="languageOptions"
        :selected="currentLanguage"
        @select="onLanguageSelect"
      />
    </div>
  </header>
</template>

<script>

import CustomDropdown from "@/components/CustomDropdown.vue";


export default {
  name: 'AppHeader',
  components: {
    CustomDropdown,
  },
  data() {
    return {
      languageOptions: [
        { value: 'en', label: 'EN' },
        { value: 'fi', label: 'FI' },
        { value: 'ru', label: 'RU' },
      ],
      currentLanguage: 'en',
    };
  },
  methods: {
    openPopup() {
      // Your logic for opening the popup
    },
    onLanguageSelect(language) {
      this.currentLanguage = language;
      this.$i18n.locale = language; // Change the language using i18n
    },
  },
};
</script>
