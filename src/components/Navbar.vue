<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <h1 class="navbar-brand">
      <g-link to="/">
        Matthew Siefert
      </g-link>
    </h1>

    <button 
      class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" 
      aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"
      @click="showNav = !showNav"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="navbar-collapse collapse" id="navbar" :class="{ 'show': showNav } ">
      <ul class="navbar-nav">
        <li class="nav-item mb-1">Navigation</li>
        <li class="nav-item">
          <a class="nav-link" rel="noopener" href="#profile">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" rel="noopener" href="#portfolio">Portfolio</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" rel="noopener" href="#">CV</a>
        </li>
        <li class="nav-item">
          <a class="nav-link mb-2" rel="noopener" href="#contact">Contact</a>
        </li>
        <li class="nav-item">Mode</li>
        <li class="nav-item me-1">
          <ToggleDarkMode>Light / Dark</ToggleDarkMode>
        </li>
      </ul>
      
    </div>
  </nav>
</template>

<script>
import ToggleDarkMode from "@/components/ToggleDarkMode";

export default {
  components: {
    ToggleDarkMode
  },
  name: 'Navbar',
  data: () => ({
    showNav: false, // This is to make the navbar open/close on mobile.
    showAboutDrop: false
  })
}
</script>

<style lang="scss">
@import "@/assets/scss/variables.scss";

// Navbar
.navbar, .search-bar .form-control, .search-bar-results {
  background: #FFFFFF;
  border: 1px solid #EAEAEA;
  border-top: none;
  color: $gray-400;
  border-radius: 0;
  font-family: 'Josefin Sans';
  text-transform: uppercase;
  font-size: 0.8125rem;
}

h1.navbar-brand  {
  font-weight: 400;
  font-size: 1.25rem;
  padding: 4px 0 8px;
  margin: 0;
  width: 100%;
  display: none;
}

.navbar-brand a {
  color: $black;
}

.navbar .navbar-nav .nav-link {
  text-align: center;
  padding: 0.5rem 0;
  font-size: 0.9375rem;
}

.navbar-collapse {
  margin-top: 1rem;
}

@media (min-width: 1024px) {
  .navbar {
    position: fixed;
    top: 0;
    left: 24px;
    min-width: 128px;
    min-height: 224px;
    padding: 1.5rem 1rem 1rem;
    display: flex;
    flex-direction: column;
    border-radius: 0 0 8px 8px;
    z-index: 100;
    text-align: center;
  }

  .navbar .navbar-nav {
    flex-direction: column;
    text-align: center;
  }

  #navbar > ul.navbar-nav > li:last-of-type > a.nav-link {
    padding: 0;
  }

  .navbar-brand {
    font-size: 1.25rem;
    line-height: 1.2;
    padding-bottom: .5rem;
    margin-right: 4px;
    padding-top: 8px;
    white-space: normal;
  }

  .navbar-collapse {
    margin-top: 0;
  }
}

@media (min-width: 1025px) and (max-width: 1200px) {
  .navbar {
    min-width: 176px;
    padding: 2rem 1.5rem;
  }
}

@media (min-width: 1023px) and (max-width: 1025px) {
  .navbar {
    min-width: 160px;
    padding: 1.5rem 1rem;
  }
}

@media (max-width: 1023px) {
  h1.navbar-brand {
    width: auto;
    font-size: 1.25rem;
    margin: 6px 0 0;
    padding: 0;
    display: block;
  }
  
  .navbar {
    padding: 19px 16px 20px 24px;
  }
  
  .navbar-brand {
    font-size: 1.5rem;
    padding-top: 14px;
  }
  
  .navbar .navbar-nav .nav-link, 
  .navbar .navbar-nav .dropdown-item {
    padding: 0.5rem 0;
    font-size: 1.125rem;
  }
}

.navbar .navbar-nav .nav-item,
.navbar .navbar-nav .nav-link,
.navbar .navbar-nav .dropdown-item {
  padding: 4px 0;
  text-align: center;
  min-width: 0;
  line-height: 1;
}

/* .navbar .navbar-nav .dropdown-menu a.dropdown-item {
  color: $black;
}

.navbar .navbar-nav .dropdown-menu a.dropdown-item:hover {
  color: $primary;
} */

.dropdown-toggle::after {
  margin-left: .125em;
  vertical-align: .125em;
}

/* .navbar-expand-lg .navbar-nav .dropdown-menu {
  position: static;
  left: 0;
  top: 0;
  padding: 0;
  background-color: transparent;
  white-space: normal;
  min-width: 0 !important;
  border: none;
}

.navbar-expand-lg .navbar-nav .dropdown-menu .dropdown-item {
 padding: 0.125rem 0 0 0.75rem;
 background-color: transparent; 
 white-space: normal;
 min-width: none;
 font-weight: inherit;
} */
</style>
