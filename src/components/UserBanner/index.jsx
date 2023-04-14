import PropTypes from 'prop-types';

const UserBanner = ({data}) => {
return (
  <div className="flex wrap" key={data[1].id}>
    <div>
        <img className="rounded-full" src={data[1].url_img} alt="photo de profil"/>
    </div>
    <div>
        <p className="user-nickname">{data[1].nickname}</p>
        <p className="user-email">{data[1].email}</p>
        <p className="badge capitalize position absolute">{data[1].role}</p>
    </div>
  </div>
)};


UserBanner.propTypes = {
  url_img: PropTypes.string.isRequired,
  nickname: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
};

export default UserBanner;
