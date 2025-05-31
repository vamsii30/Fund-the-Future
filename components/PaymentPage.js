"use client"
import React, { useEffect, useState } from 'react'
import Script from 'next/script'
import { useSession } from 'next-auth/react'
import session from 'next-auth/react'
import { fetchuser, fetchpayments, initiate } from '@/actions/useractions'
import { useSearchParams } from 'next/navigation'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Bounce } from 'react-toastify';
import Razorpay from 'razorpay'



const PaymentPage = ({ username }) => {
    // GOOD: provide default values
    // const { data: session } = useSession()
    const [paymentform, setPaymentform] = useState({ name: '', message: '', amount: '' });
    const [currentUser, setcurrentUser] = useState({})
    const [payments, setPayments] = useState([])
    const SearchParams = useSearchParams()

    useEffect(() => {
        getData()
    }, [])

    useEffect(() => {
        if (SearchParams.get("paymentdone") == "true") {
            toast('Thanks for your donation', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
        }
    }, [])




    const handlechange = (e) => {
        setPaymentform({ ...paymentform, [e.target.name]: e.target.value })
    }

    const getData = async () => {
        let u = await fetchuser(username)
        setcurrentUser(u)
        let dbpayments = await fetchpayments(username)
        setPayments(dbpayments)
    }


    const pay = async (amount) => {
        //get orderid
        let a = await initiate(amount, username, paymentform)
        let orderId = a.id
        var options = {
            "key": currentUser.razorpayid, // Enter the Key ID generated from the Dashboard
            "amount": amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            "currency": "INR",
            "name": "FTF", //your business name
            "description": "Test Transaction",
            "image": "https://example.com/your_logo",
            "order_id": orderId, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            "callback_url": `${process.env.NEXT_PUBLIC_URL}/api/razorpay`,
            "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
                "name": "Gaurav Kumar", //your customer's name
                "email": "gaurav.kumar@example.com",
                "contact": "9000090000" //Provide the customer's phone number for better conversion rates 
            },
            "notes": {
                "address": "Razorpay Corporate Office"
            },
            "theme": {
                "color": "#3399cc"
            }
        }
        var rzp1 = new Razorpay(options);
        rzp1.open();
    }

    

    return (


        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light" />

            <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>
            <div className='cover w-full bg-amber-50 relative'>
                <img className='object-cover md:w-full md:size-96 w-full size-56' src={currentUser.coverpic} alt="" />
                <div className='absolute -bottom-12 right-[38%] md:right-[45%] border-2 border-white rounded-full size-24 md:size-32 overflow-hidden'>
                    <img className='rounded-full object-cover size-24 md:size-32' src={currentUser.profilepic} alt="" />
                </div>
            </div>
            <div className="info flex flex-col justify-center items-center my-14 gap-0.5">
                <div className='font-bold text-lg'>
                    @{username}
                </div>
                <div className='text-slate-400'>
                    Lets fund {username} for his work 
                </div>
                <div className='text-slate-400'>
                    {payments.length} Supportres. ₹{payments.reduce((acc, p) => acc + p.amount, 0)} funded
                </div>
                <div className="payment flex flex-col md:flex-row gap-3 w-[80%] mt-9">
                    <div className="supporters w-full md:w-1/2 bg-gray-800 p-10">
                        {/* show list of all supporters as leaderboard */}
                        <h2 className='text-xl font-bold my-5'>Supporters</h2>
                        <ul className='mx-5 text-lg'>
                            {payments.length === 0 && <div className='text-center text-gray-400'>No supporters yet</div>}
                            {payments.map((p, i) => {
                                return <li key={i} className='my-2 flex gap-2 items-center'>
                                    <img className='rounded-full border border-white bg-gray-200' width={26} src="avatar.gif" alt="user avatar" />
                                    {p.name} has donated ₹{p.amount} with a message &quot;{p.message}&quot;
                                </li>

                            })}
                        </ul>
                    </div>
                    <div className="makePayment w-full md:w-1/2  bg-gray-800 p-10">
                        <h2 className='text-xl font-bold my-5'>
                            Make a Payment
                        </h2>
                        <div className="flex flex-col gap-2">
                            <input onChange={handlechange} value={paymentform.name} name='name' type="text" className='w-full p-3 bg-gray-700 rounded-lg' placeholder='Name' />
                            <input onChange={handlechange} value={paymentform.message} name='message' type="text" className='w-full p-3 bg-gray-700 rounded-lg' placeholder='Message' />
                            <input onChange={handlechange} value={paymentform.amount} name='amount' type="text" className='w-full p-3 bg-gray-700 rounded-lg' placeholder='Amount' />
                            <button onClick={() => pay(Number.parseInt(paymentform.amount) * 100)} type="button" className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 disabled:bg-slate-600 disabled:via-slate-500 disabled:to-slate-600 disabled:from-slate-400 " disabled={paymentform.name.length < 3 || paymentform.message.length < 2 || paymentform.amount<1}>Support</button>
                        </div>
                        {/* or choose from these buttons */}
                        <div className="flex flex-row gap-2 mt-3">
                            <button className='bg-gray-700 p-3 rounded-lg' onClick={() => pay(1000)}>Pay ₹10</button>
                            <button className='bg-gray-700 p-3 rounded-lg' onClick={() => pay(2000)}>Pay ₹20</button>
                            <button className='bg-gray-700 p-3 rounded-lg' onClick={() => pay(3000)}>Pay ₹30</button>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}


export default PaymentPage