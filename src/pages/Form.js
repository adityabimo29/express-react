import React, { Component } from 'react'
import {Container ,Row , Col} from "reactstrap";
import { PostData } from '../store/users.action';
import { connect } from 'react-redux';

class Form extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <form  enctype="multipart/form-data">
                            
                        </form>
                    </Col>
                </Row>
            </Container>
        )
    }
}

const mapStateToProps = state => {
    return {
        dt: state.users.data
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addData: (data) => dispatch(PostData(data))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Form)