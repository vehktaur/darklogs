import Password from '@/app/(dashboard)/_components/password';
import UseFormContextProvider from '@/context/UseFormContextProvider';

const PasswordPage = () => {
  return (
    <div>
      <UseFormContextProvider>
        <Password />
      </UseFormContextProvider>
    </div>
  );
};
export default PasswordPage;
