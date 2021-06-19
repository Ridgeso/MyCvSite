from django.db import models
from django.db.models import fields
from django.conf import settings
from django.urls import reverse
import os

# Create your models here.
def image_path():
    return os.path.join(settings.BASE_DIR, "games", "templates")


class InnerGameModel(models.Model):
    url = fields.CharField(max_length=31)
    title = fields.CharField(max_length=31)
    image = fields.FilePathField(
        path=image_path,
        allow_folders=True,
        recursive=True
    )
    description = fields.TextField()

    @property
    def image_path(self):
        return self.image.replace(os.path.join(settings.BASE_DIR, "games", "templates"), "")

    def get_absolute_url(self):
        return reverse("projects:game", kwargs={"url": self.url})
