import Navbar from "../components/Navbar";
import { Link } from "react-router";
import "./HomePage.css";
import PropTypes from 'prop-types';

const HomePage = ({ currUser, handleLogout }) => {
    return (
        <div className="home-page">
            <Navbar currUser={currUser} handleLogout={handleLogout} />
            <div className="hero-section">
                <div className="hero-content">
                    <h1>Welcome to your personal Event Manager</h1>
                    <p>Your personal productivity dashboard</p>
                    <Link to="/tasks" className="create-task-btn">Create Your Task</Link>
                </div>
            </div>
        
          <div className="image-text-container">
                <div className="image-text-block">
                    <img src="https://i.pinimg.com/736x/2e/51/65/2e5165cb6bd987a49aae51f76fa85bce.jpg" alt="Image 1" className="image-left" />
                    <div className="text-content text-right">
                        <h3>Comprehensive Task Overview</h3>
                        <p>Experience an unparalleled overview of your tasks, meticulously designed to enhance your productivity and streamline your workflow.</p>
                    </div>
                </div>
                <div className="image-text-block">
                    <div className="text-content text-left">
                        <h3>Strategic Priority Management</h3>
                        <p>Master the art of prioritization with our sophisticated system, ensuring you never miss a critical deadline or overlook an essential task.</p>
                    </div>
                    <img src="https://i.pinimg.com/736x/be/98/2f/be982f2badd763f457a0cef6e0c08de4.jpg" alt="Image 2" className="image-right" />
                </div>
                <div className="image-text-block">
                    <img src="https://i.pinimg.com/736x/92/9e/cf/929ecf261e4bd32c268a960c876d2148.jpg" alt="Image 3" className="image-left" />
                    <div className="text-content text-right">
                        <h3>Seamless Team Collaboration</h3>
                        <p>Foster a collaborative environment with our intuitive tools, enabling effortless task delegation and real-time progress tracking among team members.</p>
                    </div>
                </div>
            </div>

            <footer className="home-footer">
                <p>&copy; {new Date().getFullYear()} Task Management Tool. All rights reserved.</p>
                <div className="footer-links">
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms of Service</a>
                    <a href="#">Contact Us</a>
                </div>
            </footer>
        </div>
    );
};


HomePage.propTypes = {
    currUser: PropTypes.object,
    handleLogout: PropTypes.func.isRequired,
};

export default HomePage;