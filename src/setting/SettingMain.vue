<template>
  <div>
    <div v-for="data in SetList" :key="data.name">
      <v-ons-list-header>{{ data.name }}</v-ons-list-header>
      <setting-parts
        :setData="data"
      >
      </setting-parts>
    </div>
  </div>
</template>

<style>
</style>

<script>
  import SettingParts from './SettingParts.vue';

  export default {
    components: {
      SettingParts,
    },
    data() {
      return({
      });
    },
    computed: {
      SetList: function() {
        return(this.$store.state.SetList);
      },
    },
    methods: {
    },
  }
</script>