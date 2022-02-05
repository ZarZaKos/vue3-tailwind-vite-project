<template>
    <div class="flex items-center flex-shrink-0 h-16 px-8 border-b border-gray-800 justify-between ">
        <h1 class="text-lg font-medium">{{$route.name}}</h1>
        <button v-if="isMobile" class="flex items-center justify-center w-10 h-10 rounded hover:bg-gray-800" @click="toggleSidebar()">
            <font-awesome-icon icon="bars"/>
        </button>
    </div>
</template>

<script>
export default {
    props:{
        isMobile:Boolean
    },
    methods:{
        toggleSidebar(){
            this.$store.commit('toggleSidebar');
        }
    }
}
</script>