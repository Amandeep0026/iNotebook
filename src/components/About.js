import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const About = () => {
    let navigate = useNavigate();

    useEffect(() => {
        if (!localStorage.getItem('token')) {
            navigate("/login");
        }
        // eslint-disable-next-line
    }, []);

    return (
        <div className="container my-4">
            <h2 className="text-center mb-4">About iNotebook</h2>
            <div className="row">
                <div className="col-md-8 mx-auto">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Your Digital Notebook Solution</h5>
                            <p className="card-text">
                                iNotebook is a secure cloud-based note-taking application that allows you to:
                            </p>
                            <ul className="list-group list-group-flush mb-3">
                                <li className="list-group-item">✓ Create and manage personal notes</li>
                                <li className="list-group-item">✓ Access your notes from anywhere</li>
                                <li className="list-group-item">✓ Secure your notes with user authentication</li>
                                <li className="list-group-item">✓ Edit and delete notes easily</li>
                                <li className="list-group-item">✓ Add tags to organize your notes</li>
                            </ul>
                            <h6 className="card-subtitle mb-2 text-muted">How to Use:</h6>
                            <p className="card-text">
                                Simply sign up for an account, log in, and start creating your notes. 
                                Each note can have a title, description, and tag for better organization. 
                                Your notes are private and can only be accessed with your credentials.
                            </p>
                            <div className="alert alert-info" role="alert">
                                <strong>Security Note:</strong> All your notes are encrypted and stored securely on our servers.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-md-8 mx-auto">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Technical Details</h5>
                            <p className="card-text">
                                Built with modern web technologies:
                            </p>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">• Frontend: React.js</li>
                                <li className="list-group-item">• Backend: Node.js & Express.js</li>
                                <li className="list-group-item">• Database: MongoDB</li>
                                <li className="list-group-item">• Authentication: JWT (JSON Web Tokens)</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
