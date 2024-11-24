from django.db import models
from django.contrib.auth.hashers import make_password




class InscrModel(models.Model):

    username = models.CharField(max_length=25)
    email = models.EmailField()
    password1 = models.CharField(max_length=128)
 
    def save(self, *args, **Kwargs):
        self.password1 = make_password(self.password1)
        super().save(*args, **Kwargs)

    def __str__(self) -> str:
        return self.user