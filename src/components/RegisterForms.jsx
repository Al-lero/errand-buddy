import AdminRegister from './AdminRegister';
import BuddyRegister from './BuddyRegister';
import UserRegister from './UserRegister';

const RegisterForms = () => {
    const containerStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        gap: '20px',
        padding: '20px',
        flexWrap: 'wrap',
        marginTop: '20px',
    };

    // Style for each individual form
    const formStyle = {
        flex: '1',
        minWidth: '300px',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#f9f9f9',
        display: 'flex',
        flexDirection: 'column',
        gap: '15px',
    };


    return (
        <div style={containerStyle}>
            <div style={formStyle}>
                <AdminRegister />
            </div>

            <div style={formStyle}>
                <BuddyRegister />
            </div>

            <div style={formStyle}>
                <UserRegister />
            </div>
        </div>
    );
};

export default RegisterForms;
