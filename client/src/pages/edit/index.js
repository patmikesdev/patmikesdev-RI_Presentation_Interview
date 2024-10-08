import Card from "../../components/Card/"
import MovieForm from '../../components/MovieForm/'
import { Container, Row, Col } from "react-bootstrap"
import { useParams } from "react-router"
import { useEffect, useState, useMemo } from 'react'

export default function EditPage() {
    const { id } = useParams();

    // eslint-disable-next-line 
    const [movie, setMovie] = useState(null)

    useEffect(() => {
        //make request to backend api for movie data, using route param
    }, [id])

    const EditCardProps = useMemo(() => {
        return {
            header: "Edit This Movie",
            footer: <span>-- ❖ --</span>,
            classes: 'mb-5 movieForm'
        }
    }, [])

    return (
        <Container style={{ overflowY: "auto", marginTop: "50px", marginBottom: "50px" }}>
            <Row>
                <Col xs={12}>
                    {
                        movie
                            ? <Card {...EditCardProps}>
                                {/*What other props need to be added to fill in this form correctly*/}
                                {/*Hint, look at the MovieForm function definition*/}
                                <MovieForm id="editForm" route="/api/edit/:id" method="POST" ></MovieForm>
                            </Card>
                            : <Card header={"No Movie selected!"} footer='??' className="search-card">
                                <div>
                                    <h1 style={{ color: 'white' }}>You didn't pick a movie to edit!</h1>
                                    <a href="/" style={{ color: "var(--primaryText" }} className="mt-5 fs-3">Return Home</a>
                                </div>
                            </Card>
                    }
                </Col>
            </Row>
        </Container>
    )
}