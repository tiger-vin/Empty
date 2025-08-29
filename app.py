from flask import Flask, render_template, jsonify, request
import subprocess
import os
import random

app = Flask(__name__)

@app.route('/')
def index():
    """Render the main page."""
    return render_template('index.html')

@app.route('/execute-mgodatagen', methods=['POST'])
def execute_mgodatagen():
    """Execute the mgodatagen executable."""
    try:
        # Get the path to the Load directory relative to the current file
        base_dir = os.path.dirname(os.path.abspath(__file__))
        load_dir = os.path.join(base_dir, 'Load')
        mgodatagen_path = os.path.join(load_dir, 'mgodatagen')
        
        # Check if the executable exists
        if os.path.isfile(mgodatagen_path):
            # Make sure it's executable
            os.chmod(mgodatagen_path, 0o755)
            
            # Execute the shell script instead of directly calling the executable
            shell_script_path = os.path.join(base_dir, 'execute-mgodatagen.sh')
            # Make sure the shell script is executable
            os.chmod(shell_script_path, 0o755)
            
            # Execute the shell script
            result = subprocess.run(
                [shell_script_path],
                capture_output=True,
                text=True
            )
            
            # Generate a random order number
            order_number = f"DB{random.randint(1000, 9999)}"
            
            return jsonify({
                'success': True,
                'message': 'Execution completed successfully',
                'stdout': result.stdout,
                'stderr': result.stderr,
                'order_number': order_number
            })
        else:
            return jsonify({
                'success': False,
                'message': 'Error: mgodatagen executable not found in the Load directory'
            }), 404
    except Exception as e:
        return jsonify({
            'success': False,
            'message': f'Error executing mgodatagen: {str(e)}'
        }), 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
