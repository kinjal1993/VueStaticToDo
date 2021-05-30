<template>
  <div id = "play-ground-inner">
    <p v-bind="$attrs">
      {{ id +'. '+ title }}
      <slot></slot>
    </p>
    <button @click="$emit('changeText')">
      change text
    </button>
  </div>
</template>

<script>
export default {
  name: 'PlayGroundInner',
  props: ['title', 'id'],
  inheritAttrs: false,
  data(){
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
