from django.db import models

# Create your models here.

class Task(models.Model):
    task_name = models.CharField(max_length=250)
    task_id = models.IntegerField(primary_key=True)
    task_status = models.CharField(max_length=250)
    start_Time = models.TimeField()
    end_Time = models.TimeField()
    created_Date = models.DateField()
    approval_Status = models.CharField(max_length=100)
    assigned_Manager = models.CharField(max_length=300)
    task_Description = models.CharField(max_length=300)

    def __str__(self) -> str:
        return self.task_name