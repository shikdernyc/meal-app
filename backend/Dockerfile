FROM python:3.6

WORKDIR /usr/src/app

COPY requirements.txt /usr/src/app
RUN pip3 install --no-cache-dir -r requirements.txt
COPY . /usr/src/app
CMD ["python3", "run.py"]
EXPOSE 8082