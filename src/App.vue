<script setup lang="ts">
import PlanningComponent from './components/PlanningComponent.vue'
import FormComponent from './components/FormComponent.vue';
import { usePlanningStore } from './stores/planning'

const store = usePlanningStore()
const changeFormState = (newState =false)=>{
  store.planningConfigs.showForm = newState
}

</script>

<template>
  <div class="planning-container">
    <PlanningComponent
      class="planning-component container h-100 mt-5"
      :calendar-events="store.events"
      :planning-configs="store.planningConfigs"
      @change-form-state="changeFormState"
    />
    <FormComponent :show-form="store.planningConfigs.showForm" :form-data="{first: 'hello'}" @close-form="changeFormState"/>
  </div>
</template>

<style scoped></style>
