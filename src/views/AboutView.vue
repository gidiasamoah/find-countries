<script setup>
import{ useRoute, router } from 'vue-router';
import { useCounterStore } from '../stores/counter';



const route = useRoute ();

const countryStore = useCounterStore(0);

console.log(route.params.name);

countryStore.getCountryData(route.params.name);

console.log(countryStore.name);

const SingleName =(() => {
    return countryStore.name[0];
})

</script>


<template>
   
   <p @click="router.push({ name: 'HomeView' })">Back</p>



  <main>
    <img :src="SingleName?.flag" alt="">
   

    <div>
        <p> {{ SingleName?.common }} </p>
    </div>

  </main>
 

</template>

<style>


</style>
