
<template>
  <div id="app">

    <nav>
      <div class="hero is-primary is-bold is-fullheight">
        <a href="#" class="hero-head"> Cadastro de Clientes</a>
      </div>
    </nav>

    
<div class="hero-foot">
        <div class="container">
          <div class="content has-text-centered">
            <p>
              <strong>Cadastro de Clientes</strong>
            </p>
          </div>
        </div>
      </div>




    <div class="container">    
 


      <form @submit.prevent="salvar">


          <label>Nome</label>
          <input required id="name" type="text"  v-model="client.name" >
          <label>Cpf</label>
          <input required id="cpf" inputmode="numeric"  type="text" placeholder="Cpf" v-model="client.cpf" v-mask="'###-###-#####'">
          <label>Telefone</label>
          <input required id="phone" inputmode="numeric" type="text" placeholder="Telefone" v-model="client.phone" v-mask="['(43) ####-####', '(43) #####-####']" >
          <label>Email</label>
          <input required id="email"  type="email" placeholder="text" v-model="client.email" >



          <button class="waves-effect waves-light btn-small">Salvar<i class="material-icons left">save</i></button>

      </form>

      <table>

        <thead>

          <tr>
            <th>Nome</th>
             <th>Cpf</th>
             <th>Telefone</th>
              <th>Email</th>

           
          </tr>

        </thead>

        <tbody>

          <tr v-for="client of clientes" :key="client.clientId">
           
            <td>{{ client.name }}</td>
            <td>{{ client.cpf }}</td>
            <td>{{ client.phone }}</td>
            <td>{{ client.email }}</td>

            
            <td>
              <button @click="editar(client)" class="waves-effect btn-small blue darken-1"><i class="material-icons">create</i></button>
              <button @click="deletar(client)" class="waves-effect btn-small red darken-1"><i class="material-icons">delete_sweep</i></button>
            </td>

          </tr>

        </tbody>
      
      </table>

    </div>

  </div>
</template>

<script>

import Client from './services/client'
import axios from "axios";
export default{

name : 'app',

data(){

return{
client:{


name:'',
cpf:'',
phone:'',
email:''

 },

     clientes : [],
     

}
},

mounted(){
   
      this.listar()

},

 methods:{


    editar() {
      if (!this.client.clientId) {
        this.salvar();
      } else {
        this.atualizar();
      }
    },

listar(){

  Client.listar().then(resposta =>{
    this.clientes = resposta.data

})

},


 
salvar(){
 Client.salvar(this.client)
 this.client = {}
          alert('Cadastrado com sucesso!')
          this.listar()

}, 
   

   
atualizar() {
      axios
        .put(
          `http://api.serverlondrisoft.com:9108/api/client/${this.client.clientId}`
          
        )
        .then(() => {
           alert('Atualizado com sucesso!');
          this.client = {};
          this.listar();
        });
    },


    editar(client) {
      this.client = client;
    },
 

  deletar(client) {
      axios
        .delete(
          `http://api.serverlondrisoft.com:9108/api/client/${client.clientId}`
        )
        .then(() => {
           alert('Deletado com sucesso!');
          this.client = {};
          this.listar();
        });
    }
  },

}






</script>



<style>
</style>

