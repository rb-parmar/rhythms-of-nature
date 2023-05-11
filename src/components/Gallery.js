function Gallery(props) {
  return (
    <section className="section2">
      <div className="container">
        <h2>~ Our main attractions ~</h2>
        <div className="gallery">
          {props.gallery.map(photo => (
            <div className="post" key={photo.id}>
              <img  alt="" src={photo.url}></img>
              <p>{photo.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery

