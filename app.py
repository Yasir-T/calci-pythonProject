from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/calculate', methods=['POST'])
def calculate():
    data = request.json
    print("Received data:", data)  # Debugging: Print received data
    expression = data.get('expression', '')
    print("Expression:", expression)  # Debugging: Print expression
    try:
        result = eval(expression)
        print("Result:", result)  # Debugging: Print result
        return jsonify({'result': result})
    except Exception as e:
        error_message = str(e)
        print("Error:", error_message)  # Debugging: Print error message
        return jsonify({'error': error_message})

if __name__ == '__main__':
    app.run(debug=True)
