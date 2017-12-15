<template>
  <v-ons-modal :visible="visible" @click="modalClick">
    <div v-for="data in SetList">
      <v-ons-list-header>{{ data.name }}</v-ons-list-header>
      <setting-parts
        :setData="data"
      >
      </setting-parts>
    </div>
  </v-ons-modal>
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
      visible: function() {
        return(this.$store.state.modalVisible);
      },
      SetList: function() {
        return(this.$store.state.SetList);
      },
    },
    methods: {
      modalClick: function() {
        // this.$store.commit('modalVisible', false);
      }
    }
  }
</script>