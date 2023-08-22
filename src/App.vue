<script setup lang="ts">
import PlanningComponent from './components/PlanningComponent.vue'
import { usePlanningStore } from './stores/planning'
const store = usePlanningStore()
console.log(typeof store.planningConfigs.disableViews)
</script>

<template>
  <div class="planning-container">
    <PlanningComponent
      class="planning-component container h-100"
      :calendar-events="store.events"
      :planning-configs="store.planningConfigs"
    />
  </div>
</template>

<style scoped></style>
