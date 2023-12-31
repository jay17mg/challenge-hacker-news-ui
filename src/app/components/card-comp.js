import { useState } from "react";
import { Badge, Button, Card, CardBody, CardHeader, CardText, OverlayTrigger, Tooltip } from "react-bootstrap";
import { formatTime } from "./utils";

export default function CardComp(props) {
    const [hide, setHide] = useState(false)
    return (
        <>
            <Card className="mb-2 smaller" hidden={hide}>
                <CardHeader>
                <OverlayTrigger key={props.index} overlay={
                        <Tooltip>Upvote</Tooltip>
                    }>
                    <i className="bi bi-caret-up-fill me-auto"></i>
                    </OverlayTrigger>
                    <Badge className="ms-1" pill bg='success'>
                    Votes: {props.data.score}
                    </Badge>
                    <span  className="float-end">
                    <small className="me-1">{formatTime(props.data.time)}</small>
                    <Button size="sm" className="remove-outline" variant="outline-dark" onClick={() => setHide(true)}>
                        <i className="text-center bi bi-x-lg" />
                    </Button>
                    </span>
                    
                </CardHeader>
                <CardBody>
                    <CardText className="mb-0">{props.index + 1}. <a href = {props.data.url}> {props.data.title} </a></CardText>
                    <small>By: {props.data.by} </small>
                </CardBody>
            </Card>

        </>
    )
}