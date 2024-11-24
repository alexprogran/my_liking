from django.shortcuts import render, redirect
from .forms import FormModelForm


def form(request):
    if request.method == 'POST':
        form = FormModelForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('login')
            
    else:
        form = FormModelForm()
        
    return render(request,'form.html', {'form': form})
