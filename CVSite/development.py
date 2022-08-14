from django.conf import settings
import os

DEBUG = True
TEMPLATE_DEBUG = True


ALLOWED_HOSTS = ['127.0.0.1', 'localhost']


DataBases = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': os.path.join(settings.BASE_DIR, 'db.sqlite3'),
    }
}


Static_Dirs = [
    os.path.join(settings.BASE_DIR, "static"),
    os.path.join(settings.BASE_DIR, "games", "templates")
]
