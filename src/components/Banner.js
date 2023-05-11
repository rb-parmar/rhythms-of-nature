import Button from "./Button"

function Banner() {
  let button = true;
  return (
    <section className="section1">
      <div className="container row">
        <div className="banner-text">
          <h2>
            <span className="name">Rhythms <span className="of">Of</span> Nature:</span>
            Explore nature's best creation. Wildlife.
          </h2>
          <Button button={button}/>
        </div>
        <img alt=""></img>
      </div>
    </section>
  )
}

export default Banner