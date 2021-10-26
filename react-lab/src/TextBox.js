function TextBox(props) {
    return (
        <div>
            <input type={"text"} onChange={e => props.change(e.target.value)}/>
            <label>{props.label}</label>
        </div>
    );
}

export default TextBox;