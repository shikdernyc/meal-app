import os
from app import create_app, db

app = create_app(os.getenv('CONFIG') or 'default')

if __name__ == '__main__':        
    app.run(debug=True, host="0.0.0.0", port=os.getenv("PORT") or 8082)
