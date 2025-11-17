import { BsFeather } from "react-icons/bs";

const WrtierCard = ({title, imgSrc, writerName}) => {
  return (
    <>
        <div className={`writer-card d-flex flex-column justify-content-center align-items-center gap-3 p-2`}>
            <div className="writer-img">
                <img src={imgSrc} alt="Writer image" className="rounded-4"/>
            </div>
            <div className={`writer-name d-flex justify-content-center align-items-center rounded-3`}>
                <BsFeather fontSize={25} className="color-purple"/>
                <h3 className="mb-0 writer-name-h">{writerName}</h3>
            </div>
            <h4 className="mb-0 title-writer-h">{title}</h4>
            <hr className="writer-separator"/>
            <div className="d-flex justify-content-between align-items-center w-100 pt-2 pb-2">
                <div className="d-flex justify-content-start align-items-center gap-2">
                    <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.6548 28.3119L27.1413 33.055C28.0982 33.6613 29.2864 32.7596 29.0024 31.6425L26.8394 23.1337C26.7785 22.8967 26.7857 22.6474 26.8602 22.4143C26.9347 22.1812 27.0735 21.9739 27.2606 21.8162L33.974 16.2285C34.8561 15.4943 34.4008 14.0303 33.2675 13.9568L24.5002 13.3878C24.2641 13.3709 24.0376 13.2873 23.8471 13.1467C23.6566 13.0061 23.51 12.8143 23.4244 12.5936L20.1545 4.35928C20.0656 4.12502 19.9076 3.92335 19.7014 3.78103C19.4952 3.63872 19.2506 3.5625 19 3.5625C18.7495 3.5625 18.5048 3.63872 18.2986 3.78103C18.0924 3.92335 17.9344 4.12502 17.8455 4.35928L14.5757 12.5936C14.49 12.8143 14.3434 13.0061 14.1529 13.1467C13.9624 13.2873 13.7359 13.3709 13.4998 13.3878L4.73249 13.9568C3.59916 14.0303 3.14386 15.4943 4.02598 16.2285L10.7394 21.8162C10.9265 21.9739 11.0653 22.1812 11.1398 22.4143C11.2143 22.6474 11.2215 22.8967 11.1606 23.1337L9.15465 31.0247C8.81389 32.3652 10.2397 33.4472 11.388 32.7197L18.3452 28.3119C18.5409 28.1873 18.7681 28.1211 19 28.1211C19.232 28.1211 19.4591 28.1873 19.6548 28.3119Z" fill="#FD8E1F"/>
                    </svg>
                    <p className="mb-0">4.7</p>
                </div>
                <div>
                    <p className="mb-0"><strong>13</strong> Articles</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default WrtierCard