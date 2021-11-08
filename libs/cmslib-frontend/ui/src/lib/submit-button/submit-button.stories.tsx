import { Story, Meta } from '@storybook/react';
import { SubmitButton, SubmitButtonProps } from './submit-button';

export default {
  component: SubmitButton,
  title: 'SubmitButton',
} as Meta;

const Template: Story<SubmitButtonProps> = (args) => <SubmitButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  buttonLabel: '',
  form: '',
};
