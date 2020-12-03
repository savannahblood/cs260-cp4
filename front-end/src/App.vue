<template>
  <div id="app">
    <header>
      <router-link to="/">
        <div id='logo'>
          <img src="./assets/images/logo.png">
        </div>
      </router-link>
      <a id='hamburger' data-toggle="collapse" href="#header-nav" role="button" aria-expanded="false" aria-controls="collapseExample">
        <div class='line' id='one'></div>
        <div class='line' id='two'></div>
        <div class='line' id='three'></div>
      </a>
      <nav id='header-nav' class='collapse'>
        <ul>
          <router-link to="/pricing">
            <li class="menu-item pricing"><a href="#">Pricing</a></li>
          </router-link>
          <router-link to="/signup">
            <li class="menu-item signup"><a href="#">Sign Up</a></li>
          </router-link>
          <router-link to="/login">
            <li class="menu-item login"><a href="#">Log In</a></li>
          </router-link>
          <router-link to="/admin">
            <li class="menu-item admin"><a href="#">Admin</a></li>
          </router-link>
        </ul>
      </nav>
    </header>
    <router-view />
    <section id='contact'>
      <form>
        <h2>Questions?</h2>
        <h3>We'll get right back to you.</h3>
        <div class='flex-input halves'>
          <input type='text' placeholder='Name' id='name' />
          <input type='email' placeholder='Email' id='email'/>
        </div>
        <textarea placeholder='Message' id='message'></textarea>
        <input type='submit' value='Send' class='submit' />
      </form>
    </section>
    <footer>
      <nav>
        <ul>
          <router-link to="/pricing">
            <li class="menu-item pricing"><a href="#">Pricing</a></li>
          </router-link>
          <router-link to="/signup">
            <li class="menu-item signup"><a href="#">Sign Up</a></li>
          </router-link>
          <router-link to="/login">
            <li class="menu-item login"><a href="#">Log In</a></li>
          </router-link>
          <router-link to="/admin">
            <li class="menu-item admin"><a href="#">Admin</a></li>
          </router-link>
        </ul>
      </nav>
      <div id='footer-links'>
        <p class='copyright'>&copy; 2020 Savannah Blood</p>
        <p class='repo'><a href='https://github.com/savannahblood/cs260-cp4' target='_blank'>My Github Repository</a></p>
      </div>
    </footer>
  </div>

</template>

<script>

export default {
  name: 'App',
  components: {

  }
}
</script>

<style>
</style>
