const JoinUs = ({border}) => {
  return (
    <div className={`p-3 text-center d-flex flex-column justify-content-center align-items-center gap-3 ${border}`}>
        <div className="p-4 rounded-5 bg-main-color"></div>
        <h4>Ut justo ligula, vehicula sed egestas vel.</h4>
        <p>Quisque leo leo, suscipit sed arcu sit amet, iaculis feugiat felis. Vestibulum non consectetur tortor. Morbi at orci vehicula, vehicula mi ut, vestibulum odio. </p>
    </div>
  )
}

export default JoinUs