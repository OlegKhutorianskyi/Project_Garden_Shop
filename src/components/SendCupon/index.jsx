import React, { useState } from "react";
import s from "./style.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { fetchCupon } from "../../store/slice/cuponSlice";

const SendCupon = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  const [phonError, setPhonError] = useState('')
  const sendNumber = (e) => {
    e.preventDefault();
    dispatch(fetchCupon(input));
  };
  const checkChange = ({ target }) => {
    const value = +target.value;
    setInput(value);
    const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    if (!re.test(String(value).toLowerCase())) {
      setPhonError('no correct phone number')
    } else {
      setPhonError('')
    }
  };
  const notify = () => toast(`sale add!`);
  return (
    <>
      <section className={s.container}>
        <div className={s.sendCuponImg}></div>
        <div className={s.sendCuponForm}>
          <div className={s.cuponText}>
            <p className={s.cuponTitle}>5% off</p>
            <p className={s.cuponSubtitle}>on the firs order</p>
          </div>
          <form className={s.containerSubmitNumber} onSubmit={sendNumber}>
            <div className={s.validText}>{phonError}</div>
            <input
              type="number"
              name="tel"
              id="tel"
              placeholder="+49"
              onChange={checkChange}
            />
            <button disabled={!input} onClick={notify}>
              Get a discount
            </button>
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
      />
    </>
  );
};

export default SendCupon;
