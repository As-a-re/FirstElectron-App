import React, { useState, useEffect, useCallback } from 'react';

const initialRows = Array.from({ length: 50 }, (_, index) => ({
  id: index + 1,
  col1: `Row ${index + 1} Col 1`,
  col2: `Row ${index + 1} Col 2`,
  col3: `Row ${index + 1} Col 3`,
  col4: `Row ${index + 1} Col 4`,
  col5: `Row ${index + 1} Col 5`,
}));

function Table() {
  const [rows, setRows] = useState(() => {
    const savedRows = localStorage.getItem('tableRows');
    return savedRows ? JSON.parse(savedRows) : initialRows;
  });

  const handleAddRow = useCallback(() => {
    setRows((prevRows) => {
      const newRow = {
        id: prevRows.length + 1,
        col1: `New Row ${prevRows.length + 1} Col 1`,
        col2: `New Row ${prevRows.length + 1} Col 2`,
        col3: `New Row ${prevRows.length + 1} Col 3`,
        col4: `New Row ${prevRows.length + 1} Col 4`,
        col5: `New Row ${prevRows.length + 1} Col 5`,
      };
      return [...prevRows, newRow];
    });
  }, []);

  const handleDeleteRow = useCallback((id) => {
    setRows((prevRows) => prevRows.filter(row => row.id !== id));
  }, []);

  const handleChange = useCallback((id, column, value) => {
    setRows((prevRows) => prevRows.map(row =>
      row.id === id ? { ...row, [column]: value } : row
    ));
  }, []);

  const handleSave = useCallback(() => {
    localStorage.setItem('tableRows', JSON.stringify(rows));
  }, [rows]);

  useEffect(() => {
    handleSave();
  }, [rows, handleSave]);

  return (
    <div>
      <div>
        <button onClick={handleAddRow} style={{ backgroundColor: 'gold' }}>Add Member(s)</button>
        <button onClick={handleSave} style={{ backgroundColor: 'gold' }}>Update</button>
      </div>
      <table border="1" style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ backgroundColor: 'blue' }}>Name</th>
            <th style={{ backgroundColor: 'blue' }}>Residence</th>
            <th style={{ backgroundColor: 'blue' }}>Occupation</th>
            <th style={{ backgroundColor: 'blue' }}>Marital status</th>
            <th style={{ backgroundColor: 'blue' }}>Dependants</th>
            <th style={{ backgroundColor: 'white' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(row => (
            <tr key={row.id}>
              <td><input type="text" value={row.col1} onChange={(e) => handleChange(row.id, 'col1', e.target.value)} style={{ width: '100%' }} /></td>
              <td><input type="text" value={row.col2} onChange={(e) => handleChange(row.id, 'col2', e.target.value)} style={{ width: '100%' }} /></td>
              <td><input type="text" value={row.col3} onChange={(e) => handleChange(row.id, 'col3', e.target.value)} style={{ width: '100%' }} /></td>
              <td><input type="text" value={row.col4} onChange={(e) => handleChange(row.id, 'col4', e.target.value)} style={{ width: '100%' }} /></td>
              <td><input type="text" value={row.col5} onChange={(e) => handleChange(row.id, 'col5', e.target.value)} style={{ width: '100%' }} /></td>
              <td><button onClick={() => handleDeleteRow(row.id)} style={{ backgroundColor: 'gold', width: '100%' }}>Remove</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
