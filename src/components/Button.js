function Button(props) {
  return (
    <div className="buttons">
      <button className={props.button ? 'button1' : 'button2'}>View Offers</button>
      <button className={props.button ? 'button2' : 'button1'}>Learn More</button>
    </div>
  )
}

export default Button