'use client';

import { Check, X } from 'lucide-react'

export default function LeaveManagement() {
  const leaveData = [
    { id: 1, name: 'John Doe', from: '22-01-2026', to: '24-01-2026', type: 'Casual', reason: 'Personal', status: 'Pending' },
    { id: 2, name: 'Jane Smith', from: '20-01-2026', to: '21-01-2026', type: 'Sick', reason: 'Medical', status: 'Approved' },
    { id: 3, name: 'Mike Johnson', from: '25-01-2026', to: '29-01-2026', type: 'Vacation', reason: 'Holiday', status: 'Pending' },
    { id: 4, name: 'Sarah Williams', from: '18-01-2026', to: '19-01-2026', type: 'Sick', reason: 'Fever', status: 'Approved' },
    { id: 5, name: 'Robert Brown', from: '15-01-2026', to: '16-01-2026', type: 'Casual', reason: 'Family', status: 'Rejected' },
  ]

  const handleApprove = (id) => {
    console.log('Approved leave:', id)
  }

  const handleReject = (id) => {
    console.log('Rejected leave:', id)
  }

  return (
    <div>
      <div className="page-header">
        <h2>Leave Management</h2>
        <p>Review and manage employee leave requests.</p>
      </div>

      <div className="card">
        <div className="card-header">
          <h3>Leave Requests</h3>
        </div>
        <div className="table-container">
          <table className="table-responsive">
            <thead>
              <tr>
                <th>#</th>
                <th>NAME</th>
                <th>FROM</th>
                <th>TO</th>
                <th>TYPE</th>
                <th>REASON</th>
                <th>STATUS</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {leaveData.map((leave) => (
                <tr key={leave.id}>
                  <td>{leave.id}</td>
                  <td>{leave.name}</td>
                  <td>{leave.from}</td>
                  <td>{leave.to}</td>
                  <td>{leave.type}</td>
                  <td>{leave.reason}</td>
                  <td>
                    <span className={`status-badge status-${leave.status.toLowerCase()}`}>
                      {leave.status}
                    </span>
                  </td>
                  <td>
                    <div className="action-buttons">
                      {leave.status === 'Pending' && (
                        <>
                          <button 
                            className="action-btn action-btn-approve" 
                            title="Approve"
                            onClick={() => handleApprove(leave.id)}
                          >
                            <Check size={14} />
                          </button>
                          <button 
                            className="action-btn action-btn-reject" 
                            title="Reject"
                            onClick={() => handleReject(leave.id)}
                          >
                            <X size={14} />
                          </button>
                        </>
                      )}
                      {leave.status !== 'Pending' && (
                        <span style={{ fontSize: '12px', color: 'var(--text-light)' }}>-</span>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
