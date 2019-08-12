<template>
    <input type="text" :placeholder="placeholder" v-model="val">
</template>
<script>
export default {
    name: 'search',
    data() {
        return {
            val: this.value,
        }
    },
    props: {
        value: {
          type: String,
          default: '',
        },
        placeholder: {
            type: String,
            default: 'please input'
        }
    },
    watch: {
        val(newval) {
            console.log(newval);
            this.$emit('input', newval);
        }
    }
}
</script>
