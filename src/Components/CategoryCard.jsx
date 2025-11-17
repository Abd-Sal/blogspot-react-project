import { BiSolidCategory } from "react-icons/bi";

const CategoryCard = ({title, description}) => {
  return (
    <div className="w-100 h-100 d-flex flex-wrap mt-5 position-relative pt-5">
        <div className="w-100 h-50 top-cate d-flex justify-content-center align-items-center position-absolute">
            <div className="w-50 h-100 bg-white d-flex justify-content-center align-items-center rounded-4 p-5">
                <BiSolidCategory fontSize={75}/>
            </div>
        </div>
        <div className="bottom-cate w-100 h-50 rounded-3 text-center p-5 pt-5 pb-4">
            <h3 className="cate-title">{title}</h3>
            <p className="cate-desc">{description}</p>
        </div>
    </div>
  )
}

export default CategoryCard