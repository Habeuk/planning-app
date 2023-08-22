<script lang="ts">
import VueCal from 'vue-cal'
import 'vue-cal/dist/vuecal.css'
import { ref, type PropType } from 'vue'

interface Configs {
  activeView: string
  disableViews: Array<String>
  hideViewSelector: boolean
  xsmall: boolean
  timeTo: number
  timeFrom: number
  timeStep: number
  time: boolean
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
        content: String
        contentFull: String
      }>,
      required: true
    },
    planningConfigs: {
      type: Object as PropType<Configs>,
      required: true
    }
  },
  setup(props) {
    console.log('opened')
    // const events = ref(null)
    const onEventClick = (event: any, e: any) => {
      console.log(e)
    }
    return { ...props, onEventClick }
  },
  components: { VueCal }
}
</script>
<template>
  <div>
    <div class="mx-auto vue-cal-container">
      <VueCal v-bind="planningConfigs" :events="calendarEvents" :on-event-click="onEventClick" />
    </div>
  </div>
</template>
<style lang="scss"></style>
