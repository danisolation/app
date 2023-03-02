import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const Dasboard = () => {
    //   const [products, setProducts] = useState([]);

    //   useEffect(() => {
    //     const fetchProducts = async () => {
    //       const { data } = await axios.get("/api/products");
    //       setProducts(data);
    //     };
    //     fetchProducts();
    //   }, []);
    const products = [
        {
            _id: 1,
            image: '',
            name: 'HG',
            description: 'rat xinh dep',
        },
        {
            _id: 2,
            image: '',
            name: 'HG',
            description: 'rat xinh dep',
        },
        {
            _id: 3,
            image: '',
            name: 'HG',
            description: 'rat xinh dep',
        },
    ];

    return (
        <Container>
            <Row>
                {products.map((product) => (
                    <Col md={4} key={product._id}>
                        <Card>
                            <Card.Img variant="top" src={product.image} />
                            <Card.Body>
                                <Card.Title>{product.name}</Card.Title>
                                <Card.Text>{product.description}</Card.Text>
                                <Button variant="primary" as={Link} to={`/product/${product._id}`}>
                                    View Details
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Dasboard;
