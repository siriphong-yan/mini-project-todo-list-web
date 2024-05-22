import { Spinner } from "react-bootstrap";

export default () => {
    return(
        <div style={{
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            flexDirection:"column",
            height:"100vh"
        }}>
            <Spinner animation="border" />
        </div>
    )
}