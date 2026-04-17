# 📚 Migrant Student Academic Continuity System (MSACS)

Welcome to **MSACS**, a powerful, AI-driven platform designed to solve one of the most critical challenges in education: preserving the academic continuity of migrant children.

When students migrate between states or educational boards, they often face severe curriculum gaps, syllabus mismatches, and a complete loss of their academic history. **MSACS** empowers NGO field workers and receiving schools to instantly register students, trace their academic timeline across regions, and use AI to generate highly-targeted "Bridge Plans" to reintegrate them without holding them back.

---

## 🌟 Comprehensive Features & Functionality

### 1. 📱 Progressive Web App (PWA) Mobile Experience
- **Install Anywhere**: MSACS functions as a lightweight PWA. Field workers can click "Add to Home Screen" on Android or iOS and use it instantly as a full-screen, native-feeling mobile app without needing to download anything from an App Store.
- **Offline Resilience**: Built-in Service Workers cache critical UI components to ensure the app loads fast in harsh network environments.

### 2. 🤖 Deep AI Syllabus & Gap Analysis (Claude 3)
- **Board Mismatch Detection**: The AI engine dynamically cross-references the student's *Origin State/Board* with their *Current Board* (e.g., Maharashtra SSC to National CBSE) to identify specific missing chapters or language friction.
- **Migration Penalty Logic**: Automatically calculates learning decay based on how long the student was migrating (e.g., a 6-month migration triggers a different plan than an 18-month gap).
- **3-Week Actionable Bridge Plan**: Translates raw exam scores and teacher notes into a structured, day-by-day catch-up protocol to get the child back to grade-level proficiency.

### 3. 🔐 Strict Data Privacy & NOC OTP Protocol 
- **Consent-First Architecture**: Student data is highly sensitive. If a new school or NGO attempts to view a migrating student's profile, the system automatically emails an OTP (No Objection Certificate) to the registered parent's email. 
- **Time-Limited Access**: Timeline update privileges are secured behind an OTP wall and restricted to secure 30-minute token sessions.

### 4. 👥 Multi-Tier Account System
- **Super Admins**: Oversee the entire pipeline and manually approve or reject NGO/School registrations to keep bad actors out.
- **NGO Field Workers**: Can use **Google OAuth** for frictionless 1-click login on the field to rapidly onboard newly arrived students.
- **Receiving Schools**: Can search the national database for arriving students to pull down their historical academic timeline.

### 5. 📈 Persistent Academic Timeline
- Instead of static profiles, MSACS maintains a chronological timeline. Teachers can add routine assessments to the student's record, tracking subject improvements, attendance fixes, and behavioral changes over time. 
- The AI continuously evolves its recommendations based on the newest timeline entries.

### 6. 🖨️ Portable Bridge Documentation
- Seamlessly generates comprehensive, PDF-friendly printable reports that NGOs can physically hand to school principals to legally assist in age-appropriate grade admission.

### 7. 🌓 Premium UI/UX Design
- Built entirely on ultra-modern Glassmorphism design principles.
- Fully responsive, mobile-first CSS architecture with integrated **Dark/Light Mode** toggles.

---

## 🚀 Setting Up the Project Locally

### Prerequisites
Ensure you have **Python 3.10** installed on your system.

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/TGBAKASH/TR-068-ScriptKiddos.git
   cd TR-068-ScriptKiddos
   ```

2. **Set up the Virtual Environment**:
   ```bash
   python -m venv venv
   # On Windows:
   venv\Scripts\activate
   # On Mac/Linux:
   source venv/bin/activate
   ```

3. **Install Dependencies**:
   ```bash
   pip install -r requirements.txt
   ```

4. **Environment Variables Config**:
   Create a `.env` file in the root directory. You must configure these for the AI and Auth systems to work:
   ```env
   DATABASE_URL=your_postgres_or_cockroachdb_string
   ANTHROPIC_API_KEY=your_claude_api_key
   GOOGLE_CLIENT_ID=your_google_oauth_client_id
   SMTP_USERNAME=your_gmail_address
   SMTP_PASSWORD=your_gmail_app_password
   ```

5. **Fire it up!**:
   ```bash
   python app.py
   ```
   *Visit `http://localhost:5000` in your browser.*

---

## ☁️ Zero-Downtime Deployment (Render)

This application is structurally primed for **Render**. With the included `render.yaml` Blueprint and `Procfile`, deployment is entirely automated.

1. Head to your [Render Dashboard](https://dashboard.render.com/).
2. Click **New +** and select **Blueprint**.
3. Connect this GitHub repository. Render reads the YAML file and knows exactly how to build the Python environment.
4. Navigate to the **Environment** tab inside your new web service and securely paste in your `.env` variables.
5. Wait for the deploy to clear—your national platform is now live! 🎉 

---

*Built for impact, specifically engineered to defend the right to continuous education.*
