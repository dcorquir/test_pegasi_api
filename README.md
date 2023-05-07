docker build -t hospital_buen_vivir_api . 
docker run -dp 3002:3002 hospital_buen_vivir_api

docker build -t system_technologies_api .
docker run -dp 3003:3003 system_technologies_api

docker-compose up