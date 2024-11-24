from typing import Any
from django import forms
from .models import InscrModel 
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User


class InscrFormModel(forms.ModelForm):

    class Meta:
        model = InscrModel
        fields = ['username','email', 'password1']
    
    username = forms.CharField(
        widget=forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'Nome de usuário'}),
        label='Username'
    )

    email = forms.EmailField(
        widget=forms.EmailInput(attrs={'class': 'form-control', 'placeholder': 'Digite o seu email' }),
        label='Email'
    )
    
    password1 = forms.CharField(
        widget=forms.TextInput (attrs = {'class': 'input1', 'placeholder': 'Senha'}),
    label = 'Senha')

    password2 = forms.CharField(
    widget=forms.TextInput (attrs = {'class': 'form-control', 'placeholder': 'Confirme sua senha'}),
    label = 'Confirmar senha', required='False')
    

    def clean(self):
        cleaned_data =super().clean()

        username = cleaned_data.get('username')
        password1 = cleaned_data.get('password1')
        password2 = cleaned_data.get('password2')

        if InscrModel.objects.filter(username=username).exists():
            self.add_error('username','*Nome de usuário já em uso.')
        
        if len(username) < 4:
            self.add_error('username','Usuário precisa conter um mínimo de 4 caractres, não incializado com números')


        if password1 != password2:
            self.add_error('password2','Senhas não conhecidentes.')
        
      

        return cleaned_data
    

  
    



