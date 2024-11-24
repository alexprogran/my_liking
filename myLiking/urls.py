
from django.contrib import admin
from django.urls import path
from login.views import user_login, inscr
from home.views import form
urlpatterns = [
    path("admin/", admin.site.urls),
    path('',user_login, name='login'),
    path('inscr/',inscr, name='inscr'),
    path('form/',form, name='form'),
]
