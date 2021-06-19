from django.contrib import admin

# Register your models here.
from .models import (
    PageInfo,
    MessagesModel
)

admin.site.register(PageInfo)
admin.site.register(MessagesModel)
