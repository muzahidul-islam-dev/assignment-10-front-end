import React, { useState } from 'react'
import Button from '../components/Button'
import { AlertCircle, Download } from 'lucide-react'

function MyBill() {
    const [bills, setBills] = useState([])
    const [showUpdateModal, setShowUpdateModal] = useState(false)
    const [editingBill, setEditingBill] = useState({})
    const [showDeleteModal, setShowDeleteModal] = useState(false)
    const [totalAmount, setTotalAmount] = useState(0)

    const handleDownloadReport = () => {

    }
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div>
            <h1 className="text-4xl font-bold">My Paid Bills</h1>
            <p className="mt-1">Manage and track your payment history</p>
          </div>

          <Button onClick={handleDownloadReport} className="gap-2 sm:self-auto bg-transparent">
            <Download className="w-4 h-4" />
            Download Report
          </Button>
        </div>

        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          <div className="p-6 bg-linear-to-br from-primary/10 to-transparent border-primary/20">
            <p className="text-sm mb-1">Total Bills</p>
            <p className="text-3xl font-bold">{bills.length}</p>
          </div>
          <div className="p-6 bg-linear-to-br from-accent/10 to-transparent border-accent/20">
            <p className="text-sm mb-1">Total Amount</p>
            <p className="text-3xl font-bold text-accent">${totalAmount.toFixed(2)}</p>
          </div>
        </div>

        
        <div className="overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-muted/50 border-b border-border">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold">Username</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold">Email</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold">Amount</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold">Address</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold">Phone</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold">Date</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {bills.map((bill) => (
                  <tr key={bill.id} className="hover:bg-muted/50 transition">
                    <td className="px-6 py-4 text-sm">{bill.username}</td>
                    <td className="px-6 py-4 text-sm">{bill.email}</td>
                    <td className="px-6 py-4 text-sm font-semibold">{bill.amount}</td>
                    <td className="px-6 py-4 text-sm">{bill.address}</td>
                    <td className="px-6 py-4 text-sm">{bill.phone}</td>
                    <td className="px-6 py-4 text-sm">{bill.date}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleEdit(bill)}
                          className="p-2 hover:bg-accent/20 rounded-lg transition text-accent"
                          title="Edit"
                        >
                          <Edit2 className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDelete(bill.id)}
                          className="p-2 hover:bg-destructive/20 rounded-lg transition text-destructive"
                          title="Delete"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        
        {bills.length === 0 && (
          <div className="text-center py-12">
            <AlertCircle className="w-12 h-12 mx-auto mb-4 opacity-50" />
            <p className="text-lg">No paid bills yet</p>
          </div>
        )}
      </div>

      
      {showUpdateModal && editingBill && (
        <UpdateBillModal bill={editingBill} onClose={() => setShowUpdateModal(false)} onUpdate={handleUpdate} />
      )}

      {showDeleteModal && <DeleteConfirmModal onConfirm={confirmDelete} onCancel={() => setShowDeleteModal(false)} />}
    </div>
    )
}

export default MyBill
