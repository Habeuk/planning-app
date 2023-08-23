<script lang="ts">
import pButton from 'primevue/button';
import pDialog from 'primevue/dialog';
import { computed, ref, watch } from 'vue';
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
        const closeForm = ()=>{
            emit("closeForm", false)
        }
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
            closeForm
        }
    },
    components: {pButton, pDialog}
}

</script>

<template>
    <div>
        <pDialog v-model:visible="visible" modal>
            <p>Hello form</p>
            <template #footer>
                <pButton label="No" icon="pi pi-times" @click="closeForm" text />
                <pButton label="Yes" icon="pi pi-check" @click="closeForm" autofocus />
            </template>
      </pDialog>
    </div>
</template>

<style lang="scss"></style>