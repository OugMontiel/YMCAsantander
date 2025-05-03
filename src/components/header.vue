<script>
export default {
  name: "Header",
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
};
</script>

<template>
  <header>
    <div class="logo">
      <img src="../assets/logo.png" alt="Logo" />
    </div>
    <div class="logoChico">
      <img src="../assets/logo.png" alt="Logo" />
    </div>
    
    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/projects">Projects</router-link></li>
      </ul>
    </nav>

    <div class="menu-icon" @click="toggleMenu">
      <i class="fas fa-bars"></i>
    </div>
    
  </header>
</template>
<style>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em 2em;
}

nav {
  flex:1;
}

nav ul {
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
}

nav ul li {
  margin: 0 1em;
}
</style>

