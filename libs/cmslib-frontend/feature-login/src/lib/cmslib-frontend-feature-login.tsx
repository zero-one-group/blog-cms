import { useForm } from 'react-hook-form';
import {
  InputField,
  PasswordField,
  SubmitButton,
} from '@cms-blog/cmslib-frontend/ui';

/* eslint-disable-next-line */
export interface CmslibFrontendFeatureLoginProps {}

export function CmslibFrontendFeatureLogin(
  props: CmslibFrontendFeatureLoginProps
) {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (formData: unknown) => {
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputField
        {...register('username', { required: 'please input your username' })}
        type="string"
        label="haha"
      />
      <PasswordField {...register('password')} />
      <SubmitButton buttonLabel="Submit" />
    </form>
  );
}

export default CmslibFrontendFeatureLogin;
