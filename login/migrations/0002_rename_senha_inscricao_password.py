# Generated by Django 4.2 on 2024-11-07 15:46

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("login", "0001_initial"),
    ]

    operations = [
        migrations.RenameField(
            model_name="inscricao",
            old_name="senha",
            new_name="password",
        ),
    ]