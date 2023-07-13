import CustomsCard from '../components/Card/CardComponent.vue';

export default {
  title: 'MyComponents/Card',
  component: CustomsCard,
  tags: ['autodocs'],
  render: (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { CustomsCard },
    template:
      '<customs-card :title="title" :subTitle="subTitle" :description="description" v-bind="$props" />'
  })
};

// 各元件狀態 (STORIES)
export const Normal = {
  args: {
    imgURL: '',
    title: '我是標題',
    subTitle: '我是副標',
    description: '描述是我',
    disabled: false
  },
}
export const Disabled = {
  args: {
    title: 'Card Title',
    subTitle: 'Subtitle text',
    description: 'Greyhound divisively hello coldly wonderfully marginally far upon excluding.',
    disabled: true
  },
}
export const PostCard = {
  args: {
    imgURL: 'https://cdn.vuetifyjs.com/images/cards/cooking.png',
    title: 'Card Title',
    subTitle: 'Subtitle text',
    description: 'Greyhound divisively hello coldly wonderfully marginally far upon excluding.'
  },
}
export const BackgroundColor = {
  args: {
    imgURL: 'https://cdn.vuetifyjs.com/images/cards/cooking.png',
    title: 'Card Title',
    subTitle: 'Subtitle text',
    description: 'Greyhound divisively hello coldly wonderfully marginally far upon excluding.',
    bgColor: '#26c6da'
  },
}
