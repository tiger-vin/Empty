#!/bin/bash

# Script to execute mgodatagen executable
echo "Executing mgodatagen..."

# Load database URI from environment file
SCRIPT_DIR="$(dirname "$0")"
ENV_FILE="${SCRIPT_DIR}/database.env"

if [ -f "$ENV_FILE" ]; then
    echo "Loading database URI from ${ENV_FILE}..."
    source "$ENV_FILE"
else
    echo "Error: Environment file ${ENV_FILE} not found."
    echo "Please create this file with DATABASE_URI=\"your_mongodb_uri\" inside."
    exit 1
fi

# Check if DATABASE_URI is set
if [ -z "$DATABASE_URI" ]; then
    echo "Error: DATABASE_URI is not set in ${ENV_FILE}."
    echo "Please set DATABASE_URI=\"your_mongodb_uri\" in the file."
    exit 1
fi

# Navigate to the directory containing the executable
cd "${SCRIPT_DIR}/Load"

echo "got here"

# Check if the executable exists
if [ -f "./mgodatagen" ]; then
    # Make sure the executable has execute permissions
    chmod +x ./mgodatagen
    
    echo "Using database URI: ${DATABASE_URI}"
    
    # Execute the mgodatagen executable with the specified parameters
    ./mgodatagen -f datagenConfig.json --uri "${DATABASE_URI}" --indexfirst -b 1000 -n 4
    
    echo "Execution completed."
else
    echo "Error: mgodatagen executable not found in the Load directory."
    exit 1
fi
