Get started
~~~~~~~~~~~

Setup environment::

    $ pip install -r requirements.txt

Run local server::

    $ python app.py

By default, server is accessible via http://127.0.0.1:8016

Optional environment variables::

    DATABASE_URL # Example: "postgres://giang@localhost:5432/addresses"
                 # By default, it uses file-based SQLite
    DEBUG        # Can be 1 or blank
    PORT         # A port number


Restful endpoints (offers GET/POST/PATCH/DELETE/OPTIONS) ::

    http://127.0.0.1:8016/api/manufacturer
    http://127.0.0.1:8016/api/device
