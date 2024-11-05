import React, { useState, useEffect } from 'react';

function Toolbar({ selectedComponentIndex, components, updateComponent, generateCode }) {
  const [properties, setProperties] = useState({ text: '', color: '#000', title: '', content: '' });

  useEffect(() => {
    if (selectedComponentIndex !== null && components[selectedComponentIndex]) {
      setProperties(components[selectedComponentIndex].properties || {});
    }
  }, [selectedComponentIndex, components]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProperties((prev) => ({ ...prev, [name]: value }));
    updateComponent(selectedComponentIndex, { [name]: value });
  };

  return (
    <div style={{ width: '200px', padding: '10px', borderLeft: '1px solid #ccc' }}>
      <h3>Toolbar</h3>
      <label>Text:</label>
      <input
        type="text"
        name="text"
        value={properties.text || ''}
        onChange={handleChange}
      />
      <label>Color:</label>
      <input
        type="color"
        name="color"
        value={properties.color || '#000'}
        onChange={handleChange}
      />
      {components[selectedComponentIndex]?.id === 'card' && (
        <>
          <label>Card Title:</label>
          <input
            type="text"
            name="title"
            value={properties.title || ''}
            onChange={handleChange}
          />
          <label>Card Content:</label>
          <textarea
            name="content"
            value={properties.content || ''}
            onChange={handleChange}
          />
        </>
      )}
      <button onClick={generateCode}>Generate Code</button>
    </div>
  );
}

export default Toolbar;
