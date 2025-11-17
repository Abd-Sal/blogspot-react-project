import { useContext } from "react"
import { AuthContext } from "../Context/AuthContext"
import { Col, Container, Row } from "react-bootstrap"
import { IoMdAddCircle } from "react-icons/io";
import CreateArticleForm from "../Components/CreateArticleForm";

const CreateArticle = () => {
    const {isInitialized} = useContext(AuthContext)
    if(isInitialized)
    return (
        <>
        <div className="hight-lite h-100">
            <Container>
                <Row>
                    <Col lg={7} className="d-flex justify-content-start align-items-center">
                        <h2 className="mb-0 pt-5 pb-5 create-title-page"><IoMdAddCircle fontSize={100} color="color-purple" /> Create New Premium Article</h2>
                    </Col>
                </Row>
                <Row>
                    <Col lg={12}>
                        <CreateArticleForm />
                    </Col>
                </Row>
            </Container>
        </div>
        </>
    )
    return (
        <>
            loading...
        </>
    )
}

export default CreateArticle