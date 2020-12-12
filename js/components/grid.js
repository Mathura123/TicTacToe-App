function CrossPath(props) {
    return ( 
        <g>
            <path className = {props.name+ " cross"} d = "M20 100 L100 20" / >
            <path className = {props.name+ " cross"} d = "M100 100 L20 20" / >
        </g>
    );
}
function CirclePath(props) {
    return ( 
        <circle className={props.name+ " circle"} r="42" cy="60" cx="60" fill="transparent" strokeWidth="6" />
    );
}
function Path(props) {
    return ( 
        <svg viewBox="0 0 120 120">
            <CrossPath name={props.name}/>
            <CirclePath name={props.name}/>
        </svg>
    );
}
function Block(props){
    return(
    <div id={props.name} className="block" onClick={()=>workOnCell(props.name)}>
        <Path name = {props.name}/>
    </div>
    );
}
function Line(props){
    const firstBlockNo= parseInt(props.blockNo);
    const secondBlockNo= firstBlockNo + 1;
    const thirdBlockNo= secondBlockNo + 1;
    return(
        <div className="line">
            <Block name={"block_"+ firstBlockNo}/>
            <Block name={"block_"+ secondBlockNo}/>
            <Block name={"block_"+ thirdBlockNo}/>
        </div>
    );
}
function PlayArea(props){
    return(
        <div className="play-area">
            <Line blockNo="0"/>
            <Line blockNo="3"/>
            <Line blockNo="6"/>
        </div>
    )
}
{/* const domContainer = document.querySelector('.centerBody');
ReactDOM.render(<PlayArea/>, domContainer); */}