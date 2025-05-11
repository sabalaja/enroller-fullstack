export default function MeetingsList({meetings, onDelete}) {

    return (
        <table>
            <thead>
            <tr>
                <th>Nazwa spotkania</th>
                <th>Opis</th>
                <th>Akcje</th>
            </tr>
            </thead>
            <tbody>
            {
                meetings.map((meeting, index) => <tr key={index}>
                    <td>{meeting.title}</td>
                    <td>{meeting.description}</td>
                    <td>
                        <button type="button" className="button-outline" onClick={() => onDelete(meeting)}>Usun</button>
                    </td>
                </tr>)
            }
            </tbody>
        </table>
    );
}
