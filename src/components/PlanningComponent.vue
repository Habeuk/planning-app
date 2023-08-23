<script lang="ts">
import VueCal from 'vue-cal'
import PDialog from 'primevue/dialog'
import pButton from 'primevue/button'
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
  editableEvents: {title: boolean, drag: boolean, resize: boolean, create: boolean}
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
  emits: ["changeFormState"],
  setup(props, {emit}) {
    const showForm = ref(false);
    const onEventClick = (event: any, e: any) => {
      emit("changeFormState", true);
    }
    const createEvent = (event: any, e: any)=> {
      console.log(event);
      return true;
    }

    return { ...props,showForm, onEventClick, createEvent }
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
        :on-event-create="createEvent"
        
      />
    </div>
  </div>
</template>
<style lang="scss"></style>
