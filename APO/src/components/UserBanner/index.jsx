// Importation de React
import React from "react";

// Déclaration du composant fonctionnel UserBanner
function UserBanner({ user }) {
  // Rendu du composant UserBanner
  return (
    <div className="flex items-center md:flex-col " key={user.id}>
       {/* Conteneur pour l'avatar de l'utilisateur */}
      <div className="avatar">
        <div className="m-4 w-12 rounded-full ring ring-primary ring-offset-2 ring-offset-base-100 md:w-24">
           {/* Image de l'avatar de l'utilisateur */}
          <img src={user.url_img} alt="Avatar" />
        </div>
      </div>
       {/* Conteneur pour le nom d'utilisateur et le rôle */}
      <div className="font-bold md:text-center">
         {/* Nom d'utilisateur */}
        <p className="text-black text-lg first-letter:uppercase">{user.nickname}</p>
         {/* Rôle de l'utilisateur affiché dans une étiquette */}
        <p className="bade-primary badge-outline badge badge-xs p-2 font-semibold uppercase md:badge-md">
          {user.role}
        </p>
      </div>
    </div>
  );
}

// Exportation du composant UserBanner
export default UserBanner;
