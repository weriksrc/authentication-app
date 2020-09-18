<template>
  <div>
    <span v-if="!isLogged">
      <form>
        <input type="email" name="email" id="email" v-model="email" placeholder="Email" size="30">
        <br/>
        <br/>
        <input type="password" name="password" id="password" v-model="password" placeholder="Password" size="30">
        <br/>
        <br/>
        <button type="button" @click="tryLogin()">Login</button>
      </form>
    </span>
    <span v-else> Hello user!
      <button type="button" @click="logout()">Logout</button>
    </span>
  </div>
</template>

<script>
  export default {
    name: 'Login',

    data(){
      return{
        email:'',
        password:'',
      }
    },

    computed:{
      isLogged(){
        return this.$store.getters.isLogged;
      }
    },

    methods:{
      tryLogin(){
        this.$store.dispatch('tryLogin',
        {
          email: this.email,
          password: this.password
        }).catch( error => {
          console.log('error no login: ', error)
          alert('Wrong login');
        })
      },

      logout(){
        this.$store.dispatch('logout');
      }
    }
  }
</script>

