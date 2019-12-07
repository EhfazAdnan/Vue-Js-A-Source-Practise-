<template>
        <div>
           <p>{{ item.title + ' Inside' }}</p>
           <p @click="toggle = !toggle">Details</p>
           <p v-if="toggle">{{ item.description }}</p>
       </div>
</template>


<script>
export default {
    name: "Accordion",
    props: ['item'],

    data: function(){
        return {
            toggle: false,
        }
    }
}
</script>

<style scoped>

</style>