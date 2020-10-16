from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
import os

app = Flask(__name__)

basedir = os.path.abspath(os.path.dirname(__file__))
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + os.path.join(basedir, 'app.sqlite')
db = SQLAlchemy(app)
ma = Marshmallow(app)

class Question(db.Question):
    id = db.Column(db.Integer, primary_key = True)
    question = db.Column(db.String(100), unique = False)
    answerA = db.Column(db.String(100), unique = False)
    answerB = db.Column(db.String(100), unique = False)
    answerC = db.Column(db.String(100), unique = False)
    answerD = db.Column(db.String(100), unique = False)

    def __init__(self, question, answerOne, answerTwo, answerThree, answerFour):
        self.question = question
        self.answerA = answerA
        self.answerB = answerB
        self.answerC = answerC
        self.answerD = answerD

class QuizSchema(ma.Schema):
    class Meta:
        fields = ('question', 'answerOne', 'answerTwo', 'answerThree', 'answerFour')

quiz_schema = QuizSchema()
quiz_schema = QuizSchema(many = True)


@app.route('/quiz', methods=["POST"])
def add_quiz():
    question = request.json['question']
    answerA = request.json['year']
    answerB = request.json['rating']
    answerC = request.json['genre']
    answerD = request.json['starring']
    
    new_quiz = Quiz(question, answerA, answerB, answerC, answerD)

    db.session.add(new_quiz)
    db.session.commit()

    movie = Quiz.query.get(new_quiz.id)

    return movie_schema.jsonify(movie)

@app.route("/movies", methods=["GET"])
def get_movies():
    all_movies = Movie.query.all()
    result = movies_schema.dump(all_movies)
    return jsonify(result)

@app.route("/movie/<id>", methods=["GET"])
def get_movie(id):
    movie = Movie.query.get(id)
    return movie_schema.jsonify(movie)

@app.route("/movie/<id>", methods =["PUT"])
def movie_update(id):
    movie = Movie.query.get(id)
    title = request.json['title']
    year = request.json['year']
    rating = request.json['rating']
    genre= request.json['genre']
    starring = request.json['starring']
    movie.title = title
    movie.year = year
    movie.rating = rating
    movie.genre = genre
    movie.starring = starring

@app.route("/movie/<id>", methods =["DELETE"])
def movie_delete(id):
    guide = Guide.query.get(id)
    db.session.delete(movie)
    db.session.commit()
    return movie_schema.jsonify(movie)

    db.session.commit()
    return movie_schema.jsonify(movie)


if __name__ == '__main__':
    app.run(debug = True)
