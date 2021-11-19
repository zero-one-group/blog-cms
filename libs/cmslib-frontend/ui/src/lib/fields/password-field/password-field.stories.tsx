import { Story, Meta } from '@storybook/react';
import { PasswordField } from './password-field';

export default {
  component: PasswordField,
  title: 'PasswordField',
} as Meta;

const Template: Story = (args) => <PasswordField {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
