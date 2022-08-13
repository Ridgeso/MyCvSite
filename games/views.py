from typing import Type

from django.shortcuts import render
import os

from main.models import PageInfo
# Create your views here.

WSGIRequest = Type['WSGIRequest']


def game_view(request: WSGIRequest, url: str):
    obj = PageInfo.objects.get(page_name=url)
    context = {
        "name": obj.title
    }
    return render(request, os.path.join(url, "game.html"), context)
