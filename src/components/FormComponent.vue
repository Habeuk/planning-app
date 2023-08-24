<script lang="ts">
import pButton from 'primevue/button';
import pDialog from 'primevue/dialog';
import { computed, ref, watch } from 'vue';
import InputText from 'primevue/inputtext';
import DropDown from 'primevue/dropdown';
export default{
    props:{
        showForm: {
            type: Boolean,
            required: true
        },
        formData: {
            type: Object,
            required: true
        }
    },
    emits: ["closeForm", "sendData"],
    setup(props, {emit}){
        // const formState = ref(props.showForm);
        const visible = ref(false)
        const monitors = ref([{name: "eliot", available: true}, {name: "nathan", available: true},{name: "other", available: true}])
        const selectedMonitor = ref(null)
        //Actions
        const closeForm = ()=>{
            emit("closeForm", false)
        }

        //watchers
        watch(computed(()=> {return props.showForm}), (newValue)=>{
            if(visible.value != newValue){
                visible.value = newValue
            }
        })
        watch(visible, ()=>{
            if(visible.value ==false ){
                emit("closeForm", false)
            }
        })
        return {
            ...props,
            visible,
            monitors,
            selectedMonitor,
            closeForm
        }
    },
    components: {pButton, pDialog, InputText, DropDown}
}

</script>

<template>
    <div>
        <pDialog v-model:visible="visible" class="px-4" modal>
            <form action="@submitForm">
                <div class="mb-2 px-5 user-selector-form">
                    <InputText class="w-100 " />
                </div>
                <div class="mb-2 px-5 selectMonitor">
                    <DropDown v-model="selectedMonitor" editable :options="monitors" placeholder="select a monitor"/>
                </div>
                <div class="actions mt-2 px-5">
                <pButton label="Yes" type="submit" icon="pi pi-check" @click="closeForm" autofocus />
                </div>
            </form>
            <template #footer>
            </template>
      </pDialog>
    </div>
</template>

<style lang="scss"></style>