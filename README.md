# DeepFakeNet

A Django-based web application for AI-powered face swapping. Upload faces and targets (images or videos) and generate face-swapped results using Face Swap or FSGAN processing.

## Features

- **AI Face Swap** — Swap faces between two images or videos
- **User Authentication** — Sign up, log in, and log out
- **Multiple Processing Modes** — Run Face Swap or FSGAN
- **Image & Video Support** — Upload both images and videos as source/target
- **Modern UI** — Dark-themed interface with modal popups for auth

## Tech Stack

- **Backend:** Django 5.0
- **Database:** PostgreSQL (configurable via environment variables)
- **Frontend:** HTML, CSS, JavaScript, Font Awesome

## Prerequisites

- Python 3.8+
- PostgreSQL
- pip

## Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd fyp
   ```

2. **Create a virtual environment**
   ```bash
   python -m venv venv
   venv\Scripts\activate   # Windows
   # source venv/bin/activate   # macOS/Linux
   ```

3. **Install dependencies**
   ```bash
   pip install -r requirements.txt
   ```

4. **Environment variables**

   Create a `.env` file in the project root with your database credentials:

   ```
   DATABASE_NAME=postgres
   DATABASE_USER=postgres
   DATABASE_PASSWORD=your_password
   DATABASE_HOST=localhost
   DATABASE_PORT=5432
   ```

5. **Run migrations**
   ```bash
   python manage.py migrate
   ```

6. **Start the development server**
   ```bash
   python manage.py runserver
   ```

   Open [http://127.0.0.1:8000/](http://127.0.0.1:8000/) in your browser.

## Project Structure

```
fyp/
├── DeepFakeGenerator/     # Main app
│   ├── templates/         # HTML templates
│   ├── forms.py           # Sign up & login forms
│   ├── models.py
│   ├── views.py
│   └── urls.py
├── fyp/                   # Project settings
│   ├── settings.py
│   └── urls.py
├── static/                # Static assets (images, icons)
├── manage.py
└── requirements.txt
```

## License

Final Year Project — Educational use.
