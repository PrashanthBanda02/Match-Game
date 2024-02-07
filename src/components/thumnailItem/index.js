import './index.css'

const ThumbnailItems = props => {
  const {imagesList, activeTab} = props
  const {id} = imagesList
  const filteredList = imagesList.filter(
    eachObject => eachObject.category === activeTab,
  )
  return (
    <ul className="thumbnails-container">
      {filteredList.map(eachThumbnail => (
        <li key={id} className="thumbnailItem">
          <img
            className="thumbnail-img"
            src={eachThumbnail.thumbnailUrl}
            alt="thumbnail"
          />
        </li>
      ))}
    </ul>
  )
}

export default ThumbnailItems
