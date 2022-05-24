<template>
    <div>
        <b-form-group label="Parcelamento em" v-slot="{ ariaDescribedby }">
            <b-form-radio v-model="parcelamento" :aria-describedby="ariaDescribedby" name="some-radios" value="1">1x, sem juros
            </b-form-radio>
            <b-form-radio v-model="parcelamento" :aria-describedby="ariaDescribedby" name="some-radios" value="2">2x, sem juros
            </b-form-radio>
            <b-form-radio v-model="parcelamento" :aria-describedby="ariaDescribedby" name="some-radios" value="3">3x, sem juros
            </b-form-radio>
        </b-form-group>

        
    </div>
</template>

<script>
export default {
    data() {
        return {
            parcelamento: ''
        }
    }
}
</script>