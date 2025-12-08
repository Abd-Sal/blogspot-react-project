import { useEffect, useState } from "react";
import { Col, Row, Spinner } from "react-bootstrap"
import Accordion from 'react-bootstrap/Accordion';
import { useSearchParams } from "react-router-dom";
import { CategoryService } from "../Services/CategoryService";
import Alert from 'react-bootstrap/Alert';

const FAQsAccordionByCate = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [failedMsg, setFailedMsg] = useState('');
    const [FAQs, setFAQs] = useState([]);
    const [searchParams] = useSearchParams();

    const getFAQs = ()=>{
        setFAQs([])
        setIsLoading(true)
        setFailedMsg('')
        let _id = searchParams.get('category')
        CategoryService.FAQs({
            options: {
                id: _id
            }
        })
        .then((data)=>{
            setFAQs(data)
        })
        .catch((err)=>{
            setFailedMsg(err.message)
        })
        .finally(()=>{
            setIsLoading(false)
        })
    }

    useEffect(()=>{
        getFAQs()
    }, [searchParams])
    return (
    <>
        <Row>
            {
                isLoading && (
                <Col
                    lg={12}
                    style={{height: 300}}
                    className="d-flex justify-content-center align-items-center">
                    <Spinner animation="grow" className="bg-main-color" />
                </Col>
            )}

            {
                failedMsg && (
                <Col lg={12} className="h-100 d-flex justify-content-center align-items-center">
                    <Alert key={'danger'} variant={'danger'} className="">
                        {failedMsg}
                    </Alert>
                </Col>
            )}
            {
                FAQs.length > 0 &&
                <Col lg={12}>
                    <Accordion defaultActiveKey="0">
                        {
                            FAQs.map((item, index)=>(
                                <Accordion.Item key={`acc-item-${index}`} eventKey={index}>
                                    <Accordion.Header>
                                        {item.title}
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <p>
                                            {item.body}
                                        </p>
                                    </Accordion.Body>
                                </Accordion.Item>
                            ))
                        }
                    </Accordion>
                </Col>
            }
            <Col lg={12}>
            </Col>
        </Row>
    </>
  )
}

export default FAQsAccordionByCate