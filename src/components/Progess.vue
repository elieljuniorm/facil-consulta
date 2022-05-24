<template>
    <b-progress :value="value" :max="max" class="mb-3"></b-progress>
</template>

<script>
export default {
    data() {
        return {
            value: 1,
            max: 2
        }
    }
}
</script>

<style>
.progress .progress-bar {
    background: #483698;
}
</style>