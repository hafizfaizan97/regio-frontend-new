import React, { useEffect } from "react";
import { Row, Col, CardBody, Card, Alert, Container, Input, Label, Form, FormFeedback } from "reactstrap";
import ParticlesAuth from '../../HOC/ParticlesAuth'


// Formik Validation
import * as Yup from "yup";
import { useFormik } from "formik";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// action
// import { registerUser, apiError, resetRegisterFlag } from "../../slices/thunks";

//redux
import { useSelector, useDispatch } from "react-redux";

import { Link, redirect, useNavigate } from "react-router-dom";

//import images 
import enLogoWhite from '../../assets/images_/logo_white_en.png'
import { registerSchema } from "../../utils/validations";
import { signUpRequest } from "../../store/authSlice";

const Register = () => {
    const history = useNavigate();
    const dispatch = useDispatch();
    // const { userRegisterData } = useSelector(state => state.auth)

    const formik = useFormik({
        // enableReinitialize : use this flag when initial values needs to be changed
        enableReinitialize: true,

        initialValues: {
            email: '',
            password: '',
            confirm_password: '',
            first_name: '',
            last_name: '',
            phone:'',
            zip:"",
            street:"",
            village:"",
            reference_text:"",
        },
        validationSchema: registerSchema,
        onSubmit: (values) => {
            onFormSubmit(values);
        }
    });
    const onFormSubmit = async (payload) => {
        await dispatch(signUpRequest(payload));
        return redirect('/dashboard')
    }

    // const selectLayoutState = (state) => state.Account;
    // const registerdatatype = createSelector(
    //     selectLayoutState,
    //     (account) => ({
    //         success: account.success,
    //         error: account.error
    //     })
    // );
    // Inside your component
    // const {
    //     error, success
    // } = useSelector(registerdatatype);

    // useEffect(() => {
    //     // dispatch(apiError(""));
    // }, [dispatch]);

//     useEffect(() => {
//         if (success) {
//             setTimeout(() => history("/login"), 3000);
//         }
// 
//         setTimeout(() => {
//             // dispatch(resetRegisterFlag());
//         }, 3000);
// 
//     }, [dispatch, success, error, history]);

    document.title = "SignUp";

    return (
        <React.Fragment>
            <ParticlesAuth>
                <div className="auth-page-content mt-lg-5">
                    <Container>
                        <Row>
                            <Col lg={12}>
                                <div className="text-center mt-sm-5 mb-4 text-white-50">
                                    <div>
                                        <Link to="/" className="d-inline-block auth-logo">
                                            <img src={enLogoWhite} alt="" height="60" width="250"/>
                                        </Link>
                                    </div>
                                    {/*<p className="mt-3 fs-15 fw-medium">Premium Admin & Dashboard Template</p>*/}
                                </div>
                            </Col>
                        </Row>

                        <Row className="justify-content-center">
                            <Col md={8} lg={8} xl={8}>
                                <Card className="mt-4">

                                    <CardBody className="p-4">
                                        <div className="text-center mt-2">
                                            <h5 className="text-primary">Create New Account</h5>
                                            {/*<p className="text1-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod*/}
                                            {/*    tempor incididu </p>*/}
                                        </div>
                                        <div className="p-2 mt-4">
                                            <Form
                                                onSubmit={formik.handleSubmit}
                                                className="needs-validation row" action="#">

                                                {/* {success && success ? (
                                                    <>
                                                        {toast("Your Redirect To Login Page...", { position: "top-right", hideProgressBar: false, className: 'bg-success text-white', progress: undefined, toastId: "" })}
                                                        <ToastContainer autoClose={2000} limit={1} />
                                                        <Alert color="success">
                                                            Register User Successfully and Your Redirect To Login Page...
                                                        </Alert>
                                                    </>
                                                ) : null} */}

                                                {/* {error && error ? (
                                                    <Alert color="danger"><div>
                                                        Email has been Register Before, Please Use Another Email Address... </div></Alert>
                                                ) : null} */}

                                                <div className="mb-2 col-4">
                                                    <Label htmlFor="confirmPassword" className="form-label">First
                                                        Name <span className="text-danger">*</span></Label>
                                                    <Input
                                                        name="confirm_password"
                                                        type="password"
                                                        placeholder="Confirm Password"
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                        value={formik.values.first_name || ""}
                                                        // invalid={
                                                        //     validation.touched.confirm_password && validation.errors.confirm_password ? true : false
                                                        // }
                                                    />
                                                    {/* {validation.touched.confirm_password && validation.errors.confirm_password ? (
                                                        <FormFeedback type="invalid"><div>{validation.errors.confirm_password}</div></FormFeedback>
                                                    ) : null} */}

                                                </div>

                                                <div className="mb-2 col-4">
                                                    <Label htmlFor="confirmPassword" className="form-label">Last
                                                        Name <span className="text-danger">*</span></Label>
                                                    <Input
                                                        name="confirm_password"
                                                        type="password"
                                                        placeholder="Confirm Password"
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                        value={formik.values.last_name || ""}
                                                        // invalid={
                                                        //     validation.touched.confirm_password && validation.errors.confirm_password ? true : false
                                                        // }
                                                    />
                                                    {/* {validation.touched.confirm_password && validation.errors.confirm_password ? (
                                                        <FormFeedback type="invalid"><div>{validation.errors.confirm_password}</div></FormFeedback>
                                                    ) : null} */}

                                                </div>

                                                <div className="mb-2 col-4">
                                                    <Label htmlFor="confirmPassword" className="form-label">Phone
                                                        # <span className="text-danger">*</span></Label>
                                                    <Input
                                                        name="confirm_password"
                                                        type="password"
                                                        placeholder="Confirm Password"
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                        value={formik.values.phone || ""}
                                                        // invalid={
                                                        //     validation.touched.confirm_password && validation.errors.confirm_password ? true : false
                                                        // }
                                                    />
                                                    {/* {validation.touched.confirm_password && validation.errors.confirm_password ? (
                                                        <FormFeedback type="invalid"><div>{validation.errors.confirm_password}</div></FormFeedback>
                                                    ) : null} */}

                                                </div>


                                                <div className="mb-3 col-4">
                                                    <Label htmlFor="street" className="form-label">Street <span
                                                        className="text-danger">*</span></Label>
                                                    <Input
                                                        name="first_name"
                                                        type="text"
                                                        placeholder="Enter street"
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                        value={formik.values.street || ""}
                                                        // invalid={
                                                        //     validation.touched.first_name && validation.errors.first_name ? true : false
                                                        // }
                                                    />
                                                    {/* {validation.touched.first_name && validation.errors.first_name ? (
                                                        <FormFeedback type="invalid"><div>{validation.errors.first_name}</div></FormFeedback>
                                                    ) : null} */}

                                                </div>

                                                <div className="mb-2 col-4">
                                                    <Label htmlFor="confirmPassword" className="form-label">Zip
                                                        Code <span className="text-danger">*</span></Label>
                                                    <Input
                                                        name="confirm_password"
                                                        type="password"
                                                        placeholder="Zip Code"
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                        value={formik.values.zip || ""}
                                                        // invalid={
                                                        //     validation.touched.confirm_password && validation.errors.confirm_password ? true : false
                                                        // }
                                                    />
                                                    {/* {validation.touched.confirm_password && validation.errors.confirm_password ? (
                                                        <FormFeedback type="invalid"><div>{validation.errors.confirm_password}</div></FormFeedback>
                                                    ) : null} */}

                                                </div>


                                                <div className="mb-2 col-4">
                                                    <Label htmlFor="confirmPassword"
                                                           className="form-label">Village <span
                                                        className="text-danger">*</span></Label>
                                                    <Input
                                                        name="Village"
                                                        type="text"
                                                        placeholder="Village"
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                        value={formik.values.village || ""}
                                                        // invalid={
                                                        //     validation.touched.confirm_password && validation.errors.confirm_password ? true : false
                                                        // }
                                                    />
                                                    {/* {validation.touched.confirm_password && validation.errors.confirm_password ? (
                                                        <FormFeedback type="invalid"><div>{validation.errors.confirm_password}</div></FormFeedback>
                                                    ) : null} */}

                                                </div>


                                                <div className="mb-3 col-4">
                                                    <Label htmlFor="useremail" className="form-label">Email <span
                                                        className="text-danger">*</span></Label>
                                                    <Input
                                                        id="email"
                                                        name="email"
                                                        className="form-control"
                                                        placeholder="Enter email address"
                                                        type="email"
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                        value={formik.values.email || ""}
                                                        // invalid={
                                                        //     validation.touched.email && validation.errors.email ? true : false
                                                        // }
                                                    />
                                                    {/* {validation.touched.email && validation.errors.email ? (
                                                        <FormFeedback type="invalid"><div>{validation.errors.email}</div></FormFeedback>
                                                    ) : null} */}

                                                </div>


                                                <div className="mb-3 col-4">
                                                    <Label htmlFor="userpassword" className="form-label">Password <span
                                                        className="text-danger">*</span></Label>
                                                    <Input
                                                        name="password"
                                                        type="password"
                                                        placeholder="Enter Password"
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                        value={formik.values.password || ""}
                                                        // invalid={
                                                        //     validation.touched.password && validation.errors.password ? true : false
                                                        // }
                                                    />
                                                    {/* {validation.touched.password && validation.errors.password ? (
                                                        <FormFeedback type="invalid"><div>{validation.errors.password}</div></FormFeedback>
                                                    ) : null} */}

                                                </div>

                                                <div className="mb-2 col-4">
                                                    <Label htmlFor="confirmPassword" className="form-label">Confirm
                                                        Password <span className="text-danger">*</span></Label>
                                                    <Input
                                                        name="confirm_password"
                                                        type="password"
                                                        placeholder="Confirm Password"
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                        value={formik.values.confirm_password || ""}
                                                        // invalid={
                                                        //     validation.touched.confirm_password && validation.errors.confirm_password ? true : false
                                                        // }
                                                    />
                                                    {/* {validation.touched.confirm_password && validation.errors.confirm_password ? (
                                                        <FormFeedback type="invalid"><div>{validation.errors.confirm_password}</div></FormFeedback>
                                                    ) : null} */}

                                                </div>


                                                <div className="mb-2 col-12">
                                                    <Label htmlFor="confirmPassword"
                                                           className="form-label">Why you wanted to join <span
                                                        className="text-danger">*</span></Label>
                                                    <Input
                                                        name="reference_text"
                                                        type="textarea"
                                                        style={{ height: "100px", width: "100%" }}                                                        placeholder="Address"
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                        value={formik.values.reference_text || ""}
                                                        // invalid={
                                                        //     validation.touched.confirm_password && validation.errors.confirm_password ? true : false
                                                        // }
                                                    />
                                                    {/* {validation.touched.confirm_password && validation.errors.confirm_password ? (
                                                        <FormFeedback type="invalid"><div>{validation.errors.confirm_password}</div></FormFeedback>
                                                    ) : null} */}

                                                </div>


                                                <div className="mb-4">
                                                    <p className="mb-0 fs-12 text-muted fst-italic">By registering you
                                                        agree to the Velzon
                                                        <Link to="#"
                                                              className="text-primary text-decoration-underline fst-normal fw-medium">Terms
                                                            of Use</Link></p>
                                                </div>

                                                <div className="mt-4">
                                                    <button className="btn btn-success w-100" type="submit">Sign Up
                                                    </button>
                                                </div>

                                                <div className="mt-4 text-center">
                                                    <div className="signin-other-title">
                                                        <h5 className="fs-13 mb-4 title text-muted">Create account
                                                            with</h5>
                                                    </div>

                                                    {/*<div>*/}
                                                    {/*    <button type="button"*/}
                                                    {/*            className="btn btn-primary btn-icon waves-effect waves-light">*/}
                                                    {/*        <i className="ri-facebook-fill fs-16"></i></button>*/}
                                                    {/*    {" "}*/}
                                                    {/*    <button type="button"*/}
                                                    {/*            className="btn btn-danger btn-icon waves-effect waves-light">*/}
                                                    {/*        <i className="ri-google-fill fs-16"></i></button>*/}
                                                    {/*    {" "}*/}
                                                    {/*    <button type="button"*/}
                                                    {/*            className="btn btn-dark btn-icon waves-effect waves-light">*/}
                                                    {/*        <i className="ri-github-fill fs-16"></i></button>*/}
                                                    {/*    {" "}*/}
                                                    {/*    <button type="button"*/}
                                                    {/*            className="btn btn-info btn-icon waves-effect waves-light">*/}
                                                    {/*        <i className="ri-twitter-fill fs-16"></i></button>*/}
                                                    {/*</div>*/}
                                                </div>
                                            </Form>
                                        </div>
                                    </CardBody>
                                </Card>
                                <div className="mt-4 text-center">
                                    <p className="mb-0">Already have an account ? <Link to="/login"
                                                                                        className="fw-semibold text-primary text-decoration-underline"> Signin </Link>
                                    </p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </ParticlesAuth>
        </React.Fragment>
    );
};

export default Register;
