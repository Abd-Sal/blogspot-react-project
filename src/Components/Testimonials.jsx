const Testimonials = ({name, job, qoute}) => {
  return (
    <div className="rounded-4">
        <div className="w-100 border border-gray rounded-top-4 ps-3 pe-3 pt-5 pb-5 d-flex flex-column justify-content-center align-items-center">
            <div className="w-100 d-flex justify-content-start align-items-center">"</div>
            <div className="text-center">{qoute}</div>
            <div className="w-100 d-flex justify-content-end align-items-center">"</div>
        </div>
        <div className="bg-main-color rounded-bottom-4 w-100 pt-2 pb-2 d-flex flex-column justify-content-center align-items-center gap-2">
            <p className="text-white"><b>{name}</b></p>
            <p className="text-white">{job}</p>
        </div>
    </div>
  )
}

export default Testimonials