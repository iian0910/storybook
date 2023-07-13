<template>
  <div :class="classes" :style="style">
    <img :src="imgURL" class="img" alt="" v-if="imgURL">
    <h4 class="title">{{title}}</h4>
    <div class="subTitle">{{subTitle}}</div>
    <p class="description">{{ description }}</p>
  </div>
</template>

<script>
import './card.css';

export default {
  name: 'my-card',
  props: {
    imgURL: {
      type: String
    },
    title : {
      type: String,
      required: true,
    },
    subTitle: {
      type: String
    },
    description: {
      type: String,
      required: true,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    bgColor: {
      type: String
    },
    txtColor: {
      type: String
    }
  },
  computed: {
    classes () {
      return {
        'card--disabled': this.disabled,
        'card': !this.disabled
      }
    },
    style() {
      return {
        backgroundColor: this.bgColor
      };
    }
  }
}
</script>
