<template>
  <footer>
    <div class="footer">
      <a class="privacy-link" href="#" @click="openPopup">Tietosuojaseloste</a>
      <p class="footerText">© 2023 Angervo</p>
    </div>
    <!-- Popup window -->
    <div v-if="showPopup" class="popup-overlay" @click="closePopup">
      <div class="popup-content" @click.stop>
        <span class="close-button" @click="closePopup">&times;</span>
        <div class="popup-text">
          <!-- Insert the text for the popup here -->

          Tietosuojaseloste 13.4.2023<br>
          Rekisterinpitäjä:<br>
          Kielipalvelu Angervo<br>
          Helsinki<br>
          angervo@...<br>
          <br>
          Kerään henkilötietoja asiakassuhteen hoitamista varten. Henkilötietojen käsittelyn perusteena on oikeutettu
          etu ja lakisääteiset velvoitteet.<br>
          Kerään tietoja myös markkinointia varten. Henkilötietojen käsittelyn oikeusperusteena on suostumus.<br>
          En tee käyttäjiä koskevia profilointeja ja automaattisia päätöksiä.<br>
          <br>
          Henkilötietojasi vastaanottavat<br>
          - yrityksemme, siis minä itse<br>
          - sinä itse, jos keskustelemme esim. sähköpostitse<br>
          <br>
          Säilytämme henkilötietojasi:<br>
          - sähköpostiarkistossa seitsemän vuoden ajan<br>
          - kirjanpitoaineistossa seitsemän vuoden ajan.<br>
          <br>
          Sinulla on seuraavat oikeudet:<br>
          - oikeus tarkastaa itseäsi koskevat henkilötiedot<br>
          - oikeus tietojen oikaisemiseen<br>
          - oikeus käsittelyn rajoittamiseen (voit esimerkiksi kieltää markkinoinnin)<br>
          - oikeus vastustaa käsittelyä<br>
          - oikeus peruuttaa suostumus (voit esimerkiksi peruuttaa suostumuksesi markkinointiin)<br>
          - oikeus tehdä valitus valvontaviranomaiselle<br>
          <br>
          Huomioithan, että sinulla on “oikeus tulla unohdetuksi” vain, jos meillä ei ole lakisääteisiä velvoitteita
          jatkaa henkilötietojesi käsittelyä.

        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "AppFooter",
  data() {
    return {
      showPopup: false
    };
  },
  methods: {
    openPopup() {
      this.showPopup = true;
      document.addEventListener("keydown", this.onEscKey);
    },
    closePopup() {
      this.showPopup = false;
      document.removeEventListener("keydown", this.onEscKey);
    },
    onEscKey(event) {
      if (event.key === "Escape") {
        this.closePopup();
      }
    }
  },
  beforeDestroy() {
    document.removeEventListener("keydown", this.onEscKey);
  }
};
</script>
<style>

.footerText {
  color: white;
  font-size: 10px;
  font-weight: normal;

}

.privacy-link {
  font-family: 'Montserrat', sans-serif;
  text-decoration: none;
  color: white;
  font-size: 12px;
  cursor: pointer;
}

/* Styles for the popup window */
.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

.popup-content {
  background-color: #fff;
  padding: 20px;
  max-width: 600px;
  width: 90%;
  max-height: 80%;
  overflow-y: auto;
  position: relative;
}

.close-button {
  position: sticky;
  top: 0;
  left: 600px;
  cursor: pointer;
  font-size: 24px;
  color: #aaa;
  z-index: 1;
}

.popup-text {
  font-size: 14px;
  line-height: 1.6;
}

@media (min-width: 2000px) {


  .privacy-link {
    font-size: 25px;
  }

  .footerText {
    font-size: 25px;
  }

  .popup-content {
    max-width: 950px;
  }

  .popup-text {
    font-size: 22px;
  }

  .close-button {
    left: 1500px;
    font-size: 50px;
  }
}


/* Other styles for the header component */
/* Add your own styles here */
</style>
