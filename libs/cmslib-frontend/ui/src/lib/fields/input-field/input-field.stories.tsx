import { Story, Meta } from '@storybook/react';
import { InputField, InputFieldProps } from './input-field';

export default {
  component: InputField,
  title: 'InputField',
} as Meta;

const Template: Story<InputFieldProps> = (args) => (
  <InputField name="inputName" {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  label: '',
  type: '',
};
