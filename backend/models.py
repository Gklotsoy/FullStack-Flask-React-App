from config import db

class Logs(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100))
    content = db.Column(db.String(255))
    date = db.Column(db.DateTime)

    def __init__(self, title, content, date):
        self.title = title
        self.content = content
        self.date = date

    def to_json(self):
        return {
            'id': self.id,
            'title': self.title,
            'content': self.content,
            'date': self.date
        }