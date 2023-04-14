const Suits = ({label, observation}) => {
  return (
    <div className="card card-side bg-base-100 shadow-xl">
        <figure><img src="https://fakeimg.pl/100x100/?text=Suit" alt="Aperçu"/></figure>
        <div className="card-body">
            <h2 className="card-title">{label}</h2>
            <p>{ observation }</p>
            <div className="card-actions justify-end">
                <button className="btn btn-primary">Voir</button>
            </div>
        </div>
    </div>
  )
}

export default Suits;
