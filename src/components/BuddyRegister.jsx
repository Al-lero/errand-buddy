import { useState } from 'react';
import './Style/RegisterationForms.css';

const BuddyRegister = () => {
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [age, setAge] = useState('');
    const [nin, setNin] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [location, setLocation] = useState('SURULERE'); // Default value

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = {
            name,
            phoneNumber,
            age,
            nin,
            password,
            email,
            address,
            location, // Send the selected location value to the database
        };

        try {
            const response = await fetch('/api/buddy/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert('Buddy registered successfully!');
                document.getElementById('login').scrollIntoView({ behavior: 'smooth' });
            } else {
                alert('Registration failed. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred. Please try again later.');
        }
    };

    return (
        <section id="BuddyRegister" className="register-form">
            <h2>Buddy Registration</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Phone Number"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Age"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="NIN"
                    value={nin}
                    onChange={(e) => setNin(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                />

                {/* Location dropdown */}
                <select value={location} onChange={(e) => setLocation(e.target.value)}>
                    <option value="SURULERE">SURULERE</option>
                    <option value="YABA">YABA</option>
                    <option value="APAPA">APAPA</option>
                    <option value="MUSHIN">MUSHIN</option>
                    <option value="FESTAC">FESTAC</option>
                </select>

                <button type="submit">Register Buddy</button>
            </form>
        </section>
    );
};

export default BuddyRegister;
