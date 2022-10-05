import { Container, Label, Col, FormGroup, Button } from 'reactstrap';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import './contact.css';
import { gsap } from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger";
import { useRef, useEffect} from 'react';

gsap.registerPlugin(ScrollTrigger);


const Contact = () => {
    
    const formRef = useRef();
    useEffect(() => {
        let ctx = gsap.context(() => {
        gsap.from(formRef.current, {
            scrollTrigger: {
                trigger: "#contact",
                start: "top bottom",
                end: "+=500",
                //markers: true,
                scrub: 1,
                invalidateOnRefresh: true
            },
          x: "-300%",   
        });

        ScrollTrigger.refresh();

          });

          return () => ctx.revert();
        }, []);

    const handleSubmit = (values, { resetForm }) => {
        console.log('form values:', values);
        console.log('in JSON format:', JSON.stringify(values));
        resetForm();
    
    };

    const validate = values => {
        const errors = {};
        
        if (!values.firstName) {
            errors.firstName = 'Required';
        }   else if (values.firstName.length > 15) {
            errors.firstName = 'Must be 15 characters or less';
        }
    
        
        if (!values.email) {
            errors.email = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
        }
    
        return errors;
    }

    return (
        <Formik
        initialValues={{
            firstName: '',
            email: '',
        }} 
        validate={validate}
        validateOnBlur={false}
        validateOnChange={false}
        onSubmit={handleSubmit}
        
       >
        <section id="contact">
            <Container className="contact_us">
                <h3 ref={formRef}>Join Our Mailing List</h3>
               <div className="register_form">
                <div className="image_form"></div>
                <div className="form">
                    <h1>Sign Up</h1>
                    <p>Join our mailing list for exclusive news, deals, and everything St. John!</p>
                    <Form>
                        <FormGroup row>
                            <Label htmlFor="firstName" md="1">
                            </Label>
                            <Col md="10" sm="11" xs="11">
                                <Field 
                                    className="form-control"
                                    name='firstName'
                                    placeholder="First Name"
                                />
                                <ErrorMessage name='firstName' md="1">
                                   {(validate) => <p className="text-danger">{validate}</p>}
                                </ErrorMessage>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor="email" md="1">
                            </Label>
                            <Col md="10" sm="11" xs="11">
                                <Field 
                                    className="form-control"
                                    name="email"
                                    placeholder="Email"
                                />
                                  <ErrorMessage name="email" md="1">{(validate) => <p className="text-danger">{validate}</p>}
                                </ErrorMessage>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col>
                                <Button type="submit" className="form_button">
                                    Register 
                                </Button>
                                
                                <Button type="reset" className="form_button" onClick={handleSubmit.resetForm}>
                                    Reset
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