function Pokecard(props) {
    let {id, name, type, base_experience} = props;
    let imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
    return (
      <div className="Pokecard">
            <h2 className="Pokecard-h2">{name}</h2>
            <img className="Pokecard-img" src={imgUrl} />
            <p>Type: {type}<br/>
            EXP: {base_experience}</p>
      </div>
    );
}