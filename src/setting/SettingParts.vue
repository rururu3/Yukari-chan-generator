<template>
  <v-ons-list-item>
    <div
      v-for="(data, $index) in PartsList"
      :key="data.name"
      style="display: inline; vertical-align: middle;"
    >
      <label class="left">
        <v-ons-radio
          :input-id="'radio-' + $index"
          :value="data.name"
          v-model="selected"
        >
        </v-ons-radio>
      </label>
      <label :for="'radio-' + $index" class="center">
        {{ data.name }}
      </label>
    </div>
    <chrome-picker v-model="colors"></chrome-picker>
  </v-ons-list-item>
</template>

<style>
</style>

<script>
  import { Chrome } from 'vue-color';

  let defaultProps = {
    hex: '#194d33',
    hsl: {
      h: 150,
      s: 0.5,
      l: 0.2,
      a: 1
    },
    hsv: {
      h: 150,
      s: 0.66,
      v: 0.30,
      a: 1
    },
    rgba: {
      r: 25,
      g: 77,
      b: 51,
      a: 1
    },
    a: 1
  };

  export default {
    props: ['setData'],
    components: {
      'ChromePicker': Chrome,
    },
    data() {
      return({
        selected: '',
        PartsList: [],
        colors: defaultProps,
      });
    },
    created: function() {
      // 一致するものをリスト化する
      this.PartsList.splice(0, this.PartsList.length);
      this.$store.state.PartsList.filter((element) => {
        return(element.set = this.setData.name);
      })
      .forEach((element) => {
        this.PartsList.push(element);
      });
    },
  }
</script>