from django.db import models

from games.models import InnerGameModel
# Create your models here.

class PageInfo(models.Model):
    page_name = models.TextField(max_length=31)
    title = models.CharField(max_length=15)


class MessagesModel(models.Model):
    name = models.CharField(max_length=31)
    email = models.CharField(max_length=40)
    title = models.CharField(max_length=21)
    message = models.TextField()