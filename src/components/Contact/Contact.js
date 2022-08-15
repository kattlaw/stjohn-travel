import { Container, Label, Col, FormGroup, Button } from 'reactstrap';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import stfrancis from '../../assets/stfrancis.jpeg';
import './contact.css';

const Contact = () => {
    return (
        <Formik
        initialValues={{
            firstName: '',
            lastName: '',
            phoneNum: '',
            email: '',
            agree: false,
            contactType: 'By Phone',
            feedback: ''
        }}
        >
        <section id="contact">
            <Container className="contact_us">
                <p>Join Our Mailing List</p>
               <div className="register_form">
                <div className="image"></div>
                <div className="form">
                    <h1>Sign Up</h1>
                    <p>Join our mailing list for exclusive news, deals, and everything St. John!</p>
                    <Form>
                        <FormGroup row>
                            <Label htmlFor="firstName" md="1">
                            </Label>
                            <Col md='10'>
                                <Field 
                                    className="form-control"
                                    name='firstName'
                                    placeHolder="First Name"
                                />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor="email" md="1">
                            </Label>
                            <Col md="10">
                                <Field 
                                    className="form-control"
                                    name="email"
                                    placeholder="Email"
                                />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col md={{ size: 10, offset: 1 }}>
                                <Button type="submit" className="form_button">
                                    Sign Up
                                </Button>
                            </Col>
                        </FormGroup>
                    </Form>
                        </div>
                    
                </div>
            
     
            </Container>
        </section>
        </Formik>
    )

}

export default Contact;