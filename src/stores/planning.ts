import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { PLConfigs } from './store-configs'
export const usePlanningStore = defineStore('planning', () => {
  const events = ref([
    {
      start: '2023-08-24 14:00',
      end: '2023-08-24 16:00',
      title: 'Need to go shopping',
      icon: 'shopping_cart', // Custom attribute.
      contentFull:
        'My shopping list is rather long:<br><ul><li>Avocados</li><li>Tomatoes</li><li>Potatoes</li><li>Mangoes</li></ul>', // Custom attribute.
      class: 'leisure',
      monitor: ""
    },
    {
      start: '2023-08-24 10:00',
      end: '2023-08-24 15:00',
      title: 'Golf with John',
      icon: 'golf_course', // Custom attribute.
      contentFull: 'Okay.<br>It will be a 18 hole golf course.', // Custom attribute.
      class: 'sport',
      monitor: ""
    }
  ])
  const planningConfigs = ref(PLConfigs)
  // console.log(typeof(PLConfigs.disableViews))
  return {planningConfigs, events }
})
