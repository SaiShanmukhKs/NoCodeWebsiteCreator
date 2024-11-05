import React from 'react';
import { useDrag } from 'react-dnd';

const components = [
  { id: 'title', label: 'Title' },
  { id: 'heading', label: 'Heading' },
  { id: 'paragraph', label: 'Paragraph' },
  { id: 'button', label: 'Button' },
  { id: 'card', label: 'Card' }
];

function Sidebar({ addComponent }) {
  return (
    <div style={{ width: '200px', padding: '10px', borderRight: '1px solid #ccc' }}>
      <h3>Components</h3>
      {components.map(component => (
        <DraggableComponent key={component.id} component={component} addComponent={addComponent} />
      ))}
    </div>
  );
}

function DraggableComponent({ component, addComponent }) {
  const [, drag] = useDrag(() => ({
    type: 'component',
    item: { id: component.id }
  }));

  return (
    <div
      ref={drag}
      style={{ margin: '10px', padding: '10px', border: '1px solid #ddd', cursor: 'move' }}
      onClick={() => addComponent({ id: component.id, position: { x: 100, y: 100 }, width: 150, height: 50 })}
    >
      {component.label}
    </div>
  );
}

export default Sidebar;
