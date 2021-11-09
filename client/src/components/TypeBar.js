import { useContext } from "react"
import { ListGroup, ListGroupItem } from "react-bootstrap"
import { Context } from ".."
import { observer } from "mobx-react-lite"


const TypeBar = observer(() => {
    const {device} = useContext(Context)
    return (
        <ListGroup>
            {device.types.map(type => 
                <ListGroupItem key={type.id}>
                    {type.name}

                </ListGroupItem>)}
        </ListGroup>
    )
})
export default TypeBar