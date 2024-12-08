import { useNavigate } from "react-router-dom";

export default function BoardListArea(props) {

    const navigate = useNavigate();

    const item = props.item;
    const index = props.index;

    const date = item.createdAt.split('T')[0];

    function goDetail() {
        navigate('/BoardDetail', { state: { boardIdx: item.boardIdx } });
    }

    return (
        <tr key={index} onClick={goDetail}>
            <td>{item.boardIdx}</td>
            <td>{item.title}</td>
            <td>{item.createdBy}</td>
            <td>{date}</td>
            <td>{item.boardGood}</td>
        </tr>
    )
}

