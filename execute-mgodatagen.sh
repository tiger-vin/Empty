#!/bin/bash

# Script to execute mgodatagen executable
echo "Executing mgodatagen..."

# Navigate to the directory containing the executable
cd "$(dirname "$0")/Load"

# Check if the executable exists
if [ -f "./mgodatagen" ]; then
    # Make sure the executable has execute permissions
    chmod +x ./mgodatagen
    
    # Execute the mgodatagen executable
    ./mgodatagen
    
    echo "Execution completed."
else
    echo "Error: mgodatagen executable not found in the Load directory."
    exit 1
fi
