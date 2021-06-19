from django.urls import path

from .views import (
    main_views,
    about_views,
    projects_views,
    contact_views
)

app_name = ""
urlpatterns = [
    path("", main_views, name="home"),
    path("about/", about_views, name="about"),
    path("projects/", projects_views, name="projects"),
    path("contact/", contact_views, name="contact")
]
