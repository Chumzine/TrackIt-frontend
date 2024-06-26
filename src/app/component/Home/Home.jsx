import React from "react"
import style from "./home.module.css";
import logosvg from "../../../assets/icons/logo.svg.svg";
import { Link } from "react-router-dom";
import EmptyState from "../../../assets/icons/EmptyState.svg";
// import { useHistory } from "react-router-dom";
import CustomButton from "../../CustomButton/CustomButton";
import { ReactComponent as CGProfile } from "../../../assets/icons/profile-pic.svg";
import { IoIosArrowDown } from "react-icons/io";
import { ReactComponent as NotificationsOutline } from "../../../assets/icons/bell.svg";
import { FiPlus } from "react-icons/fi";
import { CustomSideNav } from "../../CustomSideNav/CustomSideNavigation";



export const HomePage = () => {
  // const history = useHistory();

  const handleButtonClick = () => {
   
    // history.push('/tracking'); 
  };
  return (
    <div className={style.containerDiv}>
      <div className={style.logoDiv}>
        <img src={logosvg} alt="Trackit logo" />
      </div>
      <div className={style.flexContainer}>
        <div className={style.navigation}>
          <CustomSideNav />
        </div>
        <div className={style.wrapper}>
          <div className={style.welcome}>
            <h4>👋Welcome Back, Munirah</h4>
            <span>Let's deliver your package today</span>
            <br />
            <br />
            <br />

            <div className={style.track}>
              <h4>Track your order</h4>
              <p>Enter your Tracking ID</p>
              <input placeholder="Order tracking ID" />
              <div>
                <CustomButton className={style.searchbutton}
                onClick={handleButtonClick}>
                  Search for package
                </CustomButton>
              </div>
            </div>
            <div className={style.activity}>
              <h5>Activity</h5>
              <img src={EmptyState} alt="No orders" />
              <span>No orders Placed</span>
            </div>
          </div>
          <div className={style.profile}>
            <div className={style.icon}>
              <div className={style.icona}>
                <NotificationsOutline />
              </div>
              <div className={style.iconb}>
                <CGProfile />
              </div>
              <h6>Munirah Subair</h6>
              <div className={style.iconc}>
                <IoIosArrowDown />{" "}
              </div>
            </div>
            <div className={style.formgroup}>
              <div className={style.form}>
                <h4>Pick up Details</h4>
                <br />
                <br />
                <label>Name</label>
                <input />
                <br />
                <label>Address</label>
                <input /> <br />
                <label>Phone number</label>
                <input />
              </div>

              <div className={style.formtwo}>
                <h4>Drop off Details</h4>
                <br />
                <br />
                <label>Name</label>
                <input />
                <br />
                <label>Address</label>
                <input />
                <br />
                <label>Phone number</label>
                <input />
                <br />
                <label>Package Type</label>
                <div className={style.input}>
                  <p>Select Package Type</p>
                  <IoIosArrowDown color="#292D32" />
                </div>

                <Link to="/signup">
                  <FiPlus /> Add another account
                </Link>
                <CustomButton className={style.dispatchbutton}>
                  Book dispatch
                </CustomButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
