// Importation de React et des icônes FontAwesome
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

// Déclaration du composant fonctionnel SocialLinks
function SocialLinks() {
  // Rendu du composant SocialLinks
  return (
    <div className="self-center hidden md:block w-48 mt-16 text-primary">
       {/* Lien vers la page Facebook */}
      <a href="https://www.facebook.com/BatalaLaRochelle" target="_blank" rel="noreferrer">
        {/* Icône Facebook */}
        <FontAwesomeIcon icon={faFacebook} size="2xl" className='mr-2' />
      </a>
       {/* Lien vers le compte Twitter */}
      <a href="https://twitter.com/batala_lr" target="_blank" rel="noreferrer">
        {/* Icône Twitter */}
        <FontAwesomeIcon icon={faTwitter} size="2xl" className='mr-2' />
      </a>
       {/* Lien vers la chaîne YouTube */}
      <a href="https://www.youtube.com/channel/UC2nkR0cyMLRxYs1yk1ktHgQ" target="_blank" rel="noreferrer">
        {/* Icône YouTube */}
        <FontAwesomeIcon icon={faYoutube} size="2xl" className='mr-2'/>
      </a>
       {/* Lien vers le compte Instagram */}
      <a href="https://www.instagram.com/batala.larochelle/" target="_blank" rel="noreferrer">
         {/* Icône Instagram */}
        <FontAwesomeIcon icon={faInstagram} size="2xl" className='mr-2' />
      </a>
    </div>
  );
}

// Exportation du composant SocialLinks
export default SocialLinks;
