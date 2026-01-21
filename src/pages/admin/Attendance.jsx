'use client';

import { useState } from 'react'
import { Search } from 'lucide-react'

export default function Attendance() {
  const [filters, setFilters] = useState({
    fromDate: '15/01/2026',
    toDate: '20/01/2026',
    employee: '',
    status: '',
  })

  const attendanceData = [
    { id: 1, date: '15-01-2026', name: 'John Doe', punchIn: '11:18:13', punchOut: '20:22:19', lunchDuration: '00:00:00', totalHours: '09:04:06', clockedTime: '00:00:00', paidTime: '00:00:00', breakTime: '00:00:00' },
    { id: 2, date: '16-01-2026', name: 'Jane Smith', punchIn: '11:53:56', punchOut: '20:55:21', lunchDuration: '00:00:00', totalHours: '09:01:25', clockedTime: '00:00:00', paidTime: '00:00:00', breakTime: '00:00:00' },
    { id: 3, date: '19-01-2026', name: 'Mike Johnson', punchIn: '11:03:57', punchOut: '20:08:08', lunchDuration: '00:00:00', totalHours: '09:04:11', clockedTime: '00:00:00', paidTime: '00:00:00', breakTime: '00:00:00' },
    { id: 4, date: '17-01-2026', name: 'Sarah Williams', punchIn: '10:30:00', punchOut: '19:30:00', lunchDuration: '00:00:00', totalHours: '09:00:00', clockedTime: '00:00:00', paidTime: '00:00:00', breakTime: '00:00:00' },
    { id: 5, date: '18-01-2026', name: 'Robert Brown', punchIn: '09:15:00', punchOut: '18:45:00', lunchDuration: '00:00:00', totalHours: '09:30:00', clockedTime: '00:00:00', paidTime: '00:00:00', breakTime: '00:00:00' },
  ]

  const handleFilterChange = (e) => {
    const { name, value } = e.target
    setFilters(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = () => {
    console.log('Filters applied:', filters)
  }

  const handleClear = () => {
    setFilters({
      fromDate: '',
      toDate: '',
      employee: '',
      status: '',
    })
  }

  return (
    <div>
      <div className="page-header">
        <h2>Attendance</h2>
        <p>View and manage employee attendance records.</p>
      </div>

      <div className="card" style={{ marginBottom: '30px' }}>
        <button className="btn btn-primary" style={{ width: '100%', marginBottom: '20px', justifyContent: 'center', fontSize: '16px', padding: '12px' }}>
          Proceed To Punch Out
        </button>
      </div>

      <div className="filter-section">
        <div className="filter-row">
          <div className="filter-group">
            <label>FROM DATE</label>
            <input
              type="text"
              name="fromDate"
              value={filters.fromDate}
              onChange={handleFilterChange}
              placeholder="DD/MM/YYYY"
            />
          </div>
          <div className="filter-group">
            <label>TO DATE</label>
            <input
              type="text"
              name="toDate"
              value={filters.toDate}
              onChange={handleFilterChange}
              placeholder="DD/MM/YYYY"
            />
          </div>
          <div className="filter-group" style={{ minWidth: 'auto' }}>
            <button className="btn btn-primary" onClick={handleSubmit}>
              Submit
            </button>
          </div>
          <div className="filter-group" style={{ minWidth: 'auto' }}>
            <button className="btn btn-secondary" onClick={handleClear}>
              Clear
            </button>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <h3>Attendance Records</h3>
        </div>
        <div className="table-container">
          <table className="table-responsive">
            <thead>
              <tr>
                <th>#</th>
                <th>DATE</th>
                <th>NAME</th>
                <th>PUNCH-IN</th>
                <th>PUNCH-OUT</th>
                <th>LUNCH DURATION</th>
                <th>TOTAL HOURS</th>
                <th>CLOCKED TIME</th>
                <th>PAID TIME</th>
                <th>BREAK TIME</th>
              </tr>
            </thead>
            <tbody>
              {attendanceData.map((record) => (
                <tr key={record.id}>
                  <td>{record.id}</td>
                  <td>{record.date}</td>
                  <td>{record.name}</td>
                  <td>{record.punchIn}</td>
                  <td>{record.punchOut}</td>
                  <td>{record.lunchDuration}</td>
                  <td>{record.totalHours}</td>
                  <td>{record.clockedTime}</td>
                  <td>{record.paidTime}</td>
                  <td>{record.breakTime}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
