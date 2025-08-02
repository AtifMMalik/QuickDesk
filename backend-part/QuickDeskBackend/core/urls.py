from django.urls import path
from .views import *
urlpatterns = [
    # Auth
    path('register/', RegisterView.as_view(), name='register'),
    path('login/', LoginView.as_view(), name='login'),

    # Category
    path('categories/', CategoryListCreateAPIView.as_view(), name='category-list-create'),
    path('categories/<int:pk>/', CategoryDetailAPIView.as_view(), name='category-detail'),

    # Tickets
    path('tickets/', TicketListCreateAPIView.as_view(), name='ticket-list-create'),
    path('tickets/<int:pk>/', TicketDetailAPIView.as_view(), name='ticket-detail'),

    # Comments
    path('comments/', CommentListCreateAPIView.as_view(), name='comment-list-create'),

    # Votes
    path('votes/', VoteListCreateAPIView.as_view(), name='vote-list-create'),
]
