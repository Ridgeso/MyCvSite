from django import forms
from django.forms import fields

from .models import MessagesModel


class ContactModelForm(forms.ModelForm):
    name = fields.CharField(
        max_length=31,
        widget=forms.TextInput(
            attrs={
                "class": "input name",
                "id": False
            }
        )
    )
    email = fields.CharField(
        label="E-Mail",
        max_length=40,
        widget=forms.TextInput(
            attrs={
                "class": "input email",
                "id": False
            }
        )
    )
    title = fields.CharField(
        max_length=21,
        widget=forms.TextInput(
            attrs={
                "class": "input title",
                "id": False
            }
        )
    )
    message = fields.CharField(
        widget=forms.Textarea(
            attrs={
                "class": "input message",
                "id": False,
                "cols": 100,
                "rows": 20
            }
        )
    )

    class Meta:
        model = MessagesModel
        fields = ["name", "email", "title", "message"]
