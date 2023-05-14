import React from 'react'
import s from './style.module.css'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux'
import { fetchCupon } from '../../store/slice/cuponSlice';


const SendCupon = () => {
    const cupon = useSelector(state => state.cupon.list);
    const dispatch = useDispatch();


    const sendNumber = (e) => {
        e.preventDefault()
        dispatch(fetchCupon(e.target.tel.value))
    }

    const notify = () => toast(`sale add!`);  

//     const resolveAfter3Sec = new Promise(resolve => setTimeout(resolve, 3000));
// toast.promise(
//     resolveAfter3Sec,
//     {
//       pending: 'Promise is pending',
//       success: 'Promise resolved 👌',
//       error: 'Promise rejected 🤯'
//     }
// )


  return (
    <>
        <section className={s.container}>
        <div className={s.sendCuponImg}></div>
        <div className={s.sendCuponForm}>
            <div className={s.cuponText}>
                <p className={s.cuponTitle}>5% off</p>
                <p className={s.cuponSubtitle}>on the firs order</p>
            </div>
            <form className={s.containerSubmitNumber} onSubmit={sendNumber} >
                <input type="tel" name="tel" id="tel" placeholder='+49'/>
                <button onClick={notify}>Get a discount</button>
            </form>
        </div>
    </section>
        <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
        ></ToastContainer>
    </>
    
  )
  }

export default SendCupon