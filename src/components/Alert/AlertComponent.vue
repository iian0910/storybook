<template>
  <div class="alert" :class="typeCategory">
    <div :class="borderDirection" v-if="border"></div>
    {{content}}
  </div>
</template>

<script>
import './alert.css';

export default {
  name: 'my-alert',
  props: {
    type: {
      type: String
    },
    content: {
      type: String,
      required: true
    },
    border: {
      type: String,
      validator: function (value) {
        return ['top', 'bottom', 'left', 'right'].indexOf(value) !== -1;
      },
    }
  },
  computed: {
    borderDirection () {
      return {
        'alert-border-bar alert-border-bar--top': this.border === 'top',
        'alert-border-bar alert-border-bar--bottom': this.border === 'bottom',
        'alert-border-bar alert-border-bar--left': this.border === 'left',
        'alert-border-bar alert-border-bar--right': this.border === 'right'
      }
    },
    typeCategory () {
      return {
        'alert-success': this.type === 'success',
        'alert-info': this.type === 'info',
        'alert-warning': this.type === 'warning',
        'alert-error': this.type === 'error'
      }
    }
  }
}
</script>
