from django.urls import path
from app.views import register,login,dashboard
# from rest_framework import viewsets
from rest_framework.routers import DefaultRouter

urlpatterns = [
    path('register/',register,name='register'),
    path('login/',login,name='login'),
    path("dashboard/", dashboard, name="dashboard"), 
]
