<template>
    <transition enter-class="opacity-0" enter-active-class="ease-out transition-medium" enter-to-class="opacity-100"
        leave-class="opacity-100" leave-active-class="ease-out transition-medium" leave-to-class="opacity-0">
        <div v-if="drawerOpen"
            class="transform top-0 left-0 fixed h-full flex-col ease-in-out transition-all duration-300 z-30 items-center min-w-fit w-16 pb-4 overflow-auto border-r border-gray-800 text-gray-500 flex justify-between bg-gray-900"
            :class="drawerOpen ? 'translate-x-0' : '-translate-x-full'">
            <div>
                <div class="w-full h-16">
                    <Link icon="user-circle" url="/user">
                    </Link>
                </div>
                <Link icon="home" url="/">
                </Link>
                <Link icon="user" url="/characters">
                </Link>
                <Link icon="feather-alt" url="/tales">
                </Link>
                <Link icon="bookmark" url="/bookmarks">
                </Link>
            </div>
            <div>
                <Link icon="power-off" url="/logout">
                </Link>
            </div>
        </div>
    </transition>
</template>

<script>
    import Link from "Components/Navigation/Link.vue";
    export default {
        components: {
            Link
        },
        props: {
            drawerOpen: Boolean
        },
    }
</script>