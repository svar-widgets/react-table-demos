export default function Select({ value, onChange, options }) {
    return (
        <select style={ { fontSize: "16px", padding:"5px 15px" } } value={value} onChange={onChange}>
            {options.map(o => (
                <option key={o.id} value={o.id}>{o.label}</option>
            ))}
        </select>
    );
}