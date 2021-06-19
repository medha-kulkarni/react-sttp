import ChildComponent from "./ChildComponent";

function ParentComponent(){
    let a = "Prop from parent Component";
    return(
        <div>
        <ChildComponent a={a} />
        <p> Hello for ParentComponent </p>
        </div>
    );
}
export default ParentComponent;