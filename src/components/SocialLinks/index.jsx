import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

function SocialLinks() {
  return (
    <div className="self-center hidden md:block w-48 mt-16 text-primary">
      <a href="https://www.facebook.com/BatalaLaRochelle" target="_blank" rel="noreferrer">
      <FontAwesomeIcon icon={faFacebook} size="2xl" className='mr-2' />
      </a>
      <a href="https://twitter.com/batala_lr" target="_blank" rel="noreferrer">
      <FontAwesomeIcon icon={faTwitter} size="2xl" className='mr-2' />
      </a>
      <a href="https://www.youtube.com/channel/UC2nkR0cyMLRxYs1yk1ktHgQ" target="_blank" rel="noreferrer">
      <FontAwesomeIcon icon={faYoutube} size="2xl" className='mr-2'/>
      </a>
      <a href="https://www.instagram.com/batala.larochelle/" target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faInstagram} size="2xl" className='mr-2' />
      </a>
    </div>
  );
}

export default SocialLinks;
