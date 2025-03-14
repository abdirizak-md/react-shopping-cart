import { useEffect, useState } from "react";
import toast from "react-hot-toast";
// import useShop from "../ShopContext";
// import axios from "axios";

const Payment = () => {
    const initialPayment = {
        zaad: false,
        evc: false,
        sahal: false
    }

    const [paymentMethod, setPaymentMethod] = useState(initialPayment);
    const [updated] = useState(false);

    // const { total } = useShop();

    useEffect(() => { }, [updated]);


    const [phone, setPhone] = useState("");
    const [loading] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!phone) return toast.error("Phone is empty!");
    }

    // const processPayment = async () => {
    //     const body = {
    //         schemaVersion: "1.0",
    //         requestId: "10111331033",
    //         timestamp: "1590587436057686",
    //         chennalName: "WEB",
    //         serviceName: "API_PURCHSE",
    //         serviceParams: {
    //             merchantUid: process.env.REACT_APP_MERCHANT_U_ID,
    //             apiUserId: process.env.REACT_APP_MERCHANT_API_USER_ID,
    //             apiKey: process.env.REACT_APP_MERCHANT_PAI_KEY,
    //             paymentMethod: "mwallet_account",
    //             payerInfo: {
    //                 accountNo: phone
    //             },
    //             transectionInfo: {
    //                 referenceID: "1234",
    //                 invoiceId: "7896504",
    //                 amount: total,
    //                 currency: "USD",
    //                 description: "React Shopping Cart"
    //             }
    //         },
    //     };
    //     setLoading(true)
    //     const { data } = await axios.post("https://api.waafi.com/asm", body);
    //     console.log(data);

    //     setLoading(false)
    // };




    return (
        <div>
            <h2>Pay With</h2>
            <div className="payment-cards">

                <div className={`payment-card ${paymentMethod.zaad && "selected"}`}
                    onClick={() => setPaymentMethod({ ...initialPayment, zaad: true })}>
                    <h3>Zaad Service</h3>
                </div>
                <div className={`payment-card ${paymentMethod.evc && "selected"}`}
                    onClick={() => setPaymentMethod({ ...initialPayment, EVC: true })}>
                    <h3>EVC Plus</h3>
                </div>
                <div className={`payment-card ${paymentMethod.sahal && "selected"}`}
                    onClick={() => setPaymentMethod({ ...initialPayment, sahal: true })}>
                    <h3>Sahal</h3>
                </div>

                <form onSubmit={handleSubmit}>
                    <input type="text" className="form-control" placeholder="2519..." onChange={(event) =>
                        setPhone(event.target.value)} />
                    <button className="btn-proceed">{loading ? "Loading..." : "Proceed"}</button>
                </form>
            </div>
        </div>
    );
}


export default Payment;