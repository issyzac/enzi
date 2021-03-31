import {Card} from 'react-bootstrap'
import enziClassicBlendImg from '../images/blends/ec001.png'
import enziClassicBlendImg2 from '../images/blends/ec002.jpg'

function BlendCard(){
    return(
        <Card style={blendCardSyle}>
            <Card.Img variant="top" src={enziClassicBlendImg} />
            <Card.Body>
            <Card.Text>
                Some quick example text to build on the card title and make up the bulk
                of the card's content.
            </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default BlendCard;