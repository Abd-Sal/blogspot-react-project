const StoreBtn = ({img, storeName}) => {
  return (
    <div className="store bg-white rounded-3 p-2 d-flex justify-content-between align-items-center gap-2">
        <div className="d-flex justify-content-center align-items-center">
            <img src={img} alt={storeName} />
        </div>
        <div className="download-text d-flex flex-column justify-content-center aling-items-center text-center">
            <p className="mb-0">Download Now</p>
            <h4 className="mb-0">{storeName}</h4>
        </div>
    </div>
  )
}

export default StoreBtn