from django.db import models

class InforModel(models.Model):
    nome = models.CharField(max_length=25)
    email = models.EmailField(unique=True)

    def str(self):
        return self.nome
