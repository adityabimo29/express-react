import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {connect} from 'react-redux';
import { Container,Col,Row,Card } from 'reactstrap';
import {checkLogin} from '../store/users.action';

function LoginForm(prop){
  return (
    <Container>
        <Row>
            <Col md={{size:4,offset:4}}>
            <Card body className='my-4'>
            <Formik
            initialValues={{ password: '', email: '' }}
            validationSchema={Yup.object({
                email: Yup.string()
                .email('Invalid email address')
                .required('Required'),
            })}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                prop.checkLogin(values);
                setSubmitting(false);
                }, 400);
            }}
            >
            <Form>
                <h3 className='text-center font-weight-bold'>Login Form</h3>
                <label htmlFor="email">Email</label>
                <Field className='form-control' name="email" type="email" />
                <ErrorMessage name="email" className='alert alert-danger' />
                <br/>
                <label htmlFor="email">Password</label>
                <Field className='form-control' name="password" type="password" />
                <ErrorMessage name="password" />
                <button className='btn btn-info btn-block mt-4' type="submit">Login</button>
            </Form>
            </Formik>
            </Card>
            </Col>
            
        </Row>
    </Container>
  );
};

const mapStateToProps = state => {
    return{
        masuk:state.users.isLogin,
        dt:state.users.user
    }
}

const mapDispatchToProps = dispatch => {
    return{
        checkLogin:(data)=> dispatch(checkLogin(data)),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(LoginForm) ;