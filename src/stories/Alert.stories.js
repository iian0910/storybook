import CustomsAlert from '../components/Alert/AlertComponent.vue';

export default {
  title: 'MyComponents/Alert',
  component: CustomsAlert,
  tags: ['autodocs'],
  render: (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { CustomsAlert },
    template:
      '<customs-alert :content="content" v-bind="$props"/>'
  }),
  argTypes: {
    border: {
      control: { type: 'select' },
      options: ['top', 'bottom', 'left', 'right'],
    },
    type: {
      control: { type: 'select' },
      options: ['success', 'info', 'warning', 'error'],
    }
  },
};

export const Normal = {
  args: {
    content: "I'm an Alert Usage Example",
  },
}

export const BorderDirection = {
  args: {
    content: "I'm an Alert Usage Example",
    border: 'top'
  },
}

export const Type = {
  args: {
    content: "I'm an Alert Usage Example",
    type: 'success'
  },
}
