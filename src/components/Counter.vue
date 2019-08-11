<template>
  <div>
    {{ count }}
    <button @click="increment">自增</button>
  </div>
</template>

<script>
  export default {
<<<<<<< HEAD
=======
    name: 'Counter',
>>>>>>> 710e8e3e2124acfcc640ca644c96ab47f8646580
    data() {
      return {
        count: 0
      }
    },

    methods: {
      increment() {
        this.count++
      }
    }
  }
</script>