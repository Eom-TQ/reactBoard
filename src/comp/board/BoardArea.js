export default function BoardArea(props) {
    const item = props.item;
    const index = props.index;

    const date = item.createdAt.split('T')[0];
    return (
        <tr key={index}>
            <td>{item.boardIdx}</td>
            <td>{item.title}</td>
            <td>{item.memberId}</td>
            <td>{date}</td>
            <td>{item.boardGood}</td>
        </tr>
    )
}

