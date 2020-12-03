<template>
  <div>
    <section id='signup'>
      <form class='account-form'>
        <h2>Sign Up</h2>
        <div class='flex-input thirds'>
          <input type='text' placeholder='First Name' id='first-name' v-model='firstName' />
          <input type='text' placeholder='Last Name' id='last-name' v-model='lastName' />
          <input type='text' placeholder='Username' id='username' v-model='username' />
        </div>
        <div class='flex-input halves'>
          <input type='email' placeholder='Email' id='email' v-model='email' />
          <input type='password' placeholder='Password' id='password' v-model='password' />
        </div>
        <button @click="upload" class='submit'>Sign Up</button>
      </form>
      <div class="upload" v-if="addUser">
        <h2>{{addUser.title}}</h2>
        <p>{{addUser.desc}}</p>
        <img :src="addUser.path" />
      </div>
    </section>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Admin',
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      username: "",
      password: "",
      addUser: null,
      users: [],
    }
  },
  computed: {

  },
  created() {
    this.getUsers();
  },
  methods: {
    async upload() {
      try {
        let r2 = await axios.post('/api/users', {
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
          username: this.username,
          password: this.password,
        });
        this.addUser = r2.data;
      } catch (error) {
        console.log(error);
      }
    },
    async getUsers() {
      try {
        let response = await axios.get("/api/users");
        this.users = response.data;
        return true;
      } catch (error) {
        console.log(error);
      }
    },
  }
}
</script>
