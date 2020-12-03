<template>
<div>
  <div class='plx' id='home-bg'>
    <div class='quote-bg'>
      <p class='quote'>We help <span class='pink'>you</span> teach <span class='pink'>them</span></p>
    </div>
  </div>
  <div id='waves'>
    <div class='wave' id='wave1' style='background-image: url("./images/wave1-shadow.png");'></div>
    <div class='wave' id='wave2' style='background-image: url("./images/wave2-shadow.png");'></div>
    <div class='wave' id='wave3' style='background-image: url("./images/wave3-shadow.png");'></div>
  </div>
  <section id='about'>
    <div class='about-sec' id='online-signups'>
      <div class='image' style='background-image: url("./images/online-signups.jpg");'></div>
      <div class='content'>
        <h2>Online Signups</h2>
        <p>Both new and returning clients can make accounts with just a few clicks. They can then learn about and sign up for classes. Everyone gets to save time by using technology to make class signups, forms, and communication more efficient.</p>
      </div>
    </div>
    <div class='about-sec odd' id='access'>
      <div class='image' style='background-image: url("./images/access.jpg");'></div>
      <div class='content'>
        <h2>Easily Accessible</h2>
        <p>You and all the teachers at your swim school can see the classes you offer, when they are, who has signed up, and how many spots are left. All the information is neatly organized and can be easily accessed in one place.</p>
      </div>
    </div>
    <div class='about-sec' id='web-presence'>
      <div class='image' style='background-image: url("./images/web-presence.jpg");'></div>
      <div class='content'>
        <h2>Web Presence</h2>
        <p>Help new clients discover you through a modern and easy-to-use website. In today's world, a web presence is essential to the well-being of a company, and a snazzy-looking website is a huge step towards a healthy web presence.</p>
      </div>
    </div>
  </section>
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
</div>
</template>

<script>

export default {
  name: 'Home',
  components: {
  },
  data() {
    return {
      searchText: '',
    }
  },
}
</script>

<style scoped>
</style>
