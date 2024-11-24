from django import forms
from .models import InforModel


class FormModelForm(forms.ModelForm):

    class Meta:
        model = InforModel  
        fields = ['nome','email']



    nome = forms.CharField(
        widget= forms.TextInput (attrs = {'class': 'form-control,', 'placeholder': 'Digite seu nome'}),
    label = "Nome")



    email = forms.EmailField(
            widget=forms.EmailInput(attrs={'class': 'form-control', 'placeholder': 'Digite o seu email' }),
            label='E-mail'
        )
        
  
    