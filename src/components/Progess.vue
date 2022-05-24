<template>
    <b-progress :value="etapa" :max="2" class="mb-3"></b-progress>
</template>

<script>
export default {
     name: 'Progess',
     props:
    {
        etapa: {
            type: Number,
        }
    }
    
}
</script>

<style>
.progress .progress-bar {
    background: #483698;
}
</style>