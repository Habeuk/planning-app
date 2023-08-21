import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const usePlanningStore = defineStore('planning', () => {
  const events = ref([
    {
      start: '2023-08-18 14:00',
      end: '2023-08-18 18:00',
      title: 'Need to go shopping',
      icon: 'shopping_cart', // Custom attribute.
      content: 'Click to see my shopping list',
      contentFull:
        'My shopping list is rather long:<br><ul><li>Avocados</li><li>Tomatoes</li><li>Potatoes</li><li>Mangoes</li></ul>', // Custom attribute.
      class: 'leisure'
    },
    {
      start: '2023-08-18 10:00',
      end: '2023-08-18 15:00',
      title: 'Golf with John',
      icon: 'golf_course', // Custom attribute.
      content: 'Do I need to tell how many holes?',
      contentFull: 'Okay.<br>It will be a 18 hole golf course.', // Custom attribute.
      class: 'sport'
    }
  ])
  return { events }
})
