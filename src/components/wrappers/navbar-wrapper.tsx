import { auth } from '@/auth';
import { getUser } from '@/lib/utils/get-user';
import Navbar from '../layout/navbar';

const NavbarWrapper = async () => {
  const session = await auth();
  const user = await getUser({ id: session?.user?._id });

  return <Navbar isLoggedIn={!!session} user={user} />;
};
export default NavbarWrapper;
