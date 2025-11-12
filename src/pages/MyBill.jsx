import React, { use, useEffect, useState } from 'react'
import Button from '../components/Button'
import { AlertCircle, Download, Edit2, Trash2 } from 'lucide-react'
import Loading from '../components/Loading'
import axios from 'axios'
import { UserProvider } from '../context/AuthContext'

function MyBill() {
  const [bills, setBills] = useState([])
  const [showUpdateModal, setShowUpdateModal] = useState(false)
  const [editingBill, setEditingBill] = useState({})
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [totalAmount, setTotalAmount] = useState(0)
  const [loading, setLoading] = useState(true);
  const { user, loading: userLoading } = use(UserProvider);

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    billId: '',
    amount: 0,
    username: '',
    address: '',
    phone: '',
    date: new Date().toLocaleDateString(),
    note: ''
  })
  useEffect(() => {
    if (user && !loading) {
      axios.get(`/bill/my-bills/${user?.email}`).then(response => {
        setBills(response?.data?.data)
      })
    }
    setLoading(false)
  }, [user, loading])

  const handleDownloadReport = () => {

  }

  const handleEdit = (bill) => {
    document.getElementById('my_modal_2').showModal()
    console.log(user.email)
    setFormData({
      address: bill?.address,
      phone: bill?.phone,
      amount: bill?.amount,
      date: bill?.date
    })
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true)
    if (formData?.phone == '' && formData?.address == '' && formData?.note == '') {
      return toast.error('All field is required.')
    }
    axios.post(`/bill/my-bills/${user?.email}`, formData).then(response => {
      toast(response?.data?.message)
      document.getElementById('my_modal_2').close()
      setFormData({
        address: '',
        phone: '',
        note: '',
        amount: ''
      })
      setIsSubmitting(false)
    }).catch(error => {
      console.log(error)

      setIsSubmitting(false)
    })
  }


  const onClose = () => {
    document.getElementById('my_modal_2').close()

    setFormData({
      ...formData,
      address: '',
      phone: '',
      note: ''
    })
  }



  if (loading) return <Loading />
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
          <div className="p-6 bg-blue-800 rounded">
            <p className="text-sm mb-1 text-white">Total Bills</p>
            <p className="text-3xl font-bold text-white">{bills.length}</p>
          </div>
          <div className="p-6 bg-red-500 rounded">
            <p className="text-sm mb-1 text-white">Total Amount</p>
            <p className="text-3xl font-bold text-white">${Number(1).toFixed(2)}</p>
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
                          className="p-2 rounded hover:bg-blue-800 hover:text-white cursor-pointer"
                          title="Edit"
                        >
                          <Edit2 className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDelete(bill.id)}
                          className="p-2 rounded hover:bg-red-500 hover:text-white cursor-pointer"
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

      <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
          <form onSubmit={handleSubmit} className="p-6 space-y-4">

            <div className="">
              <div className='my-2'>
                <label className="text-sm font-medium block mb-1">Amount</label>
                <input
                  type="text"
                  name="amount"
                  placeholder="Enter your amount"
                  value={formData.amount}
                  onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                  required
                  className='border dark:border-gray-700 border-gray-200 focus:border-gray-500 dark:text-white w-full py-2 px-3 rounded my outline-none'
                />
              </div>
              <div className='my-2'>
                <label className="text-sm font-medium block mb-1">Date</label>
                <input
                  type="text"
                  name="date"
                  placeholder="Enter your amount"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  required
                  className='border dark:border-gray-700 border-gray-200 focus:border-gray-500 dark:text-white w-full py-2 px-3 rounded my outline-none'
                />
              </div>
              <div className='my-2'>
                <label className="text-sm font-medium block mb-1">Address</label>
                <input
                  type="text"
                  name="address"
                  placeholder="Enter your address"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className='border dark:border-gray-700 border-gray-200 focus:border-gray-500 dark:text-white w-full py-2 px-3 rounded my outline-none'
                  required
                />
              </div>

              <div className='my-2'>
                <label className="text-sm font-medium block mb-1">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className='border dark:border-gray-700 border-gray-200 focus:border-gray-500 dark:text-white w-full py-2 px-3 rounded my outline-none'
                  required
                />
              </div>
            </div>

            <div className="flex gap-3 pt-4">
              <button
                type="button"
                onClick={onClose}
                disabled={isSubmitting}
                className="btn btn-sm border border-transparent hover:text-red-500 bg-red-500 py-5 px-7 rounded text-white hover:bg-transparent hover:border-red-500"
              >
                Cancel
              </button>
              <button className="btn btn-sm border border-transparent hover:text-blue-800 bg-blue-800 py-5 px-7 rounded text-white dark:hover:text-white hover:bg-transparent hover:border-blue-800">
                {isSubmitting ? "Processing..." : "Update Now"}
              </button>
            </div>
          </form>
        </div>

      </dialog>

    </div>
  )
}

export default MyBill
