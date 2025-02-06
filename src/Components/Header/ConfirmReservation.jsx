import styled from "styled-components";
import Model from "react-modal";
import {useContext, useEffect } from "react";
import {SigninContext} from "../../Context/SignInContext";
import {Link} from "react-router-dom";
const Style = styled.div`
  width: 464px;
  height: 356px;
  background: #ffffff;
  box-shadow: -1px 4px 24px 1px rgba(0, 0, 0, 0.4);
  border-radius: 4px;
  margin: auto;
  h1 {
    font-weight: 600;
    font-size: 24px;
    line-height: 30px;
    color: #333333;
    text-align: center;
    padding-top: 38px;
  }
  .second_div {
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1);
    display: flex;
    width: 360px;
    height: 120px;
    margin: auto;
    margin-top: 28px;
    .inner_div {
      height: 120px;
      width: 222px;
      border-radius: 0px;
      padding: 12px;
      .one {
        font-size: 16px;
        line-height: 22px;
        color: #333333;
      }
      .two {
        font-size: 14px;
        line-height: 20px;
        margin-top: 4px;
        color: #797979;
      }
      .three {
        font-size: 14px;
        margin-top: 4px;
        line-height: 20px;
        color: #333333;
      }
    }
    .img_div {
      width: 138px;
      height: 120px;
      img {
        width: 138px;
        height: 120px;
      }
    }
  }
  .btn-div {
    height: 46px;
    width: 361px;
    border-radius: 4px;
    border: none;
    padding: 12px, 32px, 12px, 32px;
    margin: auto;
    margin-top: 36px;
    button {
      width: 100%;
      height: 100%;
      border: none;
      background: #ff645a;
      border-radius: 4px;
      font-size: 16px;
      line-height: 22px;
      color: #ffffff;
      cursor: pointer;
    }
    button:hover{
      background: #DC4F4A !important;
    }
  }
  .cross_btn {
    position: relative;
    top: 20px;
    left: 420px;
    background: white;
    width:24px;
    height:24px;
    border-radius:20px;
    display: flex;
    justify-content:center;
    align-items: center;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.03);
    cursor: pointer;
  }
`;
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    padding: "0px",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
  overlay: {
    backgroundColor: "rgba(5, 5, 5, 0.3)",
  },
};
Model.setAppElement('#root');

export const ConfirmReservation = ({ handleReservation, name, city, guest, bookDate, bookTime }) => {
const {handleConfirmation,confirm} = useContext(SigninContext)


  let imgLink = JSON.parse(localStorage.getItem('dineout__miniImg'));

  return (
    <>
          <Model style={customStyles} isOpen={confirm}>
    <Style>
      <div className="cross_btn" onClick={() =>handleConfirmation()}>
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.667 2.27337L9.72698 1.33337L6.00032 5.06004L2.27365 1.33337L1.33365 2.27337L5.06032 6.00004L1.33365 9.72671L2.27365 10.6667L6.00032 6.94004L9.72698 10.6667L10.667 9.72671L6.94032 6.00004L10.667 2.27337Z"
            fill="#DCDCDC"
            stroke="#DCDCDC"
          />
        </svg>
      </div>
      <h1>Confirm Reservation?</h1>
      <div className="second_div">
        <div className="img_div">
          <img
            src={imgLink}
            alt="miniImg"
          />
        </div>
        <div className="inner_div">
          <p className="one">{name}</p>
          <p className="two">{city}</p>
          <p className="three">{guest} Guests {bookDate}, {bookTime}</p>
        </div>
      </div>
      <div className="btn-div">
        <Link to="/confirm"><button onClick={handleReservation} >CONFIRM RESERVATION</button></Link>
      </div>
    </Style>
    </Model>
 </> );
};
