import UserBanner from '../UserBanner';
import NavLinks from '../NavLinks';
import LogOut from '../LogOut';
import SocialLinks from '../SocialLinks';

import users from '../../../data/users.json';

const UserPanel = () => {
    return (
      <div>
        <UserBanner data={users} />
        <NavLinks users={users} />
        <LogOut />
        <SocialLinks />
      </div>
    )
  }
export default UserPanel;