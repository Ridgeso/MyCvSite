from typing import Type

from django.shortcuts import render, HttpResponseRedirect
from django.core.mail import send_mail

from .models import PageInfo
from games.models import  Games
from .forms import ContactForm

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
    context = {
        "name": obj.title,
        "projects": MyProjects.projects,
        "games": Games,
        "back_counter": 4
    }
    return render(request, "projects.html", context)


def contact_views(request: WSGIRequest) -> HttpResponseRedirect:
    obj = PageInfo.objects.get(page_name="contact")
    form = ContactForm(request.POST or None)
    if form.is_valid():
        send_mail(
            "[WORK]: " + form.data['title'],
            f"{form.data['name']} sends message\n{form.data['email']} <- contact back\n\nMessage:\n{form.data['message']}",
            "jarskwarczek@gmail.com",
            ["jarskwarczek@gmail.com"],
            fail_silently=False
        )
        send_mail(
            "Thanks for texting Me!",
            f"Hey {form.data['name']}\n\nI am so glad you wrote to me. I will send back as soon I read your message.\n\n Best Regards Jarosław Skwarczek",
            "jarskwarczek@gmail.com",
            [form.data['email']],
            fail_silently=False
        )
        return HttpResponseRedirect("/")

    context = {
        "name": obj.title,
        "form": form,
        "offers": ['Satisfaction', 'Code quality', 'Punctual employee', 'Workplace atmosphere']
    }
    return render(request, "contact.html", context)


def handler404(request: WSGIRequest, *args, **kwargs):
    title = "404"
    response = render(request, "404.html", {
        "name": title
    })
    response.status_code = 404
    return response