import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUserData, logoutUser } from "../api";

const Dashboard = () => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await getUserData();
                setUser(response.data);
            } catch (error) {
                alert("Unauthorized! Please log in.");
                navigate("/login");
            }
        };

        fetchUserData();
    }, [navigate]);

    const handleLogout = () => {
        logoutUser();
        navigate("/login");
    };

    return (
        <div className="container mt-5">
            <h2>Dashboard</h2>
            {user ? (
                <div>
                    <p><strong>ID:</strong> {user.id}</p>
                    <p><strong>Username:</strong> {user.username}</p>
                    <p><strong>Email:</strong> {user.email}</p>
                    <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
                </div>
            ) : (
                <p>Loading user data...</p>
            )}
        </div>
    );
};

export default Dashboard;
