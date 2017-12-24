<template>
  <v-ons-list-item>
    <div 
      style="float: right;"
    >
      <div
        v-for="(data) in PartsList"
        :key="data.name"
      >
        <setting-parts-switch
          :bufferSpriteObj="data"
          :colors="colors"
        >
        </setting-parts-switch>
      </div>
    </div>
    <div 
      style="float: right;"
    >
      <chrome-picker v-model="colors"></chrome-picker>
    </div>
  </v-ons-list-item>
</template>

<style>
</style>

<script>
  import SettingPartsSwitch from './SettingPartsSwitch.vue';
  import { Chrome } from 'vue-color';
  let defaultProps = {
    hex: '#FFFFFF',
    hsl: {
      h: 150,
      s: 0,
      l: 100,
      a: 1
    },
    hsv: {
      h: 150,
      s: 0,
      v: 1,
      a: 1
    },
    rgba: {
      r: 255,
      g: 255,
      b: 255,
      a: 1
    },
    a: 1
  };

  export default {
    props: ['setData'],
    components: {
      'ChromePicker': Chrome,
      SettingPartsSwitch,
    },
    data() {
      return({
        selected: '',
        PartsList: [],
        Parts: { name: '' },
        colors: defaultProps,
        bufferSpriteObjList: this.$store.state.bufferSpriteObjList,
      });
    },
    created: function() {
    },
    watch: {
      bufferSpriteObjList: function() {
        // 一致するものをリスト化する
        this.PartsList.splice(0, this.PartsList.length);
        this.$store.state.PartsList.filter((element) => {
          return(element.set == this.setData.name);
        })
        .forEach((element) => {
          this.Parts.name = element.name;
          this.bufferSpriteObjList.forEach((element2) => {
            if(element.name == element2.parts[0]) {
              this.PartsList.push(element2);

              // デフォルト選択設定
              let _index = this.$store.state.DefaultImages.findIndex((element3) => {
                return(element2.name == element3);
              });
              if(_index >= 0) {
                this.selected = this.$store.state.DefaultImages[_index];
              }
            }
          });
        });
      },
    },
  }
</script>