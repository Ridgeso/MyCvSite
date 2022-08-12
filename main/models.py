from django.db import models

# Create your models here.


class PageInfo(models.Model):
    page_name = models.TextField(max_length=31, primary_key=True)
    title = models.CharField(max_length=15)
