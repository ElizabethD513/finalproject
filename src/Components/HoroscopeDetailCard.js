import {Card} from 'react-bootstrap'

export default function HoroscopeDetailCard(props) {
    return (
        <Card className="mb-3">
            <Card.Body>
                <Card.Title>{props.detailName}</Card.Title>
                <Card.Text>{props.detailValue}</Card.Text>
            </Card.Body>
        </Card>
    )
};
