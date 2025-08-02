# from django.db import models
# from django.contrib.auth.models import AbstractUser
# from django.utils.translation import gettext_lazy as _

# from django.contrib.auth.base_user import BaseUserManager

# class UserManager(BaseUserManager):
#     def create_user(self, email, password=None, **extra_fields):
#         if not email:
#             raise ValueError('The Email field must be set')
#         email = self.normalize_email(email)
#         user = self.model(email=email, **extra_fields)
#         user.set_password(password)
#         user.save(using=self._db)
#         return user

#     def create_superuser(self, email, password=None, **extra_fields):
#         extra_fields.setdefault('is_staff', True)
#         extra_fields.setdefault('is_superuser', True)

#         if extra_fields.get('is_staff') is not True:
#             raise ValueError('Superuser must have is_staff=True.')
#         if extra_fields.get('is_superuser') is not True:
#             raise ValueError('Superuser must have is_superuser=True.')

#         return self.create_user(email, password, **extra_fields)

# class User(AbstractUser):
#     username = None  # remove default username field

#     ROLE_CHOICES = (
#         ("end_user", "End User"),
#         ("agent", "Support Agent"),
#         ("admin", "Admin"),
#     )

#     email = models.EmailField(_('email address'), unique=True)
#     role = models.CharField(choices=ROLE_CHOICES, max_length=50, default='end_user')

#     USERNAME_FIELD = 'email'
#     REQUIRED_FIELDS = ['role', 'first_name', 'last_name']  # Optional fields you want during createsuperuser

#     objects = UserManager()  # Use your custom manager

#     def __str__(self):
#         return self.email



# class Ticket(models.Model):
#   STATUS_CHOICES=(
#     ("open","Open"),
#     ("in_progress","In Progress"),
#     ("resolved","Resolved"),
#     ("closed","Closed"),
#   )
  
#   title=models.CharField(max_length=200)
#   description=models.TextField()
#   category=models.ForeignKey("Category",on_delete=models.SET_NULL,null=True)
#   attachment=models.FileField(upload_to='attachments/',null=True,blank=True)
#   status=models.CharField(max_length=20,choices=STATUS_CHOICES,default=open)
#   created_by=models.ForeignKey(User,related_name="tickets",on_delete=models.CASCADE)
#   assigned_to=models.ForeignKey(User,null=True,blank=True,related_name="assigned_tickets",on_delete=models.SET_NULL)
#   created_at=models.DateTimeField(auto_now_add=True)
#   updated_at=models.DateTimeField(auto_now=True)
  
# class Comment(models.Model):
#   ticket=models.ForeignKey(Ticket,on_delete=models.CASCADE)
#   user=models.ForeignKey(User,on_delete=models.CASCADE)
#   content=models.TextField()
#   timestamp=models.DateTimeField(auto_now_add=True)
# class Vote(models.Model):
#     ticket=models.ForeignKey(Ticket, on_delete=models.CASCADE)
#     vote_type=models.CharField(max_length=10,choices=(('up','Upvote'),('down','Downvote')))
  
  
  


from django.db import models
from django.contrib.auth.models import AbstractUser
from django.utils.translation import gettext_lazy as _
from django.contrib.auth.base_user import BaseUserManager


class UserManager(BaseUserManager):
    def create_user(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError('The Email field must be set')
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)

        if extra_fields.get('is_staff') is not True:
            raise ValueError('Superuser must have is_staff=True.')
        if extra_fields.get('is_superuser') is not True:
            raise ValueError('Superuser must have is_superuser=True.')

        return self.create_user(email, password, **extra_fields)


class User(AbstractUser):
    username = None

    ROLE_CHOICES = (
        ("end_user", "End User"),
        ("agent", "Support Agent"),
        ("admin", "Admin"),
    )

    email = models.EmailField(_('email address'), unique=True)
    role = models.CharField(choices=ROLE_CHOICES, max_length=50, default='end_user')

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['role', 'first_name', 'last_name']

    objects = UserManager()

    def __str__(self):
        return self.email


class Category(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class Ticket(models.Model):
    STATUS_CHOICES = (
        ("open", "Open"),
        ("in_progress", "In Progress"),
        ("resolved", "Resolved"),
        ("closed", "Closed"),
    )

    title = models.CharField(max_length=200)
    description = models.TextField()
    category = models.ForeignKey("Category", on_delete=models.SET_NULL, null=True)
    attachment = models.FileField(upload_to='attachments/', null=True, blank=True)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='open')
    created_by = models.ForeignKey(User, related_name="tickets", on_delete=models.CASCADE)
    assigned_to = models.ForeignKey(User, null=True, blank=True, related_name="assigned_tickets", on_delete=models.SET_NULL)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


class Comment(models.Model):
    ticket = models.ForeignKey(Ticket, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    content = models.TextField()
    timestamp = models.DateTimeField(auto_now_add=True)


class Vote(models.Model):
    ticket = models.ForeignKey(Ticket, on_delete=models.CASCADE)
    vote_type = models.CharField(max_length=10, choices=(('up', 'Upvote'), ('down', 'Downvote')))
