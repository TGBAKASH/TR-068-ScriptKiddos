# 📚 Migrant Student Academic Continuity System (MSACS)

Hey there! 👋 Welcome to the **MSACS** project. This system is designed to help NGO workers and schools seamlessly track and manage the academic progress of migrant students, ensuring they don't lose their educational continuity when moving around.

It's powered by a solid Flask backend, a modern glassmorphism UI, and uses Claude AI for deep academic analysis!

## 🌟 Key Features

*   **Smart AI Analysis**: Feeds student scores and teacher observation notes into Claude 3 to generate detailed, brutally honest academic gap analysis and a custom 3-week bridge plan.
*   **NGO Worker Portal**: Painless Google OAuth login for field workers to register students quickly.
*   **Bridge Document Generation**: Generates printable PDF-friendly Bridge Documents that schools can use to enroll migrating students without missing a beat.
*   **Cloud Hosted DB**: Integrated with a robust PostgreSQL backend via CockroachDB.

## 🚀 Setting Up the Project

### Prerequisites
Make sure you have Python installed. The project uses Python 3.10.

1.  **Clone the Repo**:
    ```cmd
    git clone https://github.com/TGBAKASH/TR-068-ScriptKiddos.git
    cd TR-068-ScriptKiddos
    ```

2.  **Set up the Virtual Environment**:
    ```cmd
    python -m venv venv
    venv\Scripts\activate
    ```

3.  **Install Dependencies**:
    ```cmd
    pip install -r requirements.txt
    ```

4.  **Set Environment Variables**:
    Create a `.env` file in the root directory like this:
    ```env
    DATABASE_URL=your_db_connection_string
    ANTHROPIC_API_KEY=your_claude_api_key
    GOOGLE_CLIENT_ID=your_google_client_id
    SMTP_USERNAME=your_smtp_email
    SMTP_PASSWORD=your_smtp_app_password
    ```

5.  **Run Locally!**:
    ```cmd
    python app.py
    ```

## ☁️ Deploying on Render (Free Tier)

This app is totally ready to be deployed on Render! 
We've included a `render.yaml` Blueprint and a `Procfile` configured with `gunicorn`.

1. Go to your [Render Dashboard](https://dashboard.render.com/).
2. Click **New +** and select **Blueprint**.
3. Connect this GitHub repository.
4. Render will automatically detect the `render.yaml` configuration and set up a Web Service.
5. Head over to the **Environment** tab inside your new Render service to securely paste the values for all the variables (`DATABASE_URL`, `ANTHROPIC_API_KEY`, etc.).
6. Wait for the deploy to finish, and your app is live! 🎉 

---
*Built with ❤️ and Flask to make a real difference in educational continuity.*
