import { useEffect } from "react";
import { useNavigate } from "react-router-dom"

export default function Logout(props) {
    const navigate = useNavigate();

    useEffect(() => {
        localStorage.removeItem('userId');
        props.onPar();
        navigate("/");
    })

}