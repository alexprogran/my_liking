from django.shortcuts import render, redirect

from .models import InscrModel
from .forms import InscrFormModel
from django.contrib.auth.models import User


 

# Create your views here.
def user_login(request):
    return render(request,'login.html')

# def inscr(request):
#     if request.method == 'POST':
#         inputEmail = request.POST.get('email')
#         inputPassword = request.POST.get('password')
#         db = InscrModel(
#             email = inputEmail,
#             password = inputPassword,               
#         )

#         db.save()      
#     return render(request,'inscr.html')


def inscr(request):
    if request.method == 'POST':
        form = InscrFormModel(request.POST)
        if form.is_valid():   
            form.save()
            return redirect('login')        
    else:
        form = InscrFormModel()

    
    return render(request, 'inscr.html', {'form':form})




    




