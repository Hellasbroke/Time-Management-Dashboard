from django.urls import path
from . import views

urlpatterns = [
    path('',views.TaskViewset.as_view(), name='task')
]