import React, { useState } from 'react';

const MedicalRecords = () => {
  const [records, setRecords] = useState([
    { id: 1, doctor: 'Dr. Taj Khan', date: '2024-05-15', time: '10:30', prescription: 'Blood pressure medication, 2x daily' },
    { id: 2, doctor: 'Dr. Fatima Zahid', date: '2024-04-20', time: '09:00', prescription: 'Apply ointment for skin rash' },
    { id: 3, doctor: 'Dr. Muhammad Rehman', date: '2024-06-01', time: '14:15', prescription: 'MRI scan recommended, follow-up in 2 weeks' },
  ]);

  const [sortConfig, setSortConfig] = useState({ column: null, direction: 'asc' });

  const sortedRecords = React.useMemo(() => {
    let sortableRecords = [...records];
    if (sortConfig.column) {
      sortableRecords.sort((a, b) => {
        let valA = a[sortConfig.column];
        let valB = b[sortConfig.column];

        if (sortConfig.column === 'date') {
          valA = new Date(valA);
          valB = new Date(valB);
        }
        if (sortConfig.column === 'time') {
          valA = valA.split(':').map(Number);
          valB = valB.split(':').map(Number);
          valA = valA[0] * 60 + valA[1];
          valB = valB[0] * 60 + valB[1];
        }

        if (valA < valB) return sortConfig.direction === 'asc' ? -1 : 1;
        if (valA > valB) return sortConfig.direction === 'asc' ? 1 : -1;
        return 0;
      });
    }
    return sortableRecords;
  }, [records, sortConfig]);

  const handleSort = (column) => {
    if (sortConfig.column === column) {
      setSortConfig({
        column,
        direction: sortConfig.direction === 'asc' ? 'desc' : 'asc',
      });
    } else {
      setSortConfig({ column, direction: 'asc' });
    }
  };

  const getSortArrow = (column) => {
    if (sortConfig.column !== column) return '';
    return sortConfig.direction === 'asc' ? ' ▲' : ' ▼';
  };

  return (
    <div className="container py-4">
      <h2>Medical Records</h2>
      <p>Upload or view your medical records here.</p>
      <input type="file" accept=".pdf,.jpg,.png" className="mb-4" />

      <table className="table table-striped">
        <thead>
          <tr>
            <th onClick={() => handleSort('doctor')} style={{ cursor: 'pointer' }}>
              Doctor Name{getSortArrow('doctor')}
            </th>
            <th onClick={() => handleSort('date')} style={{ cursor: 'pointer' }}>
              Prescription Date{getSortArrow('date')}
            </th>
            <th onClick={() => handleSort('time')} style={{ cursor: 'pointer' }}>
              Time{getSortArrow('time')}
            </th>
            <th>
              Prescription Details
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedRecords.length ? (
            sortedRecords.map(({ id, doctor, date, time, prescription }) => (
              <tr key={id}>
                <td>{doctor}</td>
                <td>{date}</td>
                <td>{time}</td>
                <td>{prescription}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="text-center">
                No medical records found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default MedicalRecords;
