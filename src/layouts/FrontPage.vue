<template>
  <div id="app">
    <header>
      <Navbar />
    </header>
  
    <main>
      <!-- Start of Profile -->
      <div id="profile">
        <div id="profile-wrap">
          <div>
            <h2 class="font-size-1100 ff-sans fw-light text-uppercase mb-0">Matthew Siefert</h2>
            <h3 class="font-size-800 fst-italic fw-light mb-8">
              is an instructional designer, cyclist, boulderer, traveler, photographer, musician, writer, husband, cat and dog wrangler, and lives in Chicago, Illinois.
            </h3>
            <h4 class="font-size-500 ff-sans text-uppercase gray-400">Currently</h4>
            <p class="font-size-700">Sitel Group / SYKES TalentSprout</p>
            
            <h4 class="font-size-500 ff-sans text-uppercase gray-400">Previously</h4>
            <p class="font-size-700 mb-0">NIIT / Cognitive Arts, True Value, National Safety Council</p>
          </div>
          
          <div>
            <g-image class="img-fluid" src="~/assets/images/matthew-siefert-profile.jpg" alt="Photo of Matthew Siefert" />
          </div>
        </div>
      </div>
      
      <!-- Start of Portfolio -->
      <div id="portfolio"></div>
      
      <!-- Start of Contact -->
      <div id="contact"></div>
      
      <!-- Start of Credits -->
      <div id="credits"></div>
    </main>
  
<!--     <Footer /> -->
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'

export default {
  components: {
    Navbar, Footer
  },
  metaInfo() {
    return {
      title: 'Instructional Designer',
      meta: [
        { property: "og:type", content: 'article' },
        { property: "og:title", content: "Brad Siefert / Designer & Photographer" },
        { property: "og:description", content: "Personal design portfolio and blog of Chicago based Design Engineer Brad Siefert." },
        { property: "og:url", content: "https://bradsiefert.com" },
        { property: "og:image", content: "https://bradsiefert.com/files/sharing.jpg" },

        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: "Brad Siefert / Designer & Photographer" },
        { name: "twitter:description", content: "Personal design portfolio and blog of Chicago based Design Engineer Brad Siefert." },
        { name: "twitter:site", content: "@bksiefert" },
        { name: "twitter:creator", content: "@bksiefert" },
        { name: "twitter:image", content: "https://bradsiefert.com/files/sharing.jpg" }
      ]
    };
  },
}
</script>

<style lang="scss">
@import "@/assets/scss/variables.scss";

</style>