<template>
  <v-container>
    <v-card v-if="!isLogged">
      <v-card-title primary-title>
        <h2>Login</h2>
      </v-card-title>
      <v-card-text>
        <v-form v-model="valid">
          <v-text-field type="email" v-model="email" :rules="emailRules" label="Email" required></v-text-field>
          <v-text-field
            @click:apeend="showP = !showP"
            v-model="password"
            :rules="passwordRules"
            label="Password"
            required
            :type="showP ? 'text' : 'password'"
            :append-icon="showP ? 'mdi-visibility_off' : 'mdi-visibility'"
          ></v-text-field>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn big color="#41b883" @click="tryLogin()">Login</v-btn>
      </v-card-actions>
    </v-card>

    <v-card class="card--flex-toolbar" v-if="isLogged">
      <v-card-text>Hello user!</v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn big color="#41b883" @click="logout()">Logout</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "Login",

  data() {
    return {
      email: "",
      password: "",
      valid: true,
      showP: false,
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@+/.test(v) || "E-mail is invalid",
      ],
      passwordRules: [(v) => !!v || "Password is required"],
    };
  },

  computed: {
    isLogged() {
      return this.$store.getters.isLogged;
    },
  },

  methods: {
    tryLogin() {
      this.$store
        .dispatch("tryLogin", {
          email: this.email,
          password: this.password,
        })
        .catch((error) => {
          console.log("error no login: ", error);
          alert("Wrong login");
        });
    },

    logout() {
      this.$store.dispatch("logout");
    },
  },
};
</script>

