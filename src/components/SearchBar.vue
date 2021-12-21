<template>
  <div>
<!--     <search-focus @keyup="focusSearch"></search-focus> -->
    
    <div class="search-bar">    
      <ToggleDarkMode>
        Light Dark
      </ToggleDarkMode>
    </div>
  </div>
</template>

<script>
import SearchFocus from '@/components/SearchFocus.vue'
import ToggleDarkMode from "@/components/ToggleDarkMode";
import axios from 'axios'

export default {
  name: 'SearchBar', 
  components: {
    ToggleDarkMode
  }
}
</script>

<style lang="scss">
@import "@/assets/scss/variables.scss";

.search-bar {
  position: fixed;
  top: 32px;
  right: 16px;
  z-index: 99;
}

.search-bar .form-control,
.search-bar .form-control:focus,
.search-bar-results {
  width: 144px;
  border-radius: 1rem !important;
  height: 32px;
  font-size: $font-size-300;
  color: $black;
  font-weight: 500;
  opacity: 1;
}

.search-bar-results {
  z-index: 100;
  height: auto;
  min-width: 320px;
  position: fixed;
  top: 68px;
  right: 16px;
  max-height: 320px;
  overflow-y: auto;
}

.search-bar-results a {
  color: $black;
}

// Styling the dark/light mode button
.search-bar .btn {
  height: 32px;
  font-size: $font-size-500;
  line-height: 1;
  padding: 0 .5rem;
  color: $black;
  font-weight: 500;
  opacity: 1;
  z-index: 99;
  border: 1px solid $gray-200;
  box-shadow: 0 0 32px 0 rgba(0,0,0,0.08);
  background-color: $white;
  float: left;
  margin-right: 0.25rem;
}

.search-bar .close {
  position: relative;
  top: -31.5px;
  right: 16px;
  font-size: 1.25rem;
  color: $gray-500;
  cursor: pointer;
  float: right;
}

@media (max-width: 1024px) {
  .search-bar {
    position: static;
    top: 0;
    right: 0;
    margin: 0.5rem 1rem 2rem;
  }
  
  .search-bar .btn {
    width: 48px;
    float: right;
    margin-right: 0;
  }
  
  .search-bar .form-control, .search-bar .form-control:focus, .search-bar-results {
    width: calc(100% - 56px);
  }
  
  .search-bar-results {
    min-width: none;
    position: absolute;
    top: 184px;
    right: auto;
    width: calc(100% - 2rem);
    margin: 0 1rem;
  }
  
  .search-bar .close {
    position: fixed;
    top: 140px;
    right: 88px;
    font-size: 1.25rem !important;
    color: $gray-500;
    cursor: pointer;
    float: right;
  }
}

</style>