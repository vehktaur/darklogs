import { auth } from '@/auth';
import ProfileImg from '@/app/(dashboard)/_components/profile-img';
import { getUser } from '@/lib/utils/get-user';

const ProfileImgWrapper = async () => {
  const session = await auth();
  const user = await getUser({ id: session?.user._id });
  if (!user) {
    return;
  }

  return <ProfileImg user={user} />;
};
export default ProfileImgWrapper;
