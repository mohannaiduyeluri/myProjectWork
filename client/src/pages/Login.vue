<script setup lang="ts">
import { Login } from '../models/session';
import { ref } from 'vue'
let userName = ref('');
let password = ref('');
function login() {
    Login(userName.value, password.value)
}
</script>

<template>
    <section class="section">      
       <div class="columns">
       <div class="column is-4 is-offset-4">
           <form @submit.prevent="login">
		  <div class="field">
		  <p class="control has-icons-left has-icons-right">
		    <input class="input" placeholder="Username" v-model="userName">
		    <span class="icon is-small is-left">
		      <i class="fa fa-envelope"></i>
		    </span>
		    <span class="icon is-small is-right">
		      <i class="fa fa-check"></i>
		    </span>
		  </p>
		</div>
		<div class="field">
		  <p class="control has-icons-left">
		    <input class="input" type="password" placeholder="Password" v-model="password">
		    <span class="icon is-small is-left">
		      <i class="fa fa-lock"></i>
		    </span>
		  </p>
		</div>
		<div class="field">
		  <p class="control">
		    <button class="button is-success">
		      Login
		    </button>
		  </p>
		</div>
        </form>
      </div>         
       </div>

	<!-- <div class=" is-primary">
      <div class="">
        <div class="columns is-centered">
          <div class="column is-half">
            <div class="notification is-light" style="background-color: #3e8ed0">
				<br>
			<form @submit.prevent="login">
              <div class="field">
                <label class="label">User Name</label>
                <p class="control has-icons-left has-icons-right">
                  <input class="input" type="text" placeholder="User Name" v-model="userName">
                  <span class="icon is-small is-left">
                  <i class="fas fa-envelope"></i>
                  </span>
                </p>
              </div>
              <div class="field">
                <label class="label">Password:</label>
                <p class="control has-icons-left">
                  <input class="input" type="password" placeholder="Password" v-model="password">
                  <span class="icon is-small is-left">
                  <i class="fas fa-lock"></i>
                  </span>
                </p>
              </div><br>
              <a class="button is-rounded is-outlined is-medium"  >Login</a>
			</form>
            </div>
          </div>
        </div>
      </div>
    </div> -->
      </section>
</template>


<style scoped lang="css">

</style>