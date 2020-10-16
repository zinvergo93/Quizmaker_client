from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
import os

app = Flask(__name__)

basedir = os.path.abspath(os.path.dirname(__file__))
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + os.path.join(basedir, 'app.sqlite')
db = SQLAlchemy(app)
ma = Marshmallow(app)
    
class Quiz(db.Quiz):
    id = db.Column(db.Integer, primary_key = True)
    title = db.Column(db.String(100), unique = False)
    question = db.Column(db.String(100), unique = False)
    answerA = db.Column(db.String(100), unique = False)
    answerB = db.Column(db.String(100), unique = False)
    answerC = db.Column(db.String(100), unique = False)
    answerD = db.Column(db.String(100), unique = False)
    def __init__(self, title, question, answerA, answerB, answerC, answerD):
        self.title = title
        self.question = question
        self.answerA = answerA
        self.answerB = answerB
        self.answerC = answerC
        self.answerD = answerD

class QuizSchema(ma.Schema):
    class Meta:
        fields = ('title', 'question', 'answerA', 'answerB', 'answerC', 'answerD')

quiz_schema = QuizSchema()
quiz_schema = QuizSchema(many = True)


@app.route('/quiz', methods=["POST"])
def add_quiz():
    title = request.json['title']
    question = request.json['question']
    answerA = request.json['answerA']
    answerB = request.json['answerB']
    answerC = request.json['answerC']
    answerD = request.json['answerD']
    
    new_quiz = Quiz(question, answerA, answerB, answerC, answerD)

    db.session.add(new_quiz)
    db.session.commit()

    movie = Quiz.query.get(new_quiz.id)

    return quiz_schema.jsonify(movie)

@app.route("/quizzes", methods=["GET"])
def get_quizzes():
    all_quizzes = Quiz.query.all()
    result = quiz_schema.dump(all_quizzes)
    return jsonify(result)

@app.route("/quizzes/<id>", methods=["GET"])
def get_quiz(id):
    movie = Quiz.query.get(id)
    return Quiz_schema.jsonify(quiz)

@app.route("/quizzes/<id>", methods =["PUT"])
def quiz_update(id):
    title = Quiz.query.get(id)
    question = request.json['question']
    answerA = request.json['year']
    answerB = request.json['rating']
    answerC = request.json['genre']
    answerD = request.json['starring']
    quiz.title = title
    quiz.question = question
    quiz.answerA = answerA
    quiz.answerB = answerB
    quiz.answerC = answerC
    quiz.answerD = answerD

@app.route("/quiz/<id>", methods =["DELETE"])
def quiz_delete(id):
    quiz = Quiz.query.get(id)
    db.session.delete(quiz)
    db.session.commit()
    return quiz_schema.jsonify(quiz)

    db.session.commit()
    return quiz_schema.jsonify(quiz)


if __name__ == '__main__':
    app.run(debug = True)
