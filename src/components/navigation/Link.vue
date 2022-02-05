<template>
    <router-link class="flex items-center justify-center flex-shrink-0 w-10 h-10 mt-4 rounded hover:bg-gray-800" :to="url">
        <font-awesome-icon :icon="icon"/>
    </router-link>
</template>

<script>
export default {
    props:{
        icon:String,
        url:String
    }
}
</script>