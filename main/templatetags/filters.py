from django import template

register = template.Library()


@register.filter
def format(text: str, number: int) -> str:
    return text.format(number)


@register.filter
def mod(meter: int, denominator: int) -> int:
    return meter % denominator