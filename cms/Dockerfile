# Use an official Python runtime as a parent image
FROM python:3.7
LABEL maintainer="hello@wagtail.io"

# Set environment varibles
ENV PYTHONUNBUFFERED 1
ENV DJANGO_ENV dev

COPY ./requirements.txt /code/cms/requirements.txt
RUN pip install --upgrade pip
# Install any needed packages specified in requirements.txt
RUN pip install -r /code/cms/requirements.txt
RUN pip install gunicorn

# Copy the current directory contents into the container at /code/
COPY . /code/cms
# Set the working directory to /code/
WORKDIR /code/cms

RUN python manage.py migrate

RUN useradd wagtail
RUN chown -R wagtail /code/cms
USER wagtail

EXPOSE 8000
CMD exec gunicorn cms.wsgi:application --bind 0.0.0.0:8000 --workers 3
