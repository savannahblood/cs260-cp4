<template>
<div>
  <section class="users">
    <h2>Users</h2>
    <div class="users-list">
      <div class="user" v-for="user in users" :key="user.id">
        <h3>{{user.firstName}} {{user.lastName}}</h3>
        <p>{{user.email}}</p>
        <p>{{user.username}}</p>
        <div class='btn-wrap'>
          <!--<button @click="openEdit(user)">Edit</button>-->
          <button @click="deleteUser(user)">Delete</button>
        </div>
        <!--<form class='edit-user account-form' >
          <div class='flex-input thirds'>
            <input type='text' placeholder='First Name' id='first-name' v-model='firstName' />
            <input type='text' placeholder='Last Name' id='last-name' v-model='lastName' />
            <input type='text' placeholder='Username' id='username' v-model='username' />
          </div>
          <div class='flex-input halves'>
            <input type='email' placeholder='Email' id='email' v-model='email' />
            <input type='password' placeholder='Password' id='password' v-model='password' />
          </div>
          <button @click="editUser(user)" class='submit'>Update</button>
        </form>-->
        <div class='divider'></div>
      </div>
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
     users: [],
    }
  },
  created() {
    this.getUsers();
  },
  methods: {
    async getUsers() {
      try {
        let response = await axios.get("/api/users");
        this.users = response.data;
        return true;
      } catch (error) {
        console.log(error);
      }
    },
    async deleteUser(user) {
      try {
        await axios.delete("/api/users/" + user._id);
        this.user = null;
        this.getUsers();
        return true;
      } catch (error) {
        console.log(error);
      }
    },
    async editUser(user) {
      try {
        await axios.put("/api/users/" + user._id, {
          firstName: this.user.firstName,
          lastName: this.user.lastName,
          email: this.user.email,
          username: this.user.username,
          password: this.user.password,
        });
        this.user = null;
        this.getUsers();
        return true;
      } catch (error) {
        console.log(error);
      }
    },
  }
}
</script>

<style scoped>
.users {
  margin-top: 50px;
}

.user h3 {
  color: var(--white);
  font-family: var(--title);
  font-size: 30px;
  width: auto;
  text-align: left;
  padding-bottom: 0;
  margin-bottom: 0;
}

.user p {
  padding: 2px;
  margin-bottom: 0;
}

.user button {
  max-width: 100px;
}

.user .divider {
  width: 50%;
  height: 2px;
  background-color: var(--white);
  margin: 10px 0;
}

.edit-user {
  display: none;
}

.edit-user .submit {
  max-width: 100%;
}
</style>
