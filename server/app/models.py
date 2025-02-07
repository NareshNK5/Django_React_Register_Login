from django.db import models
from django.contrib.auth.models import User,AbstractUser,Group,Permission
# Create your models here.


class User(AbstractUser):
    email = models.EmailField(unique=True)
    groups = models.ManyToManyField(Group,related_name='users',blank=True)
    user_permissions = models.ManyToManyField(Permission,related_name='users',blank=True)

    def __str__(self):
        return self.username