<script setup>
import { onUpdated, ref } from "vue";
import { useCounterStore } from "../stores/counter";
import { RouterLink, useRouter } from "vue-router";

const router = useRouter ();
console.log(router)

const inputText = ref('');

const countryStore = useCounterStore();

countryStore.getCountryData(inputText.value);

onUpdated(() => {

countryStore.getCountryData(inputText.value);
}

)

</script>




<template>
  <header>
    <div class="search-container">
      <input type="text"  class="search"   placeholder="Search for a country..." v-model="inputText" />
      <select class="continent-dropdown">
        <option value="all">Filter by region</option>
        <option value="africa">Africa</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="north-america">North America</option>
        <option value="south-america">South America</option>
        <option value="australia">Australia</option>
      </select>
    </div>
  </header>


  
    <div class="cards" @click= "router.push({ name: 'AboutView', params: { name: name.common } })" v-for="names in countryStore.name" :key="names.common">
      <img :src="names.flag" alt="">
      <p class="country-name">{{ names.common }}</p>
    </div>
 

</template>

<style scoped>
.search-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 80px;
  margin-right: 80px; 
  margin-top: 48px;
}

input.search {
  border-radius: 5px;
  background: #FFF;
  width: 480px; /* Adjusted input width */
  height: 56px;
  box-shadow: 0px 2px 9px 0px rgba(0, 0, 0, 0.05);
  border: none;
  outline: none;
  padding-left: 74px;
}

input.search::placeholder {
  color: #848484;
  font-family: Nunito Sans;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  padding-top: 18px;
  padding-left: 74px;
}

.continent-dropdown {
  border-radius: 5px;
  background: #FFF;
  box-shadow: 0px 2px 9px 0px rgba(0, 0, 0, 0.05);
  border: none;
  outline: none;
  height: 56px;
  padding: 18px 22px 18px 22px; 
  width: 200px; 
  font-family: Nunito Sans;
  
}


.cards{
  margin-top: 48px;
  margin-left: 80px;
  width: 264px;
height: 336px;
flex-shrink: 0;
  display: flex;
  flex-wrap: wrap;

}

.cards img {
  width: 267px;
  height: 160px;
  flex-shrink: 0;

}

.cards .country-name {

  color: #111517;
font-family: Nunito Sans;
font-size: 18px;
font-style: normal;
font-weight: 800;
line-height: 26px; /* 144.444% */
}


</style>
