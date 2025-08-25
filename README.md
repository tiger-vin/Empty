# DocDB Hyper Kicks Flask Application

This is a Flask web application that showcases a product and allows users to execute the `mgodatagen` executable when clicking the "BUY NOW" button.

## Project Structure

```
.
├── app.py                  # Flask application
├── requirements.txt        # Python dependencies
├── static/                 # Static files
│   ├── css/
│   │   └── styles.css      # CSS styles
│   └── js/
│       └── script.js       # JavaScript code
├── templates/              # HTML templates
│   └── index.html          # Main page template
└── Load/                   # Directory containing the mgodatagen executable
    └── mgodatagen          # The executable to run
```

## Setup Instructions

1. Create and activate a virtual environment:

```bash
python3 -m venv venv
source venv/bin/activate
```

2. Install Python dependencies:

```bash
pip install -r requirements.txt
```

2. Make sure the mgodatagen executable has execute permissions:

```bash
chmod +x Load/mgodatagen
```

3. Run the Flask application:

```bash
python3 app.py
```

4. Open your browser and navigate to:

```
http://localhost:5000
```

## How It Works

1. The web application displays a product page with a "BUY NOW" button.
2. When the button is clicked, a confirmation modal appears.
3. Clicking "Confirm & Execute" in the modal sends a request to the Flask backend.
4. The Flask backend executes the mgodatagen executable and returns the results.
5. The results are displayed in the modal, including any output from the executable.

## Security Considerations

This application executes a local executable on the server. In a production environment, you should:

1. Implement proper authentication and authorization
2. Validate and sanitize all user input
3. Consider running the executable in a sandboxed environment
4. Limit the permissions of the Flask application
