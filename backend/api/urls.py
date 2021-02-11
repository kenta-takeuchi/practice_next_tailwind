from django.urls import path
from django.conf.urls import include

from rest_framework import routers

from .views import (
    CreateUserView,
    PostListView,
    PostRetrieveView,
    TaskViewSet,
    TaskListView,
    TaskRetrieveView
)

router = routers.DefaultRouter()
router.register('tasks', TaskViewSet, basename='tasks')

app_name = 'api'

urlpatterns = [
    path('posts/', PostListView.as_view(), name='posts'),
    path('posts/<str:pk>', PostRetrieveView.as_view(), name='posts_retrieve'),
    path('task/list/', TaskListView.as_view(), name='task_list'),
    path('task/detail/<str:pk>', TaskRetrieveView.as_view(), name='tasks_detail'),
    path('register/', CreateUserView.as_view(), name='register'),
    path('auth/', include('djoser.urls.jwt')),
    path('', include(router.urls)),
]