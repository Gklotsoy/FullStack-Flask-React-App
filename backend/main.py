from flask import request, jsonify
from config import app, db
from models import Logs

@app.route('/logs', methods=['GET'])
def get_logs():
    logs = Logs.query.order_by(Logs.date.desc()).all()
    json_logs = list(map(lambda log: log.to_json(), logs))
    return jsonify({'logs': json_logs})


@app.route('/log/<int:id>', methods=['GET'])
def get_log(id):
    log = Logs.query.get(id)
    json_log = log.to_json() 
    
    if not log:
        return jsonify({'error': 'Log not found'}), 400
    return jsonify({'log': json_log})


@app.route('/create_log', methods=['POST'])
def create_log():
    data = request.json
    title = data['title']
    content = data['content']
    date = data['date']

    if not title or not content or not date:
        return (
            jsonify({'error': 'Please provide title, content and date'}),
            400,
        )

    new_log = Logs(title, content, date)
    try:
        db.session.add(new_log)
        db.session.commit()
        return jsonify({'message': 'Log created successfully'})
    except Exception as e:
        return jsonify({'error': str(e)}), 400
    

@app.route('/update_log/<int:id>', methods=['PUT'])
def update_log(id):
    log = Logs.query.get(id)
    data = request.json

    if not log:
        return jsonify({'error': 'Log not found'}), 400
    
    try:
        log.title = data['title']
        log.content = data['content']
        log.date = data['date']
        db.session.commit()
        return jsonify({'message': 'Log updated successfully'})
    except Exception as e:
        return jsonify({'error': str(e)}), 400
    

    
@app.route('/delete_log/<int:id>', methods=['DELETE'])
def delete_log(id):
    log = Logs.query.get(id)

    if not log:
        return jsonify({'error': 'Log not found'}), 400
    
    try:
        db.session.delete(log)
        db.session.commit()
        return jsonify({'message': 'Log deleted successfully'})
    except Exception as e:
        return jsonify({'error': str(e)}), 400
    

# run Flask app

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
        
    app.run(debug=True)
    
