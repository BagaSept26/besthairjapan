import '../styles/Controlimg.css';

const Comparisonc = ({
    isDragStarted = false,
    positionLeft,
    onDragStop,
    onDragStart,
    elementRefference
}) => (
        <span 
            
            
            onTouchMove={onDragStart}
            onTouchStart={onDragStop}
            
            onMouseDown={onDragStart}
            style={{ left: positionLeft }}
            onMouseUp={onDragStop}
            ref={elementRefference}
            className={`cd-handle ${isDragStarted && 'draggable'}`}></span>
    );

export default Comparisonc;