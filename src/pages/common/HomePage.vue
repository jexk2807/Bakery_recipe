<template class="bg-gray-800 font-sans leading-normal tracking-normal mt-12">

  <header>
     <home_hearder />
  </header>
  <main>
    <home_main />
  </main>

</template>

<script>
import HomeHeader from "../../Components/Header.vue";
import HomeMain from "../../Components/Main.vue";
export default {
    name: 'home',
    components: {
      home_hearder : HomeHeader,
      home_main : HomeMain,
    }
}

</script>

