from django import forms
from django.forms import fields


class ContactForm(forms.Form):
    name = fields.CharField(
        max_length=31,
        widget=forms.TextInput(
            attrs={
                "class": "input name",
                "id": False
            }
        ),
        required=True
    )
    email = fields.CharField(
        label="E-Mail",
        max_length=40,
        widget=forms.TextInput(
            attrs={
                "class": "input email",
                "id": False
            }
        ),
        required=True
    )
    title = fields.CharField(
        max_length=21,
        widget=forms.TextInput(
            attrs={
                "class": "input title",
                "id": False
            }
        ),
        required=True
    )
    message = fields.CharField(
        widget=forms.Textarea(
            attrs={
                "class": "input message",
                "id": False,
                "cols": 100,
                "rows": 20
            }
        ),
        required=True
    )
