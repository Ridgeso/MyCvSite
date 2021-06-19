from django.urls import path

from .views import (
    game_view
)

app_name = "projects"
urlpatterns = [
    path("<slug:url>/", game_view, name="game")
]
