import React ,{useEffect, useState} from 'react';
//import axios from 'axios';
import {fetchData, PostData ,addData} from '../store/users.action';
import { connect, useDispatch } from 'react-redux';
import { Table , Container ,Row , Col} from "reactstrap";
import { useFormik } from 'formik';

function About(props) {

   const  [gambarType,setGambarType] = useState('');
   const  [gambarImage,setGambarImage] = useState('');
   
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchData());     
    }, [dispatch])

    const handleImage = (e) => {
        setGambarType(e.target.files[0]);
        setGambarImage(URL.createObjectURL(e.target.files[0]))
        // setGambar({
        //     type: e.target.files[0],
        //     image:URL.createObjectURL(e.target.files[0])
        // })
    }

    const formik = useFormik({
        initialValues: {
          id:'',
          firstname: '',
          lastname: '',
          username:'',
          address:'',
          email: '',
          password:'',
          age:'',
          avatar:''
          
        },
        onSubmit: (values,{ resetForm }) => {
          let formData = new FormData()
          for (const key in values) {
            if (values.hasOwnProperty(key)) {
                formData.append(key, values[key]);
                if (key === "avatar") {
                    formData.append(key, values.avatar.file);
                }
            }
        }
          props.addData(formData);
          props.addLocal(values);
          resetForm();
          //alert(JSON.stringify(values, null, 2));
        },
      });
      
    return (
        <div>
            <h1 className='text-center alert alert-info'>User Lists</h1>
            <Container> 
            <Row>
            <Col md={12}> 
            <Table>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                    <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                {props.users.map( (item,index) => {
                    return(
                    <tr key={index}>
                    <th scope="row">{item.id}</th>
                    <td>{item.firstname}</td>
                    <td>{item.lastname}</td>
                    <td>{item.username}</td>
                    <td>{item.email}</td>
                    </tr>
                    )
                })}
                </tbody>
                </Table>
                </Col>
                </Row>
                <Row>
                    <Col md={12}>
                    <form onSubmit={formik.handleSubmit}>
                    <label htmlFor="firstName">ID</label>
                        <input
                            id="id"
                            name="id"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.id}
                            className='form-control'
                        />
                        <label htmlFor="firstName">First Name</label>
                        <input
                            id="firstname"
                            name="firstname"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.firstname}
                            className='form-control'
                        />
                        <label htmlFor="lastName">Last Name</label>
                        <input
                            id="lastname"
                            name="lastname"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.lastname}
                            className='form-control'
                        />
                        <label htmlFor="username">Username</label>
                        <input
                            id="username"
                            name="username"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.username}
                            className='form-control'
                        />
                        <label htmlFor="lastName">Address</label>
                        <input
                            id="address"
                            name="address"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.address}
                            className='form-control'
                        />
                        <label htmlFor="email">Email Address</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            onChange={formik.handleChange}
                            value={formik.values.email}
                            className='form-control'
                        />
                        <label htmlFor="lastName">Password</label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            onChange={formik.handleChange}
                            value={formik.values.password}
                            className='form-control'
                        />
                        <label htmlFor="lastName">Age</label>
                        <input
                            id="age"
                            name="age"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.age}
                            className='form-control'
                        />
                        {/* {/* <label htmlFor="lastName">Avatar</label> */}
                        <input
                            id="avatar"
                            name="avatar"
                            type="file"
                            onChange={event=> {
                                console.log(event.target.files,"files");
                                
                                formik.setFieldValue(
                                    "avatar",
                                    event.currentTarget.files[0]
                                );
                                handleImage(event);
                            }}
                            className='form-control'
                        /> 
                        {gambarType !== "" && (
                            <img src={gambarImage} alt="avatar" style={{width:'100px'}} />
                        )}
                        <button className='btn btn-danger mt-4 mb-4' type="submit">Submit</button>
                    </form>
                    </Col>
                </Row>
                </Container>
            
        </div>
    )
}

const mapStateToProps = state => {
    return {
        users:state.users.data
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addData:(data)=> dispatch(PostData(data)),
        addLocal:(data) => dispatch(addData(data))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(About)
