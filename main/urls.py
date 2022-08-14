from django.urls import path

from .views import (
    main_views,
    about_views,
    projects_views,
    contact_views,
    handler404
)

app_name = ""
urlpatterns = [
    path("", main_views, name="home"),
    path("about/", about_views, name="about"),
    path("projects/", projects_views, name="projects"),
    path("contact/", contact_views, name="contact"),
    path("404/", handler404, name="404")
]
