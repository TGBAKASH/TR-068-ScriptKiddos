from app import db
from flask_bcrypt import Bcrypt
import secrets
import string

def init_admin():
    bcrypt = Bcrypt()
    
    # Check if admin exists
    admin = db.organisations.find_one({"type": "SuperAdmin"})
    if admin:
        print(f"Super Admin already exists with email: {admin['email']}")
        return
        
    # Generate random strong password
    alphabet = string.ascii_letters + string.digits
    password = ''.join(secrets.choice(alphabet) for i in range(16))
    
    hashed_password = bcrypt.generate_password_hash(password).decode('utf-8')
    
    admin_data = {
        "email": "admin@migrantsystem.org",
        "institution_name": "System Administrator",
        "affiliation_number": "ADMIN-0001",
        "type": "SuperAdmin",
        "board": "None",
        "password": hashed_password,
        "status": "approved"
    }
    
    db.organisations.insert_one(admin_data)
    print("="*40)
    print("🎓 SUPER ADMIN CREATED SUCCESSFULLY 🎓")
    print(f"Email: {admin_data['email']}")
    print(f"Password: {password}")
    print("PLEASE SAVE THESE CREDENTIALS! THEY WILL NOT BE SHOWN AGAIN.")
    print("="*40)

if __name__ == "__main__":
    init_admin()
