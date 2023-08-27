<script lang="ts">
import VueCal from 'vue-cal'
import 'vue-cal/dist/vuecal.css'

//only for update drag
// import 'vue-cal/dist/drag-and-drop.es'
import { ref, type PropType } from 'vue'

interface Events {
  startTimeMinutes: number
  endTimeMinutes: number
  start: Date
  end: Date
}

export type { Events }

interface Configs {
  activeView: string
  disableViews: Array<String>
  hideViewSelector: boolean
  xsmall: boolean
  timeTo: number
  timeFrom: number
  timeStep: number
  time: boolean
  editableEvents: { title: boolean; drag: boolean; resize: boolean; create: boolean }
}

export default {
  props: {
    calendarEvents: {
      type: Array<{
        start: string
        end: string
        title: String
        monitor: String
        class: String
        icon: String
        contentFull: String
        snapToTime: boolean
      }>,
      required: true
    },
    planningConfigs: {
      type: Object as PropType<Configs>,
      required: true
    }
  },
  emits: ['changeFormState', 'addEvent'],
  setup(props, { emit }) {
    const showForm = ref(false)
    const onEventClick = (event: Events, e: any) => {
      console.log('onEventClick :: ', event)
      emit('changeFormState', true)
    }
    const createEvent = (event: Events, e: any) => {
      console.log(event)
      // emit('addEvent', event)
      emit('changeFormState', true)
      return false
    }
    const roundEventTime = (minutes: number) => {
      let gapNumber = minutes / props.planningConfigs.timeStep
      gapNumber = Math.round(gapNumber)
      return gapNumber * props.planningConfigs.timeStep
    }
    return { ...props, showForm, onEventClick, createEvent }
  },
  components: { VueCal }
}
</script>
<template>
  <div>
    <div class="mx-auto vue-cal-container">
      <VueCal
        v-bind="planningConfigs"
        :events="calendarEvents"
        :on-event-click="onEventClick"
        min-event-width="50"
        @event-drag-create="createEvent"
      />
    </div>
  </div>
</template>
<style lang="scss"></style>
