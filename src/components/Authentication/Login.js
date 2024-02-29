import React, { useEffect, useState } from 'react';
import { Card, CardBody, Col, Container, Input, Label, Row, Button, Form, FormFeedback, Alert, Spinner } from 'reactstrap';
// import ParticlesAuth from "../AuthenticationInner/ParticlesAuth";
import { useSelector, useDispatch } from "react-redux";
import { Link, redirect } from "react-router-dom";
import * as Yup from "yup";
import { useFormik } from "formik";

// import logoLight from "../../assets/images/logo-light.png";
import enLogoWhite from '../../assets/images_/logo_white_en.png'
// import { createSelector } from 'reselect';
import ParticlesAuth from '../../HOC/ParticlesAuth'
import withRouter from '../../components/common/withRouter';
import { signInSchema } from '../../utils/validations';
import { isEmpty } from '../../utils/helpers';
import { loginRequest } from '../../store/authSlice';
//import images
function LoginComponent() {
  const dispatch = useDispatch();
  document.title = "SignIn";
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

    // const { userProfile } = useSelector(state => state.auth)

    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        validationSchema: signInSchema,
        onSubmit: (values) => {
            onFormSubmit(values)
         }
    })
    const onFormSubmit = async (payload) => {
        await dispatch(loginRequest(payload))
        return redirect('/dashboard')
    }
  return (
    <>
              <ParticlesAuth>
                <div className="auth-page-content mt-lg-5">
                    <Container>
                        <Row>
                            <Col lg={12}>
                                <div className="text-center mt-sm-5 mb-4 text-white-50">
                                    <div>
                                        <Link to="/" className="d-inline-block auth-logo">
                                            <img src={enLogoWhite} alt="" height="60" width="300" />
                                        </Link>
                                    </div>
                                    {/*<p className="mt-3 fs-15 fw-medium">Premium Admin & Dashboard Template</p>*/}
                                </div>
                            </Col>
                        </Row>

                        <Row className="justify-content-center">
                            <Col md={8} lg={6} xl={5}>
                                <Card className="mt-4">
                                    <CardBody className="p-4" >
                                        <div className="text-center mt-2">
                                            <h5 className="text-primary">Welcome Back !</h5>
                                            <p className="text-muted">Sign in to continue to Reginal Concept.</p>
                                        </div>
                                        {/* {error && error ? (<Alert color="danger"> {error} </Alert>) : null} */}
                                        <div className="p-2 mt-4">
                                            <Form
                                                onSubmit={
                                                    formik.handleSubmit
                                                    // validation.handleSubmit();
                                                    // return false;
                                                // }
                                              }
                                                action="#">

                                                <div className="mb-3">
                                                    <Label htmlFor="email" className="form-label">Email</Label>
                                                    <Input
                                                        name="email"
                                                        className="form-control"
                                                        placeholder="Enter email"
                                                        type="email"
                                                        onChange={formik.handleChange}
                                                        value={formik.values.email || ""}
                                                        // onBlur={validation.handleBlur}
                                                        // invalid={
                                                        //     validation.touched.email && validation.errors.email ? true : false
                                                        // }
                                                    />
                                                    {/* {validation.touched.email && validation.errors.email ? (
                                                        <FormFeedback type="invalid">{validation.errors.email}</FormFeedback>
                                                    ) : null} */}
                                                </div>

                                                <div className="mb-3">
                                                    <div className="float-end">
                                                        <Link to="/forgot-password" className="text-muted">Forgot password?</Link>
                                                    </div>
                                                    <Label className="form-label" htmlFor="password-input">Password</Label>
                                                    <div className="position-relative auth-pass-inputgroup mb-3">
                                                        <Input
                                                            name="password"
                                                        //   type={passwordShow ? "text" : "password"}
                                                          type={'password'}
                                                          className="form-control pe-5"
                                                          placeholder="Enter Password"
                                                          onChange={formik.handleChange}
                                                          value={formik.values.password || ""}
                                                          // onBlur={validation.handleBlur}
                                                          // invalid={
                                                          //     validation.touched.password && validation.errors.password ? true : false
                                                          // }
                                                        />
                                                        {/* {validation.touched.password && validation.errors.password ? (
                                                            <FormFeedback type="invalid">{validation.errors.password}</FormFeedback>
                                                        ) : null} */}
                                                        <button className="btn btn-link position-absolute end-0 top-0 text-decoration-none text-muted" type="button" id="password-addon" 
                                                        // onClick={() => setPasswordShow(!passwordShow)}
                                                        ><i className="ri-eye-fill align-middle"></i>
                                                        </button>
                                                    </div>
                                                </div>

                                                <div className="form-check">
                                                    <Input className="form-check-input" type="checkbox" value="" id="auth-remember-check" />
                                                    <Label className="form-check-label" htmlFor="auth-remember-check">Remember me</Label>
                                                </div>

                                                <div className="mt-4">
                                                    <Button color="success" disabled={error ? null : loading ? true : false} className="btn btn-success w-100" type="submit">
                                                        {loading ? <Spinner size="sm" className='me-2'> Loading... </Spinner> : null}
                                                        Sign In
                                                    </Button>
                                                </div>

                                                {/*<div className="mt-4 text-center">*/}
                                                {/*    <div className="signin-other-title">*/}
                                                {/*        <h5 className="fs-13 mb-4 title">Sign In with</h5>*/}
                                                {/*    </div>*/}
                                                {/*    <div>*/}
                                                {/*        <Link*/}
                                                {/*            to="#"*/}
                                                {/*            className="btn btn-primary btn-icon me-1"*/}
                                                {/*            // onClick={e => {*/}
                                                {/*            //     e.preventDefault();*/}
                                                {/*            //     socialResponse("facebook");*/}
                                                {/*            // }}*/}
                                                {/*        >*/}
                                                {/*            <i className="ri-facebook-fill fs-16" />*/}
                                                {/*        </Link>*/}
                                                {/*        <Link*/}
                                                {/*            to="#"*/}
                                                {/*            className="btn btn-danger btn-icon me-1"*/}
                                                {/*            // onClick={e => {*/}
                                                {/*            //     e.preventDefault();*/}
                                                {/*            //     socialResponse("google");*/}
                                                {/*            // }}*/}
                                                {/*        >*/}
                                                {/*            <i className="ri-google-fill fs-16" />*/}
                                                {/*        </Link>*/}
                                                {/*        <Button color="dark" className="btn-icon"><i className="ri-github-fill fs-16"></i></Button>{" "}*/}
                                                {/*        <Button color="info" className="btn-icon"><i className="ri-twitter-fill fs-16"></i></Button>*/}
                                                {/*    </div>*/}
                                                {/*</div>*/}
                                            </Form>
                                        </div>
                                    </CardBody>
                                </Card>

                                <div className="mt-4 text-center">
                                    <p className="mb-0">Don't have an account ? <Link to="/register" className="fw-semibold text-primary text-decoration-underline"> Signup </Link> </p>
                                </div>

                            </Col>
                        </Row>
                    </Container>
                   </div>
              </ParticlesAuth>
    </>
  )
}
export default withRouter(LoginComponent);