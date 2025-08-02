from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import User, Category, Ticket, Comment, Vote

from django.contrib.auth.admin import UserAdmin as BaseUserAdmin




class UserAdmin(BaseUserAdmin):
    model = User
    list_display = ['email', 'role', 'is_staff']
    ordering = ['email']
    fieldsets = (
        (None, {'fields': ('email', 'password')}),
        ('Permissions', {'fields': ('is_staff', 'is_superuser', 'groups', 'user_permissions')}),
        ('Personal info', {'fields': ('role',)}),
    )
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email', 'role', 'password1', 'password2'),
        }),
    )
    search_fields = ('email',)

admin.site.register(User, UserAdmin)




admin.site.register(Category)
admin.site.register(Ticket)
admin.site.register(Comment)
admin.site.register(Vote)

