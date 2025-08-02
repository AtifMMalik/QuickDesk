from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import User, Category, Ticket, Comment, Vote


class CustomUserAdmin(UserAdmin):
    model = User
    list_display = ('username', 'email', 'role', 'is_staff', 'is_superuser')
    fieldsets = UserAdmin.fieldsets + (
        ('Role Info', {'fields': ('role',)}),
    )
    add_fieldsets = UserAdmin.add_fieldsets + (
        ('Role Info', {'fields': ('role',)}),
    )


admin.site.register(User, CustomUserAdmin)
admin.site.register(Category)
admin.site.register(Ticket)
admin.site.register(Comment)
admin.site.register(Vote)

