from io import SEEK_CUR
from django.shortcuts import render
import os

from main.models import PageInfo
# Create your views here.

def game_view(request, url):
    obj = PageInfo.objects.get(page_name=url)
    context = {
        "name": obj.title
    }
    return render(request, os.path.join(url, "game.html"), context)
