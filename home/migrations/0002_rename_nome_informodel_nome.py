# Generated by Django 4.2 on 2024-11-15 12:13

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("home", "0001_initial"),
    ]

    operations = [
        migrations.RenameField(
            model_name="informodel",
            old_name="Nome",
            new_name="nome",
        ),
    ]