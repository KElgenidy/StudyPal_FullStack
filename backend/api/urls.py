from django.urls import path
from . import views

urlpatterns = [
    path('user/signup/', views.UserCreateView.as_view(), name='user-create'),
    path('courses/create/', views.CourseCreateView.as_view(), name='course-create'),
    path('courses/list/', views.CourseListView.as_view(), name='course-list'),
    path('user/profile/', views.UserProfileView.as_view(), name='user-profile'),
]
