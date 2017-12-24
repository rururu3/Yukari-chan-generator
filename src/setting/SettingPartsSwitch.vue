<template>
  <div>
    <label for="'switch-' + bufferSpriteObj.name" class="center">
      {{ bufferSpriteObj.name }}
    </label>
    <v-ons-switch
      input-id="'switch-' + bufferSpriteObj.name"
      v-model="bufferSpriteObj.visible"
    >
    </v-ons-switch>
  </div>
</template>

<style>
</style>

<script>
  export default {
    props: ['bufferSpriteObj', 'colors'],
    data() {
      return({
      });
    },
    created: function() {
    },
    watch: {
      'bufferSpriteObj.visible': function(newVal, oldVal) {
        this.bufferSpriteObj.spriteList.forEach((element) => {
          element.visible = newVal;
        });
      },
      'colors': function(newVal, oldVal) {
        this.bufferSpriteObj.spriteList.forEach((element) => {
          element.material.color.r = newVal.rgba.r / 255.0;
          element.material.color.g = newVal.rgba.r / 255.0;
          element.material.color.b = newVal.rgba.b / 255.0;
          element.material.color.a = newVal.rgba.a / 255.0;
        });
      },
    },
  }
</script>