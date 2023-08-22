<script lang="ts">
import pButton from 'primevue/button';
import pDialog from 'primevue/dialog';
import { ref } from 'vue';
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
        const formState = ref(props.showForm);
        const closeForm = ()=>{
            emit("closeForm", false)
        }
        return {
            ...props,
            formState,
            closeForm
        }
    },
    components: {pButton, pDialog}
}

</script>

<template>
    <div>
        <pDialog :visible="showForm" modal>
            <p>Hello form</p>
            <template #footer>
                <pButton label="No" icon="pi pi-times" @click="closeForm" text />
                <pButton label="Yes" icon="pi pi-check" @click="closeForm" autofocus />
            </template>
      </pDialog>
    </div>
</template>

<style lang="scss"></style>