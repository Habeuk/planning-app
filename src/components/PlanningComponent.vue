<script lang="ts">
import VueCal from 'vue-cal'
import 'vue-cal/dist/vuecal.css'
import { ref } from 'vue'

export default {
    setup() {
        const events = ref(null)
        const onEventClick = (event: any, e: any) => {
            console.log(e);
        }
        return { events, onEventClick }
    },
    components: { VueCal }
}
</script>
<template>
    <div>
        <VueCal active-view="week" :disable-views="['years', 'year', ' month', 'day']" :events="events" hide-view-selector
            xsmall :on-event-click="onEventClick" />
    </div>
</template>
<style lang="scss"  ></style>