# Frontend API Integration Guide

This guide explains how the React frontend integrates with the backend API for the Car Repair Payment Management System.

## Overview

The frontend uses **direct axios calls** in each component, following a beginner-friendly approach without complex API abstractions. Each page handles its own API communication.

## Base Configuration

### API Base URL
```javascript
const API_BASE_URL = "http://localhost:4000";
```

### Axios Usage
```javascript
import axios from "axios";

// Example POST request
const response = await axios.post(`${API_BASE_URL}/endpoint`, data);

// Example GET request
const response = await axios.get(`${API_BASE_URL}/endpoint`);
```

## Page-by-Page API Integration

### 1. Authentication Pages

#### Login Page (`login_page_no_menu.jsx`)
```javascript
const handleLogin = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post("http://localhost:4000/login", { email, password });
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('user', JSON.stringify(response.data.user));
        setMessage('Login successful!');
        window.location.href = '/';
    } catch (error) {
        setMessage(error.response?.data?.message || 'Login failed');
    }
};
```

**API Endpoint:** `POST /login`
**Request Body:** `{ email, password }`
**Response:** `{ message, token, user }`

#### Signup Page (`signup_page_no_menu.jsx`)
```javascript
const handleSignup = async (e) => {
    e.preventDefault();
    try {
        await axios.post("http://localhost:4000/signup", { names, email, password });
        setMessage('Signup successful! Please login.');
        setTimeout(() => {
            window.location.href = '/login';
        }, 2000);
    } catch (error) {
        setMessage(error.response?.data?.error || 'Signup failed');
    }
};
```

**API Endpoint:** `POST /signup`
**Request Body:** `{ names, email, password }`
**Response:** `{ message, result }`

### 2. Car Management (`cars_page.jsx`)

#### Add Car
```javascript
const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post("http://localhost:4000/add-car", { type, Model, MechanicName });
        console.log(response);
        setDone(true);
        fetchCars();
    } catch (error) {
        console.error(error);
    }
};
```

**API Endpoint:** `POST /add-car`
**Request Body:** `{ type, Model, MechanicName }`
**Response:** `{ message, result }`

#### Fetch Cars
```javascript
async function fetchCars() {
    try {
        const res = await axios.get("http://localhost:4000/display-cars");
        console.log(res);
        setCars(res.data);
    } catch (error) {
        console.error(error);
    }
}
```

**API Endpoint:** `GET /display-cars`
**Response:** Array of car objects

#### Edit Car
```javascript
const handleEdit = (car) => {
    setType(car.type);
    setModel(car.Model);
    setMechanicName(car.MechanicName);
    setEditingCar(car);
};
```

**API Endpoint:** `PUT /edit-car`
**Request Body:** `{ PlateNumber, type, Model, MechanicName }`
**Response:** `{ message, result }`

#### Delete Car
```javascript
const handleDelete = async (plateNumber) => {
    if (window.confirm("Are you sure you want to delete this car?")) {
        try {
            const res = await axios.delete("http://localhost:4000/delete-car", { 
                data: { PlateNumber: plateNumber } 
            });
            console.log(res);
            fetchCars();
            setDone(true);
        } catch (error) {
            console.error(error);
        }
    }
};
```

**API Endpoint:** `DELETE /delete-car`
**Request Body:** `{ PlateNumber }`
**Response:** `{ message, result }`

### 3. Services Management (`services_crud_page.jsx`)

#### Add Service
```javascript
const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post("http://localhost:4000/add-service", { ServiceName, ServicePrice });
        console.log(response);
        setDone(true);
        fetchServices();
    } catch (error) {
        console.error(error);
    }
};
```

**API Endpoint:** `POST /add-service`
**Request Body:** `{ ServiceName, ServicePrice }`
**Response:** `{ message, result }`

#### Fetch Services
```javascript
async function fetchServices() {
    try {
        const res = await axios.get("http://localhost:4000/display-services");
        console.log(res);
        setServices(res.data);
    } catch (error) {
        console.error(error);
    }
}
```

**API Endpoint:** `GET /display-services`
**Response:** Array of service objects

### 4. Payment Management (`payment_page.jsx`)

#### Add Payment
```javascript
const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post("http://localhost:4000/add-payment", { AmountPaid, PaymentDate, ServiceCode, PlateNumber });
        console.log(response);
        setDone(true);
        fetchPayments();
    } catch (error) {
        console.error(error);
    }
};
```

**API Endpoint:** `POST /add-payment`
**Request Body:** `{ AmountPaid, PaymentDate, ServiceCode, PlateNumber }`
**Response:** `{ message, result }`

#### Fetch Payments
```javascript
async function fetchPayments() {
    try {
        const res = await axios.get("http://localhost:4000/display-payments");
        console.log(res);
        setPayments(res.data);
    } catch (error) {
        console.error(error);
    }
}
```

**API Endpoint:** `GET /display-payments`
**Response:** Array of payment objects

### 5. Service Records (`service_record.jsx`) - **FULL CRUD**

#### Add Service Record
```javascript
const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        if (editingRecord) {
            const res = await axios.put("http://localhost:4000/update-service-record", { 
                RecordNumber: editingRecord.RecordNumber, 
                SeviceDate
            });
            console.log(res);
            setDone(true);
        } else {
            const res = await axios.post("http://localhost:4000/add-service-record", { SeviceDate });
            console.log(res);
            setDone(true);
        }
        
        setSeviceDate("");
        setEditingRecord(null);
        fetchServiceRecords();
    } catch (error) {
        console.error(error);
    }
};
```

**API Endpoints:**
- `POST /add-service-record` - `{ SeviceDate }`
- `PUT /update-service-record` - `{ RecordNumber, SeviceDate }`

#### Fetch Service Records
```javascript
async function fetchServiceRecords() {
    try {
        const res = await axios.get("http://localhost:4000/display-service-records");
        console.log(res);
        setServiceRecords(res.data);
    } catch (error) {
        console.error(error);
    }
}
```

**API Endpoint:** `GET /display-service-records`
**Response:** Array of service record objects

#### Delete Service Record
```javascript
const handleDelete = async (recordNumber) => {
    if (window.confirm("Are you sure you want to delete this service record?")) {
        try {
            const res = await axios.delete("http://localhost:4000/delete-service-record", { 
                data: { RecordNumber: recordNumber } 
            });
            console.log(res);
            fetchServiceRecords();
            setDone(true);
        } catch (error) {
            console.error(error);
        }
    }
};
```

**API Endpoint:** `DELETE /delete-service-record`
**Request Body:** `{ RecordNumber }`
**Response:** `{ message, result }`

### 6. Reports (`report_page.jsx`)

#### Simple Report (Joined Data)
```javascript
async function fetchReportData() {
    try {
        // Get all data from different tables
        const [carsRes, servicesRes, paymentsRes] = await Promise.all([
            axios.get("http://localhost:4000/display-cars"),
            axios.get("http://localhost:4000/display-services"),
            axios.get("http://localhost:4000/display-payments")
        ]);
        
        // Create a simple joined view
        const joinedData = [];
        
        // Combine payment data with car and service info
        paymentsRes.data.forEach(payment => {
            const car = carsRes.data.find(c => c.PlateNumber === payment.PlateNumber);
            const service = servicesRes.data.find(s => s.ServiceCode === payment.ServiceCode);
            
            joinedData.push({
                PlateNumber: payment.PlateNumber,
                CarType: car?.type || 'N/A',
                CarModel: car?.Model || 'N/A',
                MechanicName: car?.MechanicName || 'N/A',
                ServiceName: service?.ServiceName || 'N/A',
                ServicePrice: service?.ServicePrice || 0,
                AmountPaid: payment.AmountPaid || 0,
                PaymentDate: payment.PaymentDate || 'N/A'
            });
        });
        
        setReportData(joinedData);
    } catch (error) {
        console.error(error);
    }
}
```

**API Endpoints Used:**
- `GET /display-cars`
- `GET /display-services`
- `GET /display-payments`

**Response:** Joined data array with car, service, and payment information

## Error Handling Pattern

### Standard Error Handling
```javascript
try {
    const response = await axios.post("http://localhost:4000/endpoint", data);
    console.log(response);
    // Handle success
    setDone(true);
    fetchData();
} catch (error) {
    console.error(error);
    // Handle error
    setMessage('Operation failed');
}
```

### Error Response Handling
```javascript
catch (error) {
    setMessage(error.response?.data?.message || 'Operation failed');
}
```

## State Management Pattern

### Standard Component State
```javascript
const [data, setData] = useState([]);
const [done, setDone] = useState(false);
const [editingItem, setEditingItem] = useState(null);
const [message, setMessage] = useState('');
```

### Form State Pattern
```javascript
const [field1, setField1] = useState('');
const [field2, setField2] = useState('');
```

### Data Fetching Pattern
```javascript
useEffect(() => {
    fetchData();
}, []);

async function fetchData() {
    try {
        const res = await axios.get("http://localhost:4000/endpoint");
        setData(res.data);
    } catch (error) {
        console.error(error);
    }
}
```

## Authentication Flow

### Login Process
1. User submits login form
2. API call to `/login`
3. Store JWT token in localStorage
4. Store user info in localStorage
5. Redirect to home page

### Token Storage
```javascript
localStorage.setItem('token', response.data.token);
localStorage.setItem('user', JSON.stringify(response.data.user));
```

### Logout Process
```javascript
localStorage.removeItem('token');
localStorage.removeItem('user');
window.location.href = '/login';
```

## Form Handling Pattern

### Standard Form Submit
```javascript
const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post("http://localhost:4000/endpoint", formData);
        console.log(response);
        setDone(true);
        // Clear form
        clearForm();
        // Refresh data
        fetchData();
    } catch (error) {
        console.error(error);
    }
};
```

### Edit Mode Pattern
```javascript
const handleEdit = (item) => {
    setField1(item.field1);
    setField2(item.field2);
    setEditingItem(item);
};

// In submit handler
if (editingItem) {
    // Update existing item
    const response = await axios.put("http://localhost:4000/update-endpoint", { 
        id: editingItem.id, 
        ...formData 
    });
} else {
    // Add new item
    const response = await axios.post("http://localhost:4000/add-endpoint", formData);
}
```

## Data Display Pattern

### Table Display
```javascript
<table className="border-collapse border border-gray-300">
    <thead>
        <tr>
            <th className="border border-gray-300 p-2">Column 1</th>
            <th className="border border-gray-300 p-2">Column 2</th>
            <th className="border border-gray-300 p-2">Actions</th>
        </tr>
    </thead>
    <tbody>
        {data.map((item) => (
            <tr key={item.id}>
                <td className="border border-gray-300 p-2">{item.field1}</td>
                <td className="border border-gray-300 p-2">{item.field2}</td>
                <td className="border border-gray-300 p-2">
                    <button onClick={() => handleEdit(item)}>Edit</button>
                    <button onClick={() => handleDelete(item.id)}>Delete</button>
                </td>
            </tr>
        ))}
    </tbody>
</table>
```

## Best Practices

### 1. Consistent API Calls
- Use the same pattern across all components
- Handle errors consistently
- Provide user feedback

### 2. State Management
- Use useState for local state
- Use useEffect for data fetching
- Clear form data after successful operations

### 3. User Experience
- Show loading states
- Provide success/error messages
- Use confirmation dialogs for destructive actions

### 4. Code Organization
- Keep API calls in component functions
- Use descriptive variable names
- Add comments for complex logic

## Troubleshooting

### Common Issues
1. **CORS errors** - Check backend CORS settings
2. **Connection refused** - Ensure backend is running
3. **404 errors** - Verify API endpoints
4. **500 errors** - Check backend logs

### Debug Tips
- Use browser console for errors
- Check Network tab for API calls
- Verify backend server status
- Test API endpoints separately

## Security Considerations

### JWT Token Management
- Store tokens in localStorage
- Include tokens in API headers
- Handle token expiration
- Secure logout process

### Input Validation
- Validate form inputs
- Sanitize user data
- Handle edge cases
- Prevent XSS attacks

---

This guide provides a comprehensive overview of how the frontend integrates with the backend API. The approach is intentionally simple and beginner-friendly, making it easy to understand and maintain.
