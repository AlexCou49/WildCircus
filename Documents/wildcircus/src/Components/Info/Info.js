import React from 'react';

function Info() {
  return (
    <div>
      <div className="container">
        <div className="container mt-5 card pt-4 pb-3 text-center">
          <p>Débuts embryonnaires
						À l’aube des années 1980, une troupe d’artistes fondée par Gilles Ste-Croix a fait une démonstration de ses talents dans les rues de Baie-Saint-Paul, un ravissant village blotti sur les rives du fleuve Saint-Laurent près de la ville de Québec. Connue du public comme Les Échassiers de Baie-Saint-Paul (The Stiltwalkers of Baie-Saint-Paul), cette troupe formera l’embryon de ce qui allait devenir le Cirque du Soleil. Cette troupe qui donna un spectacle éclectique auquel prenaient part jongleurs, danseurs, cracheurs de feu et musiciens a charmé le public de la région avec son numéro. Ces admirateurs et ces artistes de la première heure étaient loin de se douter que de ces débuts allait émerger quelque chose de magique, d’excitant et de révolutionnaire qui allait se répercuter à l’échelle mondiale.
         </p>
        </div>
      <br />
        <div className="container mt-5 pt-4 pb-3 text-center">
          <h3>Ou sommes nous ?</h3>
        </div>
      <br />
        <div className="container mt-5 pt-4 pb-3 text-center">
          <small>
            <iframe
              className="mapgo"
              title="video"
              width="1107"
              height="350"
              frameBorder="1"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-1.6494941711425781%2C47.22624251583851%2C-1.6379714012145998%2C47.235553216287194&amp;layer=mapnik&amp;marker=47.2308980705218%2C-1.6437327861785889"
            />
      <br />
          </small>
        </div>
      </div>
    </div>
  )
}
export default Info