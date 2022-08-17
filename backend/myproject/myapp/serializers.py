from rest_framework import serializers
from .models import Task

class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = ['task_name', 'task_id','task_status','start_Time','end_Time' ,'created_Date',
         'approval_Status', 'assigned_Manager', 'task_Description']