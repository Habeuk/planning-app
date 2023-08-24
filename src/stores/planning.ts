import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { PLConfigs, eventDuration } from './store-configs'
import type { Events } from '../components/PlanningComponent.vue'

export const usePlanningStore = defineStore('planning', () => {
  const duration = ref(eventDuration)
  const events = ref([
    {
      start: 'Wed Aug 23 2023 12:30:00 GMT+0100 (West Africa Standard Time)',
      end: 'Wed Aug 23 2023 15:30:00 GMT+0100 (West Africa Standard Time)',
      title: 'Need to go shopping',
      icon: 'shopping_cart', // Custom attribute.
      contentFull:
        'My shopping list is rather long:<br><ul><li>Avocados</li><li>Tomatoes</li><li>Potatoes</li><li>Mangoes</li></ul>', // Custom attribute.
      class: 'leisure',
      monitor: '',
      user: 'user2',
      id: 0
    },
    {
      start: '2023-08-24 10:00',
      end: '2023-08-24 15:00',
      title: 'Golf with John',
      icon: 'golf_course', // Custom attribute.
      contentFull: 'Okay.<br>It will be a 18 hole golf course.', // Custom attribute.
      class: 'sport',
      monitor: '',
      user: 'user1',
      id: 1
    }
  ])
  const planningConfigs = ref(PLConfigs)

  const addEvent = (event: Events) => {
    const time = {
      StartHour: Math.floor(event.startTimeMinutes / 60),
      EndHour: Math.floor(event.endTimeMinutes / 60),
      startMinute: event.startTimeMinutes % 60,
      endMinutes: event.endTimeMinutes % 60
    }
    event.start.setHours(time.StartHour, time.startMinute)
    event.end.setHours(time.EndHour, time.endMinutes)
    events.value.push({
      start: event.start.toString(),
      end: event.end.toString(),
      title: 'Custom Event',
      icon: 'shopping_cart', // Custom attribute.
      contentFull: 'Damn content',
      class: 'leisure',
      monitor: '',
      user: 'user1',
      id: 1
    })
  }
  return { planningConfigs, events, duration, addEvent }
})
