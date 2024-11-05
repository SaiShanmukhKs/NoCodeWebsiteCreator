import React from 'react';
import { useDrop } from 'react-dnd';
import CanvasComponent from './CanvasComponent';

function Canvas({ components, setSelectedComponentIndex, addComponent }) {
  const [, drop] = useDrop(() => ({
    accept: 'component',
    drop: (item, monitor) => {
      const offset = monitor.getSourceClientOffset();
      addComponent({ id: item.id, position: { x: offset.x, y: offset.y }, width: 150, height: 50 });
    }
  }));

  return (
    <div
      ref={drop}
      style={{
        flex: 1,
        height: '100vh',
        padding: '10px',
        background: '#f7f7f7',
        position: 'relative'
      }}
    >
      {components.map((comp, index) => (
        <CanvasComponent
          key={index}
          index={index}
          component={comp}
          onClick={() => setSelectedComponentIndex(index)}
        />
      ))}
    </div>
  );
}

export default Canvas;
