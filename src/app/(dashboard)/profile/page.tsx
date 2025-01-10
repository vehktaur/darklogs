import PersonalInfo from '@/app/(dashboard)/_components/personal-info';
import { auth } from '@/auth';
import UseFormContextProvider from '@/context/UseFormContextProvider';
import { getUser } from '@/lib/utils/get-user';
import { redirect } from 'next/navigation';

const ProfilePage = async () => {
  const session = await auth();
  const user = await getUser({ id: session?.user._id });

  if (!user) {
    redirect('/');
  }

  const usersPersonalInfo = {
    firstName: user.firstName,
    lastName: user?.lastName,
    username: user.username,
    email: user.email,
  };

  return (
    <UseFormContextProvider defaultValues={usersPersonalInfo}>
      <PersonalInfo />
    </UseFormContextProvider>
  );
};
export default ProfilePage;
