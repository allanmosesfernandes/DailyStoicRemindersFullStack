const AccountRoute = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(editUserSchema)
    });

    const [userInfo, setUserInfo] = useState([]);
    const [isEditing, setIsEditing] = useState(false);

    // Handle form submission
    const onSubmit = (data) => {
        // Here you can handle the data, e.g., send it to an API or update the state
        console.log('Form data:', data);
        setIsEditing(false);  // Exit edit mode after saving
    };

    return (
        <section className='account-route'>
            <div className='row'>
                <div className='col'>
                    {/* Your existing code... */}
                    <Container>
                        <Row>
                            <h2 className="heading-3 text-primary p-sm-auto p-0">Your account information</h2>
                            <FormProvider {...formMethods}>
                                <form className='edit-profile-container' id="edit-user-form" onSubmit={handleSubmit(onSubmit)}>
                                    {/* First Name & Last Name */}
                                    <h4 className='text-primary'>Personal Details</h4>
                                    <span className='account-box-styling'>
                                        <Row>
                                            <Col sm={4} className='mh-70'>
                                                <label>First Name: {' '}</label>
                                                { isEditing ? (
                                                    <>
                                                        <input defaultValue='test' {...register('firstname')} className='d-block'/>
                                                        {errors.firstname && <p className="error-message">{errors.firstname.message}</p>}
                                                    </>
                                                ) : (
                                                    <p>Allan</p>
                                                )}
                                            </Col>
                                            {/* Other fields... */}
                                        </Row>
                                    </span>
                                    {/* Other form fields... */}
                                    <Col>
                                        <button className='rldn-button mt-5' type='button' onClick={() => {
                                            if (isEditing) {
                                                handleSubmit(onSubmit)();  // Trigger validation and submission
                                            } else {
                                                setIsEditing(true);
                                            }
                                        }}>
                                            {isEditing ? 'Save' : 'Edit account details'}
                                        </button>
                                    </Col>
                                </form>
                            </FormProvider>
                        </Row>
                    </Container>
                    {/* Your existing code... */}
                </div>
            </div>
        </section>
    );
};

export default AccountRoute;
