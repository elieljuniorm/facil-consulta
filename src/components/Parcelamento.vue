<template>
    <div>
        <b-collapse id="parcelamento" v-model="visivel">

            <b-form-group label="Parcelamento em" v-slot="{ ariaDescribedby }" class="pacelas">
                <b-form-radio v-model="parcelamento" :aria-describedby="ariaDescribedby" name="some-radios" value="1">
                    1x, sem juros
                </b-form-radio>
                <b-form-radio v-model="parcelamento" :aria-describedby="ariaDescribedby" name="some-radios" value="2">
                    2x, sem juros
                </b-form-radio>
                <b-form-radio v-model="parcelamento" :aria-describedby="ariaDescribedby" name="some-radios" value="3">
                    3x, sem juros
                </b-form-radio>
            </b-form-group>
        </b-collapse>

    </div>
</template>

<script>
export default {
    props: {
        visivel: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            parcelamento: ''
        }
    }
}
</script>