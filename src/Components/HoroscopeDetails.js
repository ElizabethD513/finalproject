import {Row, Col} from 'react-bootstrap'
import {BounceLoader} from "react-spinners";
import HoroscopeDetailCard from "./HoroscopeDetailCard";

export default function HoroscopeDetails(props) {
    return (
        <>
            {props.loading ?  <BounceLoader className="horoscope-details-loader" loading={props.loading}/> :
                <Row className="horoscope-details">
                  <Col>
                    <Row>
                      {Object.keys(props.details).map((detailName, index) => (
                        <Col sm={4} key={detailName}>
                            <HoroscopeDetailCard detailName={detailName} detailValue={props.details[detailName]}/>
                        </Col>
                      ))}
                    </Row>
                  </Col>
                </Row>
            }
        </>
    )
};
