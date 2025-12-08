const BranchCard = ({address, title, imgSrc}) => {
  return (
    <div 
        style={{
                backgroundImage: `url(${imgSrc})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                width: '320px',
                height: '320px',
                position: 'relative',
                borderRadius: '8px',
                overflow: 'hidden'
            }} 
        className="position-relative"
    >
        <div className="pt-3 pb-3 ps-5 pe-2 addr position-absolute">{address}</div>
        <div className="pt-3 pb-3 ps-3 pe-3 tit text-center position-absolute">{title}</div>
    </div>
  )
}

export default BranchCard