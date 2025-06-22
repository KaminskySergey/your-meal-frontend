import { useFormik } from "formik";
import * as Yup from "yup";
import { useCart } from "../../../redux/cart/selectors";
import { useAppDispatch } from "../../../hooks/redux";
import { Button } from "../../ui/button";
import { fetchOrder } from "../../../redux/order/operations";
import { useOrderError, useOrderLoading, useOrderSuccess } from "../../../redux/order/selectors";
import { useEffect } from "react";
import { clearCart } from "../../../redux/cart/cart-slice";
import { toast } from "react-toastify";
import { resetOrderState } from "../../../redux/order/order-slice";

export const OrderModal = ({onClose}: {onClose: () => void}) => {
    const dispatch = useAppDispatch();
    const cart = useCart();
    const isLoading = useOrderLoading();
    const isError = useOrderError();
    const isSuccess = useOrderSuccess();
    console.log(isSuccess, 'gbgbgbgb')
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    const formik = useFormik({
        initialValues: {
            name: "",
            phone: "",
            address: "",
        },
        validationSchema: Yup.object({
            name: Yup.string().required("Name is required"),
            phone: Yup.string().required("Phone number is required"),
            address: Yup.string().required("Address is required"),
        }),
        onSubmit: async (values) => {
            const payload = {
                ...values,
                items: cart.map((item) => ({
                    productId: item.id,
                    quantity: item.quantity,
                })),
            };

            await dispatch(fetchOrder(payload));
        },
    });
   


    useEffect(() => {
        if (isSuccess) {
            toast.success("Order successfully placed!");
            dispatch(clearCart());
            formik.resetForm();
            console.log(isSuccess, '1111111111')
            onClose()
            dispatch(resetOrderState())
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isSuccess, dispatch]);


    useEffect(() => {
        if (isError) {
            toast.error("Error placing order. Please try again later.");
        }
    }, [isError]);

    return (
        <div className="flex justify-center items-center">
            <div className="bg-white w-full max-w-md rounded-xl p-6 shadow-xl relative">
                <h2 className="text-2xl font-bold mb-4 text-center">Place your order</h2>

                <form onSubmit={formik.handleSubmit} className="flex flex-col gap-4">
                    <input
                        type="text"
                        name="name"
                        placeholder="Your name"
                        className="border rounded-lg px-4 py-2 w-full"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {formik.touched.name && formik.errors.name && (
                        <p className="text-red-500 text-sm">{formik.errors.name}</p>
                    )}

                    <input
                        type="tel"
                        name="phone"
                        placeholder="Phone number"
                        className="border rounded-lg px-4 py-2 w-full"
                        value={formik.values.phone}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {formik.touched.phone && formik.errors.phone && (
                        <p className="text-red-500 text-sm">{formik.errors.phone}</p>
                    )}

                    <input
                        type="text"
                        name="address"
                        placeholder="Delivery address"
                        className="border rounded-lg px-4 py-2 w-full"
                        value={formik.values.address}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {formik.touched.address && formik.errors.address && (
                        <p className="text-red-500 text-sm">{formik.errors.address}</p>
                    )}

                    <div className="mt-2 text-right">
                        <p className="text-gray-800 text-lg font-medium">
                            Order Total:{" "}
                            <span className="text-green-600 font-semibold">
                                {total.toFixed(2)} €
                            </span>
                        </p>
                    </div>

                    <div className="mt-4 flex justify-end">
                        <Button submit orange>
                            {isLoading ? "Submitting..." : "Place order"}
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};