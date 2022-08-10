from typing import Type

from django import forms
from django.forms.models import ModelForm
from django.shortcuts import render, HttpResponseRedirect

from .models import PageInfo
from games.models import InnerGameModel
from .forms import ContactModelForm

from .web import Links
MyProjects = Links("https://github.com/Ridgeso")

WSGIRequest = Type['WSGIRequest']


def main_views(request: WSGIRequest) -> HttpResponseRedirect:
    obj = PageInfo.objects.get(page_name="main")
    context = {
        "name": obj.title,
    }
    return render(request, "main.html", context)


def about_views(request: WSGIRequest) -> HttpResponseRedirect:
    obj = PageInfo.objects.get(page_name="about")
    context = {
        "name": obj.title,
    }
    return render(request, "about.html", context)


def projects_views(request: WSGIRequest) -> HttpResponseRedirect:
    obj = PageInfo.objects.get(page_name="projects")
    inner = InnerGameModel.objects.all()
    context = {
        "name": obj.title,
        "projects": MyProjects.projects,
        "inner": inner,
        "back_counter": 4
    }
    return render(request, "projects.html", context)


def contact_views(request: WSGIRequest) -> HttpResponseRedirect:
    obj = PageInfo.objects.get(page_name="contact")
    form = ContactModelForm(request.POST or None)
    if form.is_valid():
        form.save()
        return HttpResponseRedirect("/")

    context = {
        "name": obj.title,
        "form": form,
        "offers": ['Satisfaction', 'Code quality', 'Punctual employee', 'Workplace atmosphere']
    }
    return render(request, "contact.html", context)
