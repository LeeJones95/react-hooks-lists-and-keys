
import ColorList from "./ColorList";

function ColorItem (props) {
    console.log(props)
    return <li key={props.color} style={{ color: props.color}}>{props.color}</li>;

};


export default ColorItem;