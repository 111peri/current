import React, { Component } from 'react';
import InputField from './InputField';

class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            age: '',
            email: '',
            validationErrors: {
                firstName: false,
                lastName: false,
                age: false,
                email: false,
            },
        };
    }

    handleInputChange = (e) => {
        const { name, value } = e.target;

        this.setState((prevState) => ({
            [name]: value,
            validationErrors: {
                ...prevState.validationErrors,
                [name]: false,
            },
        }));
    };

    handleSubmit = () => {
        const { firstName, lastName, age, email } = this.state;
        const validationErrors = {
            firstName: !firstName,
            lastName: !lastName,
            age: !age,
            email: !email,
        };

        this.setState({ validationErrors });

        if (!Object.values(validationErrors).some((error) => error)) {

        }
    };

    render() {
        const { firstName, lastName, age, email, validationErrors } = this.state;

        return (
            <div>
                <InputField
                    name="firstName"
                    value={firstName}
                    onChange={this.handleInputChange}
                    placeholder="Имя"
                    isError={validationErrors.firstName}
                />
                <InputField
                    name="lastName"
                    value={lastName}
                    onChange={this.handleInputChange}
                    placeholder="Фамилия"
                    isError={validationErrors.lastName}
                />
                <InputField
                    name="age"
                    value={age}
                    onChange={this.handleInputChange}
                    placeholder="Возраст"
                    isError={validationErrors.age}
                />
                <InputField
                    name="email"
                    value={email}
                    onChange={this.handleInputChange}
                    placeholder="Email"
                    isError={validationErrors.email}
                />
                <button onClick={this.handleSubmit}>Отправить</button>
            </div>
        );
    }
}

export default Form;
