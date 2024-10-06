import React, { useState } from 'react';
import './index.css'; // Use index.css here

function App() {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [major, setMajor] = useState('');
    const [students, setStudents] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name && age && major) {
            setStudents([...students, { name, age, major }]);
            setName('');
            setAge('');
            setMajor('');
        }
    };

    return (
        <div className="App">
            <h1 className="title">Student Information System</h1>
            <h2 className="subtitle">Developed By: StudentID || Student Name || DevOps</h2>
            <form onSubmit={handleSubmit} className="student-form">
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <input
                    type="number"
                    placeholder="Age"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Major"
                    value={major}
                    onChange={(e) => setMajor(e.target.value)}
                    required
                />
                <button type="submit">Add Student</button>
            </form>
            <h3>Student List</h3>
            <ul>
                {students.length > 0 ? (
                    students.map((student, index) => (
                        <li key={index}>{`${student.name}, Age: ${student.age}, Major: ${student.major}`}</li>
                    ))
                ) : (
                    <li>No students added yet</li>
                )}
            </ul>
        </div>
    );
}

export default App;

