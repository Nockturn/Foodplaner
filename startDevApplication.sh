#!/bin/bash
echo "===== Start Flask Backend ====="
echo `python3 -m flask --version`
cd "/mnt/c/Repositories/Foodplaner-Backend"
export FLASK_APP=app.py
export FLASK_ENV=development
python3 -m flask run &
response=$(curl --write-out %{http_code} --silent --output /dev/null http://127.0.0.1:5000)
if response == 200
then echo "Backend started"
fi

echo "===== Start Angular Frontent ====="
cd "/mnt/c/Repositories/Foodplaner"
echo `ng version`
ng serve --port=4201 --open