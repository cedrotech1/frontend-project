function HomePage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
            {/* Hero Section */}
            <div className="text-center py-16 px-4">
                <h1 className="text-4xl font-bold text-blue-600 mb-4">
                    SmartPark
                </h1>
                <h2 className="text-2xl text-gray-700 mb-8">
                    Car Repair Payment Management System
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
                    Efficient digital solution for managing car repair services, payments, and generating reports. 
                    Say goodbye to manual paperwork and hello to streamlined operations.
                </p>
                <div className="flex justify-center gap-4">
                    <a href="/login" className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors">
                        Get Started
                    </a>
                    <a href="/car" className="bg-gray-200 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-300 transition-colors">
                        View Cars
                    </a>
                </div>
            </div>

        
           
           
        </div>
    );
}

export default HomePage;