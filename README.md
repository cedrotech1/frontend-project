# Car Repair Payment Management System (CRPMS) - Frontend

A modern React.js frontend application for managing car repair services, payments, and reporting. Built with React, Vite, Tailwind CSS, and Axios.

## Features

- **User Authentication** - Secure login/signup with JWT tokens
- **Car Management** - Add, edit, delete, and view vehicles
- **Service Management** - Manage available services and pricing
- **Payment Tracking** - Record and track payments
- **Service Records** - Full CRUD operations (exam requirement)
- **Simple Reporting** - Clean joined tables of car, service, and payment data
- **Responsive Design** - Mobile-friendly interface
- **Beginner-Friendly** - Simple, straightforward code structure

## Technology Stack

- **React.js** - Frontend framework
- **Vite** - Build tool and development server
- **React Router DOM** - Client-side routing
- **Axios** - HTTP client for API calls
- **Tailwind CSS** - Utility-first CSS framework
- **JavaScript** - Programming language

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager
- Backend API server running on port 4000

## Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd frontend-project
```

2. **Install dependencies**
```bash
npm install
```

3. **Start the development server**
```bash
npm run dev
```

4. **Open in browser**
```
http://localhost:5173
```

## Project Structure

```
frontend-project/
|-- src/
|   |-- components/
|   |   `-- menu.jsx           # Navigation component
|   |-- pages/
|   |   |-- home_page.jsx      # Landing page
|   |   |-- cars_page.jsx      # Car management
|   |   |-- services_crud_page.jsx  # Services management
|   |   |-- payment_page.jsx   # Payment tracking
|   |   |-- service_record.jsx # Service records (Full CRUD)
|   |   |-- report_page.jsx    # Simple reporting
|   |   |-- login_page_no_menu.jsx  # Authentication
|   |   |-- signup_page_no_menu.jsx # User registration
|   |   `-- logout_page_no_menu.jsx  # Logout
|   |-- App.jsx                # Main application component
|   `-- main.jsx              # Application entry point
|-- public/                   # Static assets
|-- index.html               # HTML template
|-- package.json             # Dependencies and scripts
`-- README.md               # This file
```

## Pages and Features

### 1. Home Page (`/`)
- **Landing page** with system overview
- **Navigation links** to main features
- **Clean, professional design**

### 2. Car Management (`/car`)
- **Add cars** with type, model, and mechanic
- **View all cars** in table format
- **Edit car information**
- **Delete cars** with confirmation

### 3. Services (`/service`)
- **Add services** with name and price
- **View all services** in table
- **Simple service management**

### 4. Payments (`/payment`)
- **Add payments** with amount, date, service, and car
- **View payment records** in table
- **Payment tracking**

### 5. Service Records (`/service-record`) - **EXAM REQUIREMENT**
- **Full CRUD Operations** as required for Technical Secondary Schools National Practical Examination
- **Add service records** with date
- **View all service records**
- **Edit existing records**
- **Delete records** with confirmation
- **Beginner-friendly implementation**

### 6. Reports (`/report`)
- **Simple joined table** showing car, service, and payment data
- **No complex forms** - just clean data display
- **Auto-refresh** capability
- **Summary statistics**

### 7. Authentication
- **Login page** (`/login`) - Clean form without menu
- **Signup page** (`/signup`) - User registration
- **Logout page** (`/logout`) - Secure logout
- **JWT token management**

## Key Design Principles

### Beginner-Friendly Code
- **Simple axios calls** directly in components
- **No complex API abstractions**
- **Clear variable names**
- **Straightforward React hooks**
- **Consistent patterns across pages**

### Conditional Menu Display
- **Menu hidden** on authentication pages
- **Menu visible** on main application pages
- **Clean user experience**

### Responsive Design
- **Mobile-friendly** layouts
- **Tailwind CSS** for styling
- **Consistent color scheme**
- **Professional appearance**

## API Integration

### Base URL
```
http://localhost:4000
```

### Authentication
- **JWT tokens** stored in localStorage
- **Automatic token inclusion** in headers
- **Secure session management**

### API Calls Pattern
Each page follows the same pattern:
```javascript
// Example from cars_page.jsx
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

## Running the Application

### Development Mode
```bash
npm run dev
```
- Hot module replacement
- Fast development server
- Error reporting

### Production Build
```bash
npm run build
npm run preview
```

### Linting
```bash
npm run lint
```

## Component Details

### Menu Component
- **Navigation links** to all main pages
- **Conditional rendering** based on route
- **Hover effects** and transitions
- **Responsive design**

### Page Components
Each page component includes:
- **State management** with useState
- **API integration** with axios
- **Form handling** for data input
- **Table display** for data visualization
- **Error handling** and user feedback

## Styling Approach

### Tailwind CSS Classes
- **Utility classes** for rapid development
- **Consistent spacing** and colors
- **Responsive design** utilities
- **Hover states** and transitions

### Color Scheme
- **Primary**: Blue (blue-500, blue-600)
- **Success**: Green (green-500, green-600)
- **Warning**: Yellow (yellow-500, yellow-600)
- **Danger**: Red (red-500, red-600)
- **Neutral**: Gray shades

## Security Features

- **JWT token storage** in localStorage
- **Secure API communication**
- **Input validation** in forms
- **XSS protection** through React

## Browser Compatibility

- **Modern browsers** (Chrome, Firefox, Safari, Edge)
- **Mobile browsers** supported
- **Responsive design** for all screen sizes

## Development Guidelines

### Adding New Pages
1. Create component in `src/pages/`
2. Add route in `App.jsx`
3. Add menu link if needed
4. Follow existing patterns

### Code Style
- **Consistent indentation**
- **Clear variable names**
- **Comment complex logic**
- **Follow React best practices**

### API Integration
- **Use axios** for HTTP requests
- **Handle errors** gracefully
- **Provide user feedback**
- **Update state** appropriately

## Testing

### Manual Testing
- Test all forms and buttons
- Verify API integration
- Check responsive design
- Test error scenarios

### Browser Testing
- Chrome/Chromium
- Firefox
- Safari
- Edge
- Mobile browsers

## Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Static Hosting
- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

## Environment Configuration

### Development
```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview"
  }
}
```

### Production Considerations
- **API URL configuration**
- **Environment variables**
- **Build optimization**
- **Asset optimization**

## Troubleshooting

### Common Issues
1. **API connection errors** - Check backend server
2. **CORS issues** - Verify backend CORS settings
3. **Build errors** - Check dependencies
4. **Routing issues** - Verify React Router setup

### Debug Tips
- **Browser console** for errors
- **Network tab** for API calls
- **React DevTools** for component state
- **Backend logs** for server issues

## Contributing

1. **Follow existing patterns**
2. **Test thoroughly**
3. **Maintain code style**
4. **Update documentation**

## Support

For issues and questions:
- Check backend API documentation
- Verify backend server is running
- Test API endpoints separately
- Check browser console for errors

## License

This project is part of the 2024-2025 Technical Secondary Schools National Practical Examination.

---

**Note**: This frontend is designed to work with the corresponding Node.js backend API. Both applications should be run simultaneously for full functionality.
