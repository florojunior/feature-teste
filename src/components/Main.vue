<template>
  <div>
    <Header />
    <List />
  </div>
</template>

<script>
import Header from './pages/Header.vue';
import List from './pages/List.vue';
export default {
    components: { Header, List }
}
</script>