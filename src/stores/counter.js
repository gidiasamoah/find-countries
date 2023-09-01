import { ref } from 'vue';
import { defineStore } from 'pinia';
import axios from 'axios';

export const useCounterStore = defineStore('country', () => {
  /* STATE */
  const name = ref([]);

  /* ACTIONS */
  async function getCountryData(nations = '') {
    try {
      const response = await axios.get(
        `https://restcountries.com/v3.1/name/${nations}`
      );

      // Assuming response.data is an array of country objects, assign it to name
      name.value = response.data;

    } catch (error) {
      console.error(error);
    }
  }

  return { getCountryData, name };
});
