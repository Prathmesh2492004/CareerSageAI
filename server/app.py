from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
import joblib

app = Flask(__name__)
CORS(app)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///students.db'
db = SQLAlchemy(app)

class Student(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80))
    email = db.Column(db.String(120), unique=True)
    password = db.Column(db.String(120))
    grade = db.Column(db.String(10))

@app.before_first_request
def create_tables():
    db.create_all()

@app.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    new_student = Student(
        name=data['name'],
        email=data['email'],
        password=data['password'],
        grade=data['grade']
    )
    db.session.add(new_student)
    db.session.commit()
    return jsonify({'message': 'Student registered successfully'})

@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    student = Student.query.filter_by(email=data['email'], password=data['password']).first()
    if student:
        return jsonify({'name': student.name, 'email': student.email, 'grade': student.grade})
    return jsonify({'message': 'Invalid credentials'}), 401

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()
    model = joblib.load('career_model.pkl')
    features = [[
        data['Math_Score'],
        data['Logic_Score'],
        data['Creativity'],
        data['Communication'],
        data['Preferred_Subject']
    ]]
    prediction = model.predict(features)
    return jsonify({'recommended_career': prediction[0]})

if __name__ == '__main__':
    app.run(debug=True)
