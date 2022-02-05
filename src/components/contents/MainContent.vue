<template>
    <div class="flex flex-col flex-grow">
                
        <NavBar :isMobile="isMobile"></NavBar>
        <div class="flex-grow p-6 overflow-auto bg-gray-700">
            <div class="grid grid-cols-3 gap-6">
                <div class="h-24 col-span-1 bg-gray-600"></div>
                <div class="h-24 col-span-1 bg-gray-600"></div>
                <div class="h-24 col-span-1 bg-gray-600"></div>
                <div class="h-24 col-span-2 bg-gray-600"></div>
                <div class="h-24 col-span-1 bg-gray-600"></div>
                <div class="h-24 col-span-1 bg-gray-600"></div>
                <div class="h-24 col-span-2 bg-gray-600"></div>
                <div class="h-24 col-span-3 bg-gray-600"></div>
                <div class="h-24 col-span-1 bg-gray-600"></div>
                <div class="h-24 col-span-1 bg-gray-600"></div>
                <div class="h-24 col-span-1 bg-gray-600"></div>
                <div class="h-24 col-span-2 bg-gray-600"></div>
                <div class="h-24 col-span-1 bg-gray-600"></div>
                <div class="h-24 col-span-1 bg-gray-600"></div>
                <div class="h-24 col-span-2 bg-gray-600"></div>
                <div class="h-24 col-span-3 bg-gray-600"></div>
                <div class="h-24 col-span-1 bg-gray-600"></div>
                <div class="h-24 col-span-1 bg-gray-600"></div>
                <div class="h-24 col-span-1 bg-gray-600"></div>
                <div class="h-24 col-span-2 bg-gray-600"></div>
                <div class="h-24 col-span-1 bg-gray-600"></div>
                <div class="h-24 col-span-1 bg-gray-600"></div>
                <div class="h-24 col-span-2 bg-gray-600"></div>
                <div class="h-24 col-span-3 bg-gray-600"></div>
            </div>
        </div>
    </div>
    
</template>


<script>
import NavBar from "Components/contents/NavBar.vue";
export default {
    components: { NavBar },
    props:{
        isMobile:Boolean
    },
}
</script>