import { Col, Container, Row } from "react-bootstrap"

const FooterCopyWrites = () => {
  return (
    <div className="copy-write-bg">
        <Container>
            <Row>
                <Col sm={12} className="d-flex justify-content-center align-items-center pt-2 pb-2">
                    © 2025 - All rights reserved
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default FooterCopyWrites