import "../stylesheets/searchedSizeCard.scss";

const SearchedSizeCard = (props) => {
  const { size, onClick } = props

  return (
    <div className="searched-size-card" onClick={e => onClick(size)}>
      <img src={size.image} />
      <div className="name">{size.name}</div>
    </div>
  )
}

export default SearchedSizeCard;