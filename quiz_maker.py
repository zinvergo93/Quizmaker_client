from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
import os

app = Flask(__name__)

basedir = os.path.abspath(os.path.dirname(__file__))
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + os.path.join(basedir, 'quiz_maker.sqlite')
db = SQLAlchemy(app)
ma = Marshmallow(app)


class Quiz(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    question = db.Column(db.String(100), unique=False)
    answer_a = db.Column(db.String(100), unique=False)
    answer_b = db.Column(db.String(100), unique=False)
    answer_c = db.Column(db.String(100), unique=False)
    answer_d = db.Column(db.String(100), unique=False)

    def __init__(self, question, answer_a, answer_b, answer_c, answer_d):
        self.question = question
        self.answer_a = answer_a
        self.answer_b = answer_b
        self.answer_c = answer_c
        self.answer_d = answer_d


class QuizSchema(ma.Schema):
    class Meta:
        fields = ('question', 'answer_a', 'answer_b', 'answer_c', 'answer_d')


quiz_schema = QuizSchema()
quizes_schema = QuizSchema(many=True)


@app.route('/quiz', methods=["POST"])
def add_quiz():
    question = request.json['question']
    answer_a = request.json['answer_a']
    answer_b = request.json['answer_b']
    answer_c = request.json['answer_c']
    answer_d = request.json['answer_d']

    new_quiz = Quiz(question, answer_a, answer_b, answer_c, answer_d)

    db.session.add(new_quiz)
    db.session.commit()

    quiz = Quiz.query.get(new_quiz.id)

    return quiz_schema.jsonify(quiz)


@app.route("/quizzes", methods=["GET"])
def get_quizzes():
    all_quizzes = Quiz.query.all()
    result = quiz_schema.dump(all_quizzes)
    return jsonify(result)


@app.route("/quiz/<id>", methods=["GET"])
def get_quiz(id):
    quiz = Quiz.query.get(id)
    return quiz_schema.jsonify(quiz)


@app.route("/quiz/<id>", methods=["PUT"])
def quiz_update(id):
    quiz = Quiz.query.get(id)
    question = request.json['question']
    answer_a = request.json['a']
    answer_b = request.json['b']
    answer_c = request.json['c']
    answer_d = request.json['d']

    quiz.question = question
    quiz.answer_a = answer_a
    quiz.answer_b = answer_b
    quiz.answer_c = answer_c
    quiz.answer_d = answer_d

    db.session.commit()
    return quiz_schema.jsonify(quiz)


@app.route("/quiz/<id>", methods=["DELETE"])
def quiz_delete(id):
    quiz = Quiz.query.get(id)
    db.session.delete(quiz)
    db.session.commit()

    return quiz_schema.jsonify(quiz)


if __name__ == '__main__':
    app.run(debug=True)
