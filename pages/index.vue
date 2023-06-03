<template>
  <div class="container">
    <div class="mainContentContainer">
      <div class="mainTitle">
        <h1 class="title">{{ $t('title') }}</h1>
        <p class="mainParagraph">{{ $t('mainParagraph') }}</p>
      </div>

      <div class="mainParagraphContainer">
        <img :src="myImage" alt="My Image" class="myImage" />
      </div>

      <div :class="{'hide-on-scroll': scrolled}" class="scroll-down"></div>
    </div>

    <div class="expertiseWrap">
      <div class="expertiseTitleWrap">
        <h2>{{ $t('expertiseTitle') }}</h2>
      </div>

      <div class="expertiseParagraph">
        <p class="expertiseParagraphText">{{ $t('expertise') }}</p>

      </div>

    </div>

    <div class="contactsWrap">
      <div class="expertiseContactsWrap">
        <h2>{{ $t('contacts') }}</h2>
      </div>
      <div class="expertiseParagraph">
        <p class="expertiseParagraphText">{{ $t('mailTo') }}</p>
      </div>
      <div class="expertiseParagraph">
        <p class="expertiseParagraphText">{{ $t('telephone') }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import MyImage from '@/static/myImage.jpg';

export default {
  name: 'home',
  data() {
    return {
      scrolled: false,
      myImage: MyImage,
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.scrolled = window.scrollY > 0;
    },
  },
};
</script>
