// CanvasComponent.js
import React from 'react';
import { Rnd } from 'react-rnd';

function CanvasComponent({ index, component, onClick }) {
  const renderComponent = () => {
    const style = {
      color: component.properties.color,
      width: '100%',
      height: '100%',
    };

    switch (component.id) {
      case 'title':
        return <h1 style={style}>{component.properties.text}</h1>;
      case 'heading':
        return <h2 style={style}>{component.properties.text}</h2>;
      case 'paragraph':
        return <p style={style}>{component.properties.text}</p>;
      case 'button':
        return <button style={style} className="btn btn-primary">{component.properties.text}</button>;
      case 'card':
        return (
          <div className="card" style={{ width: '100%', height: '100%', border: '1px solid #ddd', borderRadius: '0.25rem' }}>
            <div className="card-body">
              <h5 className="card-title" style={{ color: component.properties.titleColor || '#000' }}>{component.properties.title}</h5>
              <p className="card-text">{component.properties.content}</p>
              <button className="btn btn-primary">{component.properties.buttonText || 'Button'}</button>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <Rnd
      size={{ width: component.width, height: component.height }}
      position={component.position}
      onClick={onClick}
      onDragStop={(e, d) => {
        // Update position in the component state
        component.position = { x: d.x, y: d.y };
      }}
      onResizeStop={(e, direction, ref, delta, position) => {
        // Update size and position in the component state
        const newWidth = ref.style.width.replace('px', '');
        const newHeight = ref.style.height.replace('px', '');
        component.width = newWidth;
        component.height = newHeight;
        component.position = position;
      }}
      bounds="parent"
      style={{ border: '1px dashed #ccc', cursor: 'pointer' }}
    >
      <div style={{ width: '100%', height: '100%' }}>
        {renderComponent()}
      </div>
    </Rnd>
  );
}

export default CanvasComponent;
