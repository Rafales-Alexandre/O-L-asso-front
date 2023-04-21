import React from 'react';

function SocialLinks() {
  return (
    <div className="flex justify-evenly invisible md:visible w-48 mt-16 text-primary">
      <a href="https://www.facebook.com/BatalaLaRochelle" target="_blank">
        <i className="fa-brands fa-square-facebook fa-2xl hover:text-accent" />
      </a>
      <a href="https://twitter.com/batala_lr" target="_blank">
        <i className="fa-brands fa-square-twitter fa-2xl hover:text-accent" />
      </a>
      <a href="https://www.youtube.com/channel/UC2nkR0cyMLRxYs1yk1ktHgQ" target="_blank">
        <i className="fa-brands fa-square-youtube fa-2xl hover:text-accent" />
      </a>
      <a href="https://www.instagram.com/batala.larochelle/" target="_blank">
        <i className="fa-brands fa-square-instagram fa-2xl hover:text-accent" />
      </a>
    </div>
  );
}

export default SocialLinks;
