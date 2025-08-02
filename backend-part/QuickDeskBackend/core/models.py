from django.db import models
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
  ROLE_CHOICES = (
    ("end_user", "End User"),
    ("agent", "Support Agent"),
    ("admin", "Admin"),
  )
  role=models.CharField(choices=ROLE_CHOICES, max_length=50,default='end_user')

class Category(models.Model):
  name=models.CharField(max_length=100)


class Ticket(models.Model):
  STATUS_CHOICES=(
    ("open","Open"),
    ("in_progress","In Progress"),
    ("resolved","Resolved"),
    ("closed","Closed"),
  )
  
  title=models.CharField(max_length=200)
  description=models.TextField()
  category=models.ForeignKey(Category,on_delete=models.SET_NULL,null=True)
  attachment=models.FileField(upload_to='attachments/',null=True,blank=True)
  status=models.CharField(max_length=20,choices=STATUS_CHOICES,default=open)
  created_by=models.ForeignKey(User,related_name="tickets",on_delete=models.CASCADE)
  assigned_to=models.ForeignKey(User,null=True,blank=True,related_name="assigned_tickets",on_delete=models.SET_NULL)
  created_at=models.DateTimeField(auto_now_add=True)
  updated_at=models.DateTimeField(auto_now=True)
  
class Comment(models.Model):
  ticket=models.ForeignKey(Ticket,on_delete=models.CASCADE)
  user=models.ForeignKey(User,on_delete=models.CASCADE)
  content=models.TextField()
  timestamp=models.DateTimeField(auto_now_add=True)
class Vote(models.Model):
    ticket=models.ForeignKey(Ticket, on_delete=models.CASCADE)
    vote_type=models.CharField(max_length=10,choices=(('up','Upvote'),('down','Downvote')))
  
  
  
